import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="min-h-screen bg-zinc-900">
			<section className="px-6 py-20 text-center">
				<div className="mx-auto max-w-3xl">
					<h1 className="font-black text-5xl text-white [letter-spacing:-0.05em] md:text-6xl">
						Welcome
					</h1>
					<p className="mt-4 text-gray-300 text-lg md:text-xl">
						Your app is ready. Start building by editing
						<code className="ml-2 rounded bg-lime-900/30 px-2 py-1 text-lime-400">
							/src/routes/index.tsx
						</code>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
