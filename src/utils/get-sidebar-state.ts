import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

export const fetchSidebarState = createServerFn({ method: "GET" }).handler(() => {
	const cookie = getCookie("sidebar_state");
	// Default to true (expanded) if cookie is not set
	return cookie !== "false";
});
