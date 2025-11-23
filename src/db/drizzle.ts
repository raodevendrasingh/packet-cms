import { createServerOnlyFn } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

export const getDB = createServerOnlyFn((url: string) => {
	const client = postgres(url);
	return drizzle(client, { schema });
});

export type DB = ReturnType<typeof getDB>;
