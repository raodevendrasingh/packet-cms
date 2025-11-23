import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type ErrorProps = {
	error: Error | unknown;
	reset?: () => void;
};

function getErrorMessage(error: Error | unknown): string {
	if (error instanceof Error) {
		return error.message;
	}
	if (typeof error === "object" && error !== null) {
		const errorObj = error as Record<string, unknown>;
		if (errorObj.message) {
			return String(errorObj.message);
		}
		if (errorObj.status && errorObj.status !== 500) {
			return `Error ${errorObj.status}`;
		}
	}
	return "An unexpected error occurred. Please try again.";
}

export function ErrorComponent({ error, reset }: ErrorProps) {
	const message = getErrorMessage(error);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
			<div className="mx-auto max-w-md text-center">
				<h1 className="font-semibold text-6xl md:text-7xl">Error</h1>
				<h2 className="mt-4 font-semibold text-2xl md:text-3xl">Something went wrong</h2>
				<p className="mt-4 text-muted-foreground">{message}</p>
				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
					{reset && (
						<Button onClick={reset} size="lg" variant="outline">
							Try Again
						</Button>
					)}
					<Button asChild size="lg">
						<Link to="/">Go Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
