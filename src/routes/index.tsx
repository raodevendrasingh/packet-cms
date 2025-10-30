import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="min-h-screen bg-background">
			<ModeToggle />
			<section className="px-6 py-20 text-center">
				<div className="mx-auto max-w-3xl">
					<h1 className="font-bold text-4xl text-primary md:text-5xl">
						Headless content, delivered in packets
					</h1>
					<p className="mt-4 text-lg text-muted-foreground md:text-xl">
						A fast, minimal CMS for publishing stories, product updates, and everything
						in between — made for the modern web.
					</p>
				</div>
			</section>
		</div>
	);
}
