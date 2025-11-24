import type { Icon } from "@tabler/icons-react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type NavPrimaryItem = {
	title: string;
	url: string;
	icon?: Icon;
};

export function NavPrimary({ items }: { items: NavPrimaryItem[] }) {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<SidebarGroup className="mt-1 p-1.5">
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					{items.map((item) => {
						const isActive = location.pathname === item.url;
						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									className={cn(
										"h-9 group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-5 [&>svg]:shrink-0",
										isActive && "data-[active=true]:bg-muted/80"
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
