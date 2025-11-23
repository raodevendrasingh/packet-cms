import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/webhooks")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Webhooks Page</div>;
}
