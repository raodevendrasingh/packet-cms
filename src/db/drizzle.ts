import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

export const getDB = (url: string) => {
	const client = postgres(url);
	const db = drizzle(client, { schema });
	return db;
};

export type DB = ReturnType<typeof getDB>;
