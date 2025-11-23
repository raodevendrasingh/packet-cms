import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/categories")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Categories Page</div>;
}
