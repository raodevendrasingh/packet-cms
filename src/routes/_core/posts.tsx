import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_core/posts")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Posts Page</div>;
}
