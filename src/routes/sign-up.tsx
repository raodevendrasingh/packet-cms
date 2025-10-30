import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up")({
	component: SignUp,
});

function SignUp() {
	return <div>Hello "/sign-up"!</div>;
}
