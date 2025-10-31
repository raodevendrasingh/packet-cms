import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/_core/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	const navigate = useNavigate();
	const { data: session, isPending } = authClient.useSession();

	const handleSignOut = async () => {
		await authClient.signOut();
		navigate({ to: "/" });
	};

	if (isPending) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-primary border-b-2" />
					<p className="text-muted-foreground">Loading session...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mx-auto max-w-2xl">
				<div className="mb-8 flex items-center justify-between">
					<h1 className="font-bold text-3xl">Dashboard</h1>
					<Button onClick={handleSignOut} variant="outline">
						Sign Out
					</Button>
				</div>

				<div className="rounded-lg border p-6">
					<h2 className="mb-6 font-semibold text-xl">User Profile</h2>
					{session?.user ? (
						<div className="flex items-center space-x-4">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<span className="font-semibold text-xl">
									{session.user.name
										? session.user.name.charAt(0).toUpperCase()
										: session.user.email.charAt(0).toUpperCase()}
								</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">
									{session.user.name || "User"}
								</h3>
								<p className="text-muted-foreground">{session.user.email}</p>
							</div>
						</div>
					) : (
						<p className="text-muted-foreground">No user data available</p>
					)}
				</div>
			</div>
		</div>
	);
}
