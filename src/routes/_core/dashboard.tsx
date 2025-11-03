import { createFileRoute, useNavigate, useRouteContext } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/_core/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	const navigate = useNavigate();
	const { session } = useRouteContext({ from: "/_core" });

	const handleSignOut = async () => {
		await authClient.signOut();
		navigate({ to: "/" });
	};

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<h1>
				Welcome, {session?.data?.user?.name} ({session?.data?.user?.email} )!
			</h1>
			<Button onClick={handleSignOut}>Sign Out</Button>
		</div>
	);
}
