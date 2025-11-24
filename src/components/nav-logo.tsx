import {
	IconBox,
	IconLayoutSidebarLeftCollapseFilled,
	IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavLogo() {
	const { state } = useSidebar();
	const [isFullyCollapsed, setIsFullyCollapsed] = useState(false);

	useEffect(() => {
		if (state === "collapsed") {
			const timer = setTimeout(() => {
				setIsFullyCollapsed(true);
			}, 200);
			return () => {
				clearTimeout(timer);
				setIsFullyCollapsed(false);
			};
		}
		setIsFullyCollapsed(false);
	}, [state]);

	return (
		<div className="flex items-center justify-between">
			<div className="group relative">
				<Link
					className={cn(
						"flex items-center justify-center transition-opacity duration-200",
						isFullyCollapsed && "group-hover:opacity-0"
					)}
					to="/dash"
				>
					<div className="aspect-square size-9">
						<IconBox className="size-9 text-lime-500" strokeWidth={2} />
					</div>
				</Link>
				{isFullyCollapsed && (
					<div
						className={cn(
							"absolute top-0 left-0 z-99 transition-opacity duration-200",
							"opacity-0 group-hover:opacity-100"
						)}
					>
						<SidebarTrigger
							className="size-9"
							icon={IconLayoutSidebarLeftExpandFilled}
							id="inner-sidebar-trigger"
						/>
					</div>
				)}
			</div>
			<SidebarTrigger
				className={cn(state === "expanded" ? "block" : "hidden")}
				icon={IconLayoutSidebarLeftCollapseFilled}
				id="outer-sidebar-trigger"
			/>
		</div>
	);
}
