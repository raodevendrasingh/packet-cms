import { Menu01Icon, MultiplicationSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
	const [menuState, setMenuState] = React.useState(false);
	return (
		<header>
			<nav
				className="fixed z-20 w-full border-b border-dashed bg-background backdrop-blur md:relative"
				data-state={menuState && "active"}
			>
				<div className="m-auto max-w-6xl px-6">
					<div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
						<div className="flex w-full justify-between lg:w-auto">
							<Link
								aria-label="home"
								className="flex items-center space-x-2 font-semibold text-xl"
								to="/"
							>
								Packet CMS
							</Link>

							<button
								aria-label={menuState === true ? "Close Menu" : "Open Menu"}
								className="-m-2.5 -mr-4 relative z-20 block cursor-pointer p-2.5 lg:hidden"
								onClick={() => setMenuState(!menuState)}
								type="button"
							>
								<HugeiconsIcon
									className="m-auto size-6 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200"
									icon={Menu01Icon}
								/>
								<HugeiconsIcon
									className="-rotate-180 absolute inset-0 m-auto size-6 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200"
									icon={MultiplicationSignIcon}
								/>
							</button>
						</div>

						<div className="mb-6 in-data-[state=active]:block hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-muted/20 md:flex-nowrap lg:m-0 lg:flex lg:in-data-[state=active]:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
							<ThemeToggle />
							<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
								<Button asChild size="sm" variant="outline">
									<Link to="/sign-in">
										<span>Sign In</span>
									</Link>
								</Button>
								<Button asChild size="sm">
									<Link to="/sign-up">
										<span>Sign Up</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
