import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "VitePress Mizuki",
  description: "Wow! What a lovely VitePress ACG style blog theme!",
  themeConfig: {
    logo: 'https://yuxiangwang0525.com/avatar.svg',
    background: 'https://api.yuxiangwang0525.com/picture/index.php',
    plugins: {
      live2d: true,
      live2d_config:{
        api_path: 'https://vue3-live2d.vercel.app/vue3-live2d-static-api/indexes',
        default_model: ['Potion-Maker/Pio', 'school-2017-costume-yellow'],
        tips: {
          copy: [{
            selector: 'document',
            texts: ['你都复制了些什么呀，转载要记得加上出处哦！']
          }],
          visibilitychange: [{
            selector: 'document',
            texts: ['哇，你终于回来了～']
          }],
          mouseover: [{
            selector: '.vue-live2d-tool .custom-fa-comment',
            texts: ['猜猜我要说些什么？', '欣赏一些有意思的短句？']
          }, {
            selector: '.vue-live2d-tool .custom-fa-user-circle',
            texts: ['想看看我的朋友们吗？']
          }, {
            selector: '.vue-live2d-tool .custom-fa-street-view',
            texts: ['变装！']
          }, {
            selector: '.vue-live2d-tool .custom-fa-camera-retro',
            texts: ['一起拍照留念？']
          }, {
            selector: '.vue-live2d-tool .custom-fa-info-circle',
            texts: ['(＾Ｕ＾)ノ~ＹＯ']
          }, {
            selector: '.vue-live2d-tool .custom-fa-times',
            texts: ['就要说再见了吗？']
          }]
        }
      },
      aplayer: true,
      aplayer_config: {
        //是否启用meting
        meting: true,
        //指定meting API地址
        meting_endpoint: 'https://api.injahow.cn/meting/',
        //将会按照列表顺序解析
        meting_list: [
          {server: 'netease', id: '2134198705', type: 'playlist'},
          {server: 'netease', id: '512524431', type: 'playlist'}
        ],
        //如果不启用meting,则需要配置这一项 如果同时使用meting和song_list,则meting的解析结果将被追加到song_list之后
        song_list: [

        ]
      }
    },
    introduce: {
      username: '晚江右海',
      say: 'Welcome to my blog!'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        text: '博客列表',
        items: [
          { text: 'API', link: '/api-examples' },
          { text: '生成许可证', link: '/markdown-examples' }
        ]
      }
    ],
    //需要使用iconify图标库的图标ID,详见 https://icon-sets.iconify.design/
    socialLinks: [
      { icon: 'mdi:github', link: 'https://github.com/moedigital' },
      { icon: 'fontisto:link', link: 'https://moedigital.org' },
      { icon: 'ri:twitter-x-fill', link: 'https://twitter.com/moedigital' },
        { icon: 'ri:bilibili-line', link: 'https://space.bilibili.com' },
    ],
    footer: {
      message: 'VitePress Mizuki 好可爱的VitePress博客主题哇!',
      copyright: 'Copyright © 2022-present Moedigital OpenSource',
      icp: '鲁ICP备2024069804号-2',
      police: '鲁公网安备 37020302372121号',
      moecode: '20230525'
    }
  }
})
