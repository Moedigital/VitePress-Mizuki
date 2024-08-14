import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  //站点标题和介绍 本介绍用于SEO
  title: "VitePress Mizuki",
  description: "Wow! What a lovely VitePress ACG style articles theme!",
  // 主题配置
  themeConfig: {
    // 头像,不填则不显示
    logo: 'https://yuxiangwang0525.com/avatar.svg',
    // 背景图片
    background: 'https://api.yuxiangwang0525.com/picture/index.php',
    // 插件配置
    plugins: {
      live2d: true,
      live2d_config:{
        // 模型API地址 可参考 https://github.com/YiguiDing/vue3-live2d-static-api/tree/main/indexes 搭建或使用
        api_path: 'https://vue3live2drepo-cdn.moedigital.com/indexes',
        // 默认模型
        default_model: ['Potion-Maker/Pio', 'school-2017-costume-yellow'],
        tips: {
          // Live2d人物提示 请参考 https://github.com/YiguiDing/vue3-live2d
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
      // APlayer选项 设为false则不启用
      aplayer: true,
      aplayer_config: {
        //是否自动播放
        autoplay: false,
        //是否启用meting
        meting: true,
        //指定meting API地址
        meting_endpoint: 'https://api.injahow.cn/meting/',
        //meting将会按照列表顺序解析
        meting_list: [
          {server: 'netease', id: '12423094366', type: 'playlist'},
          {server: 'netease', id: '12423142966', type: 'playlist'}
        ],
        //如果不启用meting,则需要配置这一项 如果同时使用meting和song_list,则meting的解析结果将被追加到song_list之后
        song_list: [

        ]
      }
    },
    // 这里用于左上角的个人介绍
    introduce: {
      username: 'VitePress Mizuki',
      say: 'Welcome to my blog!'
    },
    // 顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '配置指南', link: '/guide/' },
      { text: 'Demo', link: 'https://mizukitheme.moedigital.org/' },
    ],
    // 自动侧边栏配置
    sidebar: generateSidebar({
      documentRootPath: '/blog',
      useTitleFromFileHeading: true,
      includeFolderIndexFile: true
    }),
    //需要使用iconify图标库的图标ID,详见 https://icon-sets.iconify.design/
    socialLinks: [
      { icon: 'mdi:github', link: 'https://github.com/moedigital' },
      { icon: 'fontisto:link', link: 'https://moedigital.org' },
      { icon: 'ri:bilibili-line', link: 'https://space.bilibili.com' },
    ],
    // 页脚配置
    footer: {
      message: 'VitePress Mizuki 好可爱的VitePress博客主题哇!',
      copyright: 'Copyright © 2022-present Moedigital OpenSource',
      // ICP备案信息 不填则不显示
      icp: '',
      // 公安备案信息 不填则不显示
      police: '',
      // 萌备信息 不填则不显示
      moecode: ''
    }
  }
})
