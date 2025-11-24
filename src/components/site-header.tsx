import { IconLayoutSidebarLeftExpandFilled } from "@tabler/icons-react";
import { useLocation } from "@tanstack/react-router";
import { sidebarData } from "@/data/sidebar-data";
import { cn } from "@/lib/utils";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

function getPageTitle(pathname: string): string {
	// Combine all navigation items
	const allItems = [
		...sidebarData.navPrimary,
		...sidebarData.navSecondary,
		...sidebarData.navDevelopers,
	];

	// Find matching item by URL
	const matchedItem = allItems.find((navItem) => navItem.url === pathname);
	return matchedItem?.title || "Parcel CMS";
}

export function SiteHeader() {
	const location = useLocation();
	const { state } = useSidebar();
	const pageName = getPageTitle(location.pathname);

	return (
		<header className="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger
					className={cn("size-8 md:hidden", state === "expanded" ? "block" : "hidden")}
					icon={IconLayoutSidebarLeftExpandFilled}
					id="layout-sidebar-trigger"
				/>
				<h1 className="font-medium text-base">{pageName}</h1>
			</div>
		</header>
	);
}
