# 配置指南
## 站点配置项
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
title | 站点标题，用于SEO | String | "VitePress Mizuki"
description | 站点描述，用于SEO | String | "Wow! What a lovely VitePress ACG style blog theme!"
## 主题配置项
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
logo | 站点头像，不填则不显示 | String | "https://yuxiangwang0525.com/avatar.svg"
background | 站点背景图片 | String | "https://picture.yuxiangwang0525.com/overlay/pjsk/mzk/1.png"
### 插件配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
live2d | 是否启用Live2D插件 | Boolean | true
live2d_config.api_path | Live2D模型API地址 | String | "https://vue3live2drepo-cdn.moedigital.com/indexes"
live2d_config.default_model | 默认Live2D模型 | Array | ["Potion-Maker/Pio", "school-2017-costume-yellow"]
... | Live2D人物提示配置 | Object | 参考配置文件
aplayer | 是否启用APlayer音乐播放器 | Boolean | true
aplayer_config.autoplay | 是否自动播放音乐 | Boolean | false
aplayer_config.meting | 是否启用meting.js | Boolean | true
aplayer_config.meting_endpoint | meting API地址 | String | "https://api.injahow.cn/meting/"
aplayer_config.meting_list | meting音乐列表配置 | Array | 参考配置文件
aplayer_config.song_list | 音乐播放列表 | Array | 参考配置文件
### 个人介绍配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
introduce.username | 左上角显示的用户名 | String | "VitePress Mizuki"
introduce.say | 左上角显示的欢迎语 | String | "Welcome to my blog!"
### 导航栏配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
nav | 顶部导航栏配置 | Array | 参考配置文件
### 侧边栏配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
sidebar | 侧边栏配置 | Array | 参考配置文件
### 社交链接配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
socialLinks | 社交链接图标配置 | Array | 参考配置文件
### 页脚配置
字段名 | 字段描述 | 值类型 | 示例
--- | --- | --- | ---
footer.message | 页脚显示的信息 | String | "VitePress Mizuki 好可爱的VitePress博客主题哇!"
footer.copyright | 版权信息 | String | "Copyright © 2022-present Moedigital OpenSource"
footer.icp | ICP备案信息 | String | "鲁ICP备2024069804号-2"
footer.police | 公安备案信息 | String | "鲁公网安备 37020302372121号"
footer.moecode | 萌备信息 | String | "萌ICP备20243827号"
