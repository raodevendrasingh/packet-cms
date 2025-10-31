import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
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

type AuthFormProps = {
	mode?: "login" | "register";
	className?: string;
};

export function AuthForm({ mode = "login", className }: AuthFormProps) {
	const navigate = useNavigate();
	const isRegister = mode === "register";
	const [isPending, setIsPending] = useState(false);

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			...(isRegister && { name: "" }),
		},
		onSubmit: async ({ value }) => {
			if (isRegister) {
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
			} else {
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
			}
		},
	});

	let buttonText = "Login";
	if (form.state.isSubmitting) {
		buttonText = "Loading...";
	} else if (isRegister) {
		buttonText = "Sign up";
	}

	return (
		<form
			className={cn("flex flex-col", className)}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<FieldGroup>
				<div className="flex flex-col items-center gap-1 text-center">
					<h1 className="font-bold text-2xl">
						{isRegister ? "Create an account" : "Login to your account"}
					</h1>
					<p className="text-balance text-muted-foreground text-sm">
						{isRegister
							? "Enter your information to create an account"
							: "Enter your email below to login to your account"}
					</p>
				</div>
				<div className="space-y-4">
					{isRegister && (
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
					)}
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
									{!isRegister && (
										<Link
											className="ml-auto text-sm underline-offset-4 hover:underline"
											to="/sign-in"
										>
											Forgot your password?
										</Link>
									)}
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
					<Button type="button" variant="outline">
						<svg
							height="32"
							viewBox="0 0 16 16"
							width="32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Google</title>
							<g clip-rule="evenodd" fill="none" fill-rule="evenodd">
								<path
									d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
									fill="#F44336"
									opacity=".987"
								/>
								<path
									d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
									fill="#FFC107"
									opacity=".997"
								/>
								<path
									d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
									fill="#448AFF"
									opacity=".999"
								/>
								<path
									d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
									fill="#43A047"
									opacity=".993"
								/>
							</g>
						</svg>
						{isRegister ? "Sign up with Google" : "Login with Google"}
					</Button>
					<FieldDescription className="text-center">
						{isRegister ? "Already have an account? " : "Don't have an account? "}
						<Link
							className="underline underline-offset-4"
							to={isRegister ? "/sign-in" : "/sign-up"}
						>
							{isRegister ? "Sign in" : "Sign up"}
						</Link>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	);
}
