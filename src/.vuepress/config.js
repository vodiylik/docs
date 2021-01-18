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
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "57x57",
				href: "/apple-icon-57x57.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "60x60",
				href: "/apple-icon-60x60.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "72x72",
				href: "/apple-icon-72x72.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "76x76",
				href: "/apple-icon-76x76.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "114x114",
				href: "/apple-icon-114x114.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "120x120",
				href: "/apple-icon-120x120.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "144x144",
				href: "/apple-icon-144x144.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "152x152",
				href: "/apple-icon-152x152.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-icon-180x180.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/android-icon-192x192.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "96x96",
				href: "/favicon-32x32.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
		],
		["link", { rel: "manifest", href: "/manifest.json" }],
		["link", { rel: "shortcut icon", href: "/favicon.ico" }],
		["meta", { name: "msapplication-TileColor", content: "#000000" }],
		[
			"meta",
			{
				name: "msapplication-TileImage",
				content: "/ms-icon-144x144.png",
			},
		],
		[
			"meta",
			{
				name: "msapplication-config",
				content: "/browserconfig.xml",
			},
		],
		["meta", { name: "theme-color", content: "#000000" }],
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
		repoLabel: "Ishtirok eting!",
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
				text: "Ma'lumot",
				link: "/malumot/",
			},
			{
				text: "Jamoa",
				link: "/jamoa/",
			},
			{
				text: "Turkum",
				ariaLabel: "Turkumlar",
				items: [
					{
						text: "Debian",
						link: "https://debian.xinux.uz",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: [
					{
						text: "Telegram",
						items: [
							{
								text: "Guruh",
								link: "tg://resolve?domain=xinuxuz",
								target: "_blank",
							},
							{
								text: "Kanal",
								link: "tg://resolve?xinuxuz_news",
								target: "_blank",
							},
						],
					},
					{
						text: "Adminlar",
						items: [
							{
								text: "Genemator",
								link: "tg://resolve?domain=genemator",
								target: "_blank",
							},
							{
								text: "iBlogs",
								link: "tg://resolve?iBlogs_uz",
								target: "_blank",
							},
						],
					},
				],
			},
		],
		sidebar: {
			"/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
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
				color: "#646464",
				backgroundTransition: true,
				backgroundColor: "#262626",
				successText: "Ko'chirib olindi!",
			},
		],
		// [
		// 	"gitalk-maker",
		// 	{
		// 		gitalkConfig: {
		// 			clientID: "51a385ceffbd487e6610",
		// 			clientSecret: "8a770ef46d118d526b4755d212edc8a10b9be6c9",
		// 			repo: "comments",
		// 			owner: "xinuxuz",
		// 			admin: ["xinuxuz", "genemators"],
		// 			distractionFreeMode: false,
		// 		},
		// 	},
		// ],
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
