module.exports = {
  plugins: {
    // 自动生成左侧侧边栏的插件
    'vuepress-plugin-auto-sidebar': {
      sort: {
        mode: 'asc',
        readmeFirst: true,
        readmeFirstForce: false,
      },
      title: {
        mode: 'titlecase',
        map: {},
      },
      sidebarDepth: 1,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: [],
      },
      ignore: [],
    },
  },
  base: '/myblog/',
  title: '深渊里的小鱼',
  description: '不断总结，才能进步！',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '关于',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/Languiyuan',
            icon: 'reco-github',
          },
        ],
      },
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '博客',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: '深渊里的小鱼',
    authorAvatar: '/avatar.png',
    // "record": "xxxx",
    startYear: '2021',
  },
  markdown: {
    // 代码块是否显示行号
    lineNumbers: true,
  },
}
