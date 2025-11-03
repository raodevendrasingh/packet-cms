import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { GoogleAuthButton } from "@/components/google-auth-button";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_auth/sign-up")({
	component: SignUp,
});

function SignUp() {
	const navigate = useNavigate();
	const [isPending, setIsPending] = useState(false);

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email({
				email: value.email,
				password: value.password,
				name: value.name as string,
				fetchOptions: {
					onRequest: () => {
						setIsPending(true);
					},
					onSuccess: () => {
						setIsPending(false);
						toast.success("Account created successfully!");
						navigate({ to: "/dashboard" });
					},
					onError: (ctx) => {
						setIsPending(false);
						toast.error("Failed to create account", {
							description:
								typeof ctx.error === "string"
									? ctx.error
									: ctx.error?.message || "Unknown error",
						});
					},
				},
			});
		},
	});

	let buttonText = "Sign up";
	if (form.state.isSubmitting) {
		buttonText = "Loading...";
	}

	return (
		<form
			className={cn("flex flex-col")}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<FieldGroup>
				<div className="flex flex-col items-center gap-1 text-center">
					<h1 className="font-bold text-2xl">Create an account</h1>
					<p className="text-balance text-muted-foreground text-sm">
						Enter your information to create an account
					</p>
				</div>
				<div className="space-y-4">
					<form.Field
						name="name"
						validators={{
							onChange: z.string().min(2, "Name must be at least 2 characters"),
						}}
					>
						{(field) => (
							<Field>
								<FieldLabel htmlFor={field.name}>Name</FieldLabel>
								<Input
									aria-invalid={field.state.meta.errors.length > 0}
									id={field.name}
									name={field.name}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									placeholder="John Doe"
									value={field.state.value}
								/>
								{field.state.meta.errors.length > 0 && (
									<FieldError errors={field.state.meta.errors} />
								)}
							</Field>
						)}
					</form.Field>
					<form.Field
						name="email"
						validators={{
							onChange: z.string().email("Please enter a valid email address"),
						}}
					>
						{(field) => (
							<Field>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									aria-invalid={field.state.meta.errors.length > 0}
									id={field.name}
									name={field.name}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									placeholder="m@example.com"
									type="email"
									value={field.state.value}
								/>
								{field.state.meta.errors.length > 0 && (
									<FieldError errors={field.state.meta.errors} />
								)}
							</Field>
						)}
					</form.Field>
					<form.Field
						name="password"
						validators={{
							onChange: z.string().min(8, "Password must be at least 8 characters"),
						}}
					>
						{(field) => (
							<Field>
								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
								<Input
									aria-invalid={field.state.meta.errors.length > 0}
									id={field.name}
									name={field.name}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									type="password"
									value={field.state.value}
								/>
								{field.state.meta.errors.length > 0 && (
									<FieldError errors={field.state.meta.errors} />
								)}
							</Field>
						)}
					</form.Field>
				</div>
				<Field>
					<Button disabled={isPending} type="submit">
						{isPending ? "Loading..." : buttonText}
					</Button>
				</Field>
				<FieldSeparator>Or continue with</FieldSeparator>
				<Field>
					<GoogleAuthButton />
					<FieldDescription className="text-center">
						{"Already have an account? "}
						<Link className="underline underline-offset-4" to="/sign-in">
							Sign in
						</Link>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	);
}
