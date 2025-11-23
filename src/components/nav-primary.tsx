import type { Icon } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavPrimaryItem = {
	title: string;
	url: string;
	icon?: Icon;
};

export function NavPrimary({ items }: { items: NavPrimaryItem[] }) {
	const navigate = useNavigate();
	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								className="[&>svg]:size-4"
								onClick={() => navigate({ to: item.url })}
								tooltip={item.title}
							>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
