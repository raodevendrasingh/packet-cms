import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/tags")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Tags Page</div>;
}
