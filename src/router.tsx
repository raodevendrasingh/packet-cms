import { createRouter } from "@tanstack/react-router";
import { ErrorComponent } from "@/components/error";
import { NotFound } from "@/components/not-found";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
	createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: ({ error, reset }) => <ErrorComponent error={error} reset={reset} />,
		defaultNotFoundComponent: NotFound,
	});
