const { title, description, repository } = require("../../package");

module.exports = {
	theme: "xenon",
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: title,
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		["link", { rel: "icon", href: "/icons/favicon.ico" }],
		["link", { rel: "manifest", href: "/manifest.json" }],
		["meta", { name: "theme-color", content: "#a4a4a4" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
		["link", { rel: "apple-touch-icon", href: "/icons/favicon-152.png" }],
		["link", { rel: "mask-icon", href: "/xinux.svg", color: "#a4a4a4" }],
		[
			"meta",
			{
				name: "msapplication-TileImage",
				content: "/icons/favicon-144-precomposed.png",
			},
		],
		["meta", { name: "msapplication-TileColor", content: "#a4a4a4" }],
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		xenon: {
			defaultDarkTheme: true,
			disableThemeIgnore: false,
			extraOptions: {
				below: "XenonMenu",
			},
		},
		logo: "/xinux.svg",
		searchPlaceholder: "Izlash...",
		smoothScroll: true,
		repo: repository["link"],
		repoLabel: "Qo'llab quvvatlash!",
		editLinks: true,
		docsDir: "src",
		docsBranch: "main",
		docsRepo: "xinuxuz/docs",
		editLinkText: "O'zgartirish kiriting!",
		lastUpdated: false,
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Qo'llanma",
				link: "/guide/",
			},
			{
				text: "Config",
				link: "/config/",
			},
		],
		sidebar: {
			"/guide/": [
				{
					title: "Guide",
					collapsable: false,
					children: ["", "using-vue"],
				},
			],
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		"reading-progress",
		[
			"vuepress-plugin-code-copy",
			{
				align: "bottom",
				color: "#27b1ff",
				backgroundTransition: true,
				backgroundColor: "#0075b8",
				successText: "Ko'chirib olindi!",
			},
		],
		[
			"gitalk-maker",
			{
				gitalkConfig: {
					clientID: "51a385ceffbd487e6610", // 96533
					clientSecret: "8a770ef46d118d526b4755d212edc8a10b9be6c9", //35cf547f52e72c6f6f8f9696de254f34cba233f6
					repo: "comments",
					owner: "xinuxuz",
					admin: ["xinuxuz", "genemators"],
					distractionFreeMode: false,
				},
			},
		],
		[
			"@vuepress/plugin-pwa",
			{
				serviceWorker: true,
				popupComponent: "MySWUpdatePopup",
				updatePopup: {
					message: "Yangi ma'lumot mavjud!",
					buttonText: "Yangilash",
				},
			},
		],
		"@vuepress/plugin-back-to-top",
		"@vuepress/plugin-medium-zoom",
		"@vuepress/plugin-nprogress",
	],
};
