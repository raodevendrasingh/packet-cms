import {
	IconBrandSafari,
	IconHelp,
	IconKey,
	IconNotebook,
	IconPhoto,
	IconSettings,
	IconStack2,
	IconTags,
	IconUserSquareRounded,
	IconWebhook,
} from "@tabler/icons-react";

export const sidebarData = {
	user: {
		name: "dsrao",
		email: "dsrao@gmail.com",
		avatar: "/avatars/dsrao.jpg",
	},
	navPrimary: [
		{
			title: "Dash",
			url: "/dash",
			icon: IconBrandSafari,
		},
		{
			title: "Posts",
			url: "/posts",
			icon: IconNotebook,
		},
		{
			title: "Categories",
			url: "/categories",
			icon: IconStack2,
		},
		{
			title: "Tags",
			url: "/tags",
			icon: IconTags,
		},
		{
			title: "Assets",
			url: "/assets",
			icon: IconPhoto,
		},
		{
			title: "Authors",
			url: "/authors",
			icon: IconUserSquareRounded,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/settings",
			icon: IconSettings,
		},
		{
			title: "Get Help",
			url: "/help",
			icon: IconHelp,
		},
	],
	navDevelopers: [
		{
			title: "API Keys",
			url: "/keys",
			icon: IconKey,
		},
		{
			title: "Webhooks",
			url: "/webhooks",
			icon: IconWebhook,
		},
	],
};
