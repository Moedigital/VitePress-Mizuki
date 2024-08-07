<script setup lang="ts">
import { useData } from 'vitepress'
import live2d from './bundle/live2d.vue'
import aplayer from './bundle/aplayer.vue'
import { Icon } from '@iconify/vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme } = useData()
const navbar = theme.value.nav;
const avatar = theme.value.logo;
const introduce = theme.value.introduce;
const footer_lib = theme.value.footer;
const background = theme.value.background;
const socialLinks = theme.value.socialLinks;
const define_police_number = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode='+footer_lib.police.match(/\d+/);
const define_moecode_url = 'https://icp.gov.moe/?keyword='+footer_lib.moecode.match(/\d+/);
const sidebar = theme.value.sidebar;
const define_plugins_config =  theme.value.plugins;
</script>

<template>
  <ClientOnly>
  <aplayer></aplayer>
  </ClientOnly>
  <live2d v-if="define_plugins_config.live2d"></live2d>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <h3>{{ site.title }}</h3>
        <v-spacer></v-spacer>
        <v-btn
            v-for="link in navbar"
            :key="link.text"
            :text="link.text"
            :href="link.link"
            variant="text"
        ></v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3 card-with-background"
            :style="{ backgroundImage: 'url(' + background + ')' }">

      <v-container style="opacity: 0.75;">
        <v-row>
          <v-col cols="2">
            <!-- Replace v-sheet with v-card -->
            <v-card rounded="lg" elevation="2" min-width="30vh">
              <v-list rounded="lg" align="center">
                <v-avatar
                    :image="avatar"
                    size="100"
                ></v-avatar>
                <h2>{{ introduce.username }}</h2>
                <p> {{ introduce.say }}</p>
                <span v-for="social_icon in socialLinks" :key='social_icon.link'>
                <a class="socialtag" :href="social_icon.link" target="_blank"><Icon :icon="social_icon.icon" /></a>
                &nbsp;
                </span>
                <!-- Add more personal introduction details here if needed -->
              </v-list>
              <v-divider class="my-2"></v-divider>
              <v-sheet rounded="lg" v-for="sideitem in sidebar" :key="sideitem.text">
                <h3 align="center">{{ sideitem.text }}</h3>
                <v-list rounded="lg">

                  <v-list-item
                      v-for="items in sideitem.items"
                      :key="items.text"
                      :title="items.text"
                      :href="items.link"
                  ></v-list-item>
                </v-list>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col>
            <v-card
                class="contentc"
                min-height="70vh"
                rounded="lg"
            >
              <Content />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <footer align="center">
        <div v-html="footer_lib.message"></div>
        <div v-html="footer_lib.copyright"></div>
        <v-btn href="https://beian.miit.gov.cn" v-if="footer_lib.icp" target="_blank" variant="text">{{ footer_lib.icp }}</v-btn>
        <div v-if="footer_lib.police">
          <v-btn target="_blank" :href="define_police_number"
                 variant="text"
          >
            <img src="https://www.beian.gov.cn/img/new/gongan.png" style="float:left;"/>
            <p>
             &nbsp; {{ footer_lib.police }}
            </p>
          </v-btn>
        </div>
        <v-btn :href="define_moecode_url" target="_blank" variant="text">萌ICP备 {{ footer_lib.moecode.match(/\d+/).toString() }} 号</v-btn>
      </footer>
    </v-main>
  </v-app>
</template>
<style scoped>
.card-with-background {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* 这会使背景图不随页面滚动 */
  z-index: 0;
}

.card-with-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6); /* 半透明白色覆盖层 */
  z-index: -1;
  filter: blur(4px) brightness(100%);
}
.contentc {
  padding: 20px; /* 保证内容不贴边 */
  font-family: Arial, sans-serif; /* 设置字体 */
  line-height: 1.6; /* 设置行高，增加可读性 */
  color: #333; /* 文本颜色 */
}

:deep(table) {
  width: 100%;
  border-collapse: collapse; /* 合并边框 */
  margin-bottom: 20px; /* 在表格下方添加一些空间 */
  border-radius: 8px; /* 添加圆角 */
  overflow: hidden; /* 防止边框圆角以外内容显示 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影，增加立体感 */
  background-color: #ffffff; /* 表格背景颜色 */
}

:deep(table th),
:deep(table td) {
  padding: 12px 15px; /* 增加单元格内边距 */
  border: 1px solid #ddd; /* 设置单元格边框颜色和样式 */
  text-align: left; /* 文字左对齐，更符合阅读习惯 */
  font-size: 14px; /* 设置字体大小 */
}

:deep(table th) {
  background-color: #f5f5f5; /* 设置表头背景颜色 */
  font-weight: bold; /* 加粗表头字体 */
  text-align: center; /* 表头居中显示 */
}

:deep(table tr:nth-child(even)) {
  background-color: #f9f9f9; /* 为偶数行设置背景颜色，增加可读性 */
}

:deep(table tr:hover) {
  background-color: #f1f1f1; /* 鼠标悬停时的高亮颜色 */
}

:deep(table caption) {
  padding: 10px; /* 添加caption的内边距 */
  caption-side: top; /* 将caption放在表格顶部 */
  text-align: left; /* caption文字左对齐 */
  font-size: 16px; /* caption字体大小 */
  font-weight: bold; /* caption字体加粗 */
}
:deep(.code-container) {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 16px;
  overflow: hidden;
}

:deep(.code-block) {
  font-family: 'Consolas', monospace;
  font-size: 16px;
  margin: 0;
  white-space: pre-wrap;
}

:deep(.lang) {
  float: right;
  font-size: 12px;
  font-style: italic;
  opacity: 0.7;
}

code {
  font-size: 18px;
  text-align: left;
}
/* 添加以下CSS代码来美化class为contentc的元素中的a标签 */
:deep(.contentc a) {
  color: #0056b3; /* 设置链接颜色 */
  text-decoration: none; /* 移除下划线 */
  font-weight: bold; /* 加粗字体 */
  background-image: linear-gradient(to right, #0056b3, #0056b3); /* 设置背景渐变 */
  background-position: 0% 100%; /* 背景渐变位置 */
  background-repeat: no-repeat; /* 不重复背景 */
  background-size: 0% 2px; /* 初始背景大小 */
  transition: background-size 0.3s ease-in-out; /* 过渡效果 */
}

:deep(.contentc a:hover) {
  background-size: 100% 2px; /* 鼠标悬停时背景大小 */
}

.socialtag {
  color: black; /* 设置文字颜色为黑色 */
  font-size: 25px; /* 设置字体大小为20px */
}

</style>