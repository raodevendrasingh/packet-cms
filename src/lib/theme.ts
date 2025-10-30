import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import * as z from "zod";

const themeValidator = z.union([z.literal("light"), z.literal("dark")]);
export type T = z.infer<typeof themeValidator>;
const storageKey = "_preferred-packet-theme";

export const getThemeServerFn = createServerFn().handler(
	async () => (getCookie(storageKey) || "light") as T
);

export const setThemeServerFn = createServerFn({ method: "POST" })
	.inputValidator(themeValidator)
	.handler(async ({ data }) => setCookie(storageKey, data));
