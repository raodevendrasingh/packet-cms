import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/authors")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Authors Page</div>;
}
