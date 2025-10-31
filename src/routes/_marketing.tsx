import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/header";

export const Route = createFileRoute("/_marketing")({
	component: MarketingLayout,
});

function MarketingLayout() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<Outlet />
		</div>
	);
}
