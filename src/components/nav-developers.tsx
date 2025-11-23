import type { Icon } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavDevelopers({
	items,
}: {
	items: {
		name: string;
		url: string;
		icon: Icon;
	}[];
}) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Developers</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild>
							<Link to={item.url}>
								<item.icon />
								<span>{item.name}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
