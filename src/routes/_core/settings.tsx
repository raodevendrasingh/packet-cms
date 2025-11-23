import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Settings Page</div>;
}
