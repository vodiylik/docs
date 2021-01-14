const { title, description, repository } = require('../../package')

module.exports = {
  theme: 'xenon',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Xinux To'plami",
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
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true
    },
    logo: 'https://sauce.genemator.me/xinux/xinux.svg',
    searchPlaceholder: 'Izlash...',
    smoothScroll: true,
    repo: repository,
    repoLabel: "Qo'llab quvvatlash!",
    editLinks: true,
    docsDir: 'src',
    docsRepo: 'xinuxuz/docs',
    editLinkText: "O'zgartirish kiriting!",
    lastUpdated: true,
    nav: [
      {
        text: 'Asosiy',
        link: '/'
      },
      {
        text: 'Yordamchi',
        link: 'https://t.me/genemator_bot'
      },
      {
        text: "Qo'llanma",
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
