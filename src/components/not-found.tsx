import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
			<div className="mx-auto max-w-md text-center">
				<h1 className="font-semibold text-6xl md:text-7xl">404</h1>
				<h2 className="mt-4 font-semibold text-2xl md:text-3xl">Page Not Found</h2>
				<p className="mt-4 text-muted-foreground">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<Button asChild size="lg">
						<Link to="/">Go Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
