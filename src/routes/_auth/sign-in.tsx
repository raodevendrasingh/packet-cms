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

export const Route = createFileRoute("/_auth/sign-in")({
	component: SignIn,
});

function SignIn() {
	const navigate = useNavigate();
	const [isPending, setIsPending] = useState(false);

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signIn.email({
				email: value.email,
				password: value.password,
				fetchOptions: {
					onRequest: () => {
						setIsPending(true);
					},
					onSuccess: () => {
						setIsPending(false);
						toast.success("Signed in successfully!");
						navigate({ to: "/dashboard" });
					},
					onError: (ctx) => {
						setIsPending(false);
						toast.error("Failed to authenticate", {
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

	let buttonText = "Login";
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
					<h1 className="font-bold text-2xl">Login to your account</h1>
					<p className="text-balance text-muted-foreground text-sm">
						Enter your email below to login to your account
					</p>
				</div>
				<div className="space-y-4">
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
								<div className="flex items-center">
									<FieldLabel htmlFor={field.name}>Password</FieldLabel>
									<Link
										className="ml-auto text-sm underline-offset-4 hover:underline"
										to="/sign-in"
									>
										Forgot your password?
									</Link>
								</div>
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
						{"Don't have an account? "}
						<Link className="underline underline-offset-4" to="/sign-up">
							Sign up
						</Link>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	);
}
