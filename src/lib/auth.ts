import { env } from "cloudflare:workers";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { reactStartCookies } from "better-auth/react-start";
import { getDB } from "@/db/drizzle";
import * as schema from "@/db/schema";

export const authConfig = {
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
	},
	plugins: [reactStartCookies()],
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	secret: process.env.BETTER_AUTH_SECRET,
};

export const auth: () => ReturnType<typeof betterAuth<typeof authConfig>> = () => {
	const db = getDB(env.HYPERDRIVE.connectionString);

	return betterAuth({
		...authConfig,
		database: drizzleAdapter(db, {
			provider: "pg",
			schema: {
				...schema,
			},
		}),
	});
};
