import { IconBox } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import type * as React from "react";
import { NavDevelopers } from "@/components/nav-developers";
import { NavPrimary } from "@/components/nav-primary";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/data/sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const navigate = useNavigate();
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="data-[slot=sidebar-menu-button]:p-1.5!"
							onClick={() => navigate({ to: "/dash" })}
						>
							<IconBox className="size-5!" />
							<span className="font-semibold text-base">Parcel CMS</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavPrimary items={sidebarData.navPrimary} />
				<NavDevelopers items={sidebarData.navDevelopers} />
				<NavSecondary className="mt-auto" items={sidebarData.navSecondary} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={sidebarData.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
