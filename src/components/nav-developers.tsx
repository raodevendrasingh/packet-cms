import type { Icon } from "@tabler/icons-react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavDevelopers({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: Icon;
	}[];
}) {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:-mt-2 p-1.5">
			<SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
				Developers
			</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => {
					const isActive = location.pathname === item.url;
					return (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								className={cn(
									"h-9 group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-5 [&>svg]:shrink-0",
									isActive && "data-[active=true]:bg-muted!"
								)}
								isActive={isActive}
								onClick={() => navigate({ to: item.url })}
								tooltip={item.title}
							>
								{item.icon && <item.icon strokeWidth={2} />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
