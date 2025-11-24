import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { fetchSession } from "@/utils/get-session";
import { fetchSidebarState } from "@/utils/get-sidebar-state";

export const Route = createFileRoute("/_core")({
	beforeLoad: async ({ location }) => {
		const [session, sidebarState] = await Promise.all([fetchSession(), fetchSidebarState()]);

		if (!session?.data?.user) {
			throw redirect({
				to: "/sign-in",
				search: { redirect: location.href },
			});
		}
		return { session, sidebarState };
	},
	component: CoreLayout,
});

function CoreLayout() {
	const { sidebarState } = Route.useRouteContext();
	return (
		<SidebarProvider defaultOpen={sidebarState}>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2 p-5">
						<Outlet />
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
