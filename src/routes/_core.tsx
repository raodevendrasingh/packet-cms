import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { fetchSession } from "@/functions/get-session";

export const Route = createFileRoute("/_core")({
	beforeLoad: async ({ location }) => {
		const session = await fetchSession();

		if (!session?.data?.user) {
			throw redirect({
				to: "/sign-in",
				search: { redirect: location.href },
			});
		}

		return { session };
	},
	component: CoreLayout,
});

function CoreLayout() {
	return (
		<div className="min-h-screen bg-background">
			<Outlet />
		</div>
	);
}
