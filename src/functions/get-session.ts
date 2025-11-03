import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { authClient } from "@/lib/auth-client";

export const fetchSession = createServerFn({ method: "GET" }).handler(() =>
	authClient.getSession({
		fetchOptions: { headers: getRequestHeaders() },
	})
);
