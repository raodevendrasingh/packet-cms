import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/keys")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Keys Page</div>;
}
