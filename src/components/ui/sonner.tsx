import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "@/providers/theme-provider";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme } = useTheme();
	const sonnerTheme = theme === "dark" ? "dark" : "light";

	return (
		<Sonner
			className="toaster group"
			style={
				{
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
				} as React.CSSProperties
			}
			theme={sonnerTheme as ToasterProps["theme"]}
			{...props}
		/>
	);
};

export { Toaster };
