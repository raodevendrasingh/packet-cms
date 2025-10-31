import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero";

export const Route = createFileRoute("/_marketing/")({ component: Home });

function Home() {
	return (
		<div>
			<Hero />
		</div>
	);
}
