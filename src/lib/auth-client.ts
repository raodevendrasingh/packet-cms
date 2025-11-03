import { createAuthClient } from "better-auth/react";
import { reactStartCookies } from "better-auth/react-start";

export const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL as string,
	plugins: [reactStartCookies()],
});
