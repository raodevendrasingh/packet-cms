import { createFileRoute, useNavigate, useRouteContext } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/_core/dash")({
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
		<div className="flex flex-1 flex-col">
			<div className="@container/main flex flex-1 flex-col gap-2">
				<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<div className="flex flex-col items-center justify-center">
						<h1>
							Welcome, {session?.data?.user?.name} ({session?.data?.user?.email} )!
						</h1>
						<Button onClick={handleSignOut}>Sign Out</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
