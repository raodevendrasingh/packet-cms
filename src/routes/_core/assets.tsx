import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/assets")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Assets Page</div>;
}
