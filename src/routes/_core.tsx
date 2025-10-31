import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_core")({
	component: CoreLayout,
});

function CoreLayout() {
	return (
		<div className="min-h-screen bg-background">
			<Outlet />
		</div>
	);
}
