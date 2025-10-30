import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import Hero from "@/components/hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<Hero />
		</div>
	);
}
