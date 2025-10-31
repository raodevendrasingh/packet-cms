import { CubeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import placeholder from "@/assets/placeholder.svg";
import { AuthForm } from "@/components/auth-form";

export const Route = createFileRoute("/sign-up")({
	component: SignUp,
});

function SignUp() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link className="flex items-center gap-2 font-medium" to="/">
						<div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<HugeiconsIcon className="size-4" icon={CubeIcon} />
						</div>
						Packet CMS
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<AuthForm mode="register" />
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<img
					alt=""
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					height={1200}
					src={placeholder}
					width={800}
				/>
			</div>
		</div>
	);
}
