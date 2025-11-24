import type { Icon } from "@tabler/icons-react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import type * as React from "react";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type NavSecondaryItem = {
	title: string;
	url: string;
	icon: Icon;
};

export function NavSecondary({
	items,
	...props
}: {
	items: NavSecondaryItem[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
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
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
