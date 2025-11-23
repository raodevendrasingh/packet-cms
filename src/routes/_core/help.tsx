import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/help")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Help Page</div>;
}
