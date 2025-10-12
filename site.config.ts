import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://xn--fiq228c2x.xn--fiqs8s.xn--6qq79v/',
  lang: 'zh-CN',
  title: 'aoye的小站',
  author: {
    name: 'aoye',
  },
  description: '记录生活，记录学习，记录工作',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/aoye666',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1152730836',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:sty666nb@hotmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },
})
