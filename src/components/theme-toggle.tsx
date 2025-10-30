import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<Button onClick={toggleTheme} size="icon" variant="outline">
			{theme === "dark" ? (
				<HugeiconsIcon className="text-primary" icon={Moon02Icon} />
			) : (
				<HugeiconsIcon className="text-primary" icon={Sun02Icon} />
			)}
		</Button>
	);
}
