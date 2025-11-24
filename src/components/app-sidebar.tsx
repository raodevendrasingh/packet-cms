import type * as React from "react";
import { NavDevelopers } from "@/components/nav-developers";
import { NavPrimary } from "@/components/nav-primary";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { sidebarData } from "@/data/sidebar-data";
import { NavLogo } from "./nav-logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="p-1.5">
				<NavLogo />
			</SidebarHeader>
			<SidebarContent className="group-data-[collapsible=icon]:gap-0">
				<NavPrimary items={sidebarData.navPrimary} />
				<NavDevelopers items={sidebarData.navDevelopers} />
				<NavSecondary className="mt-auto p-1.5" items={sidebarData.navSecondary} />
			</SidebarContent>
			<SidebarFooter className="p-1">
				<NavUser user={sidebarData.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
