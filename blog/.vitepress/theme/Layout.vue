<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import live2d from './bundle/live2d.vue'
import aplayer from './bundle/aplayer.vue'
import { Icon } from '@iconify/vue';
const { site, frontmatter, theme } = useData()
const { path } = useRoute()
const navbar = theme.value.nav;
const avatar = theme.value.logo;
const introduce = theme.value.introduce;
const footer_lib = theme.value.footer;
const background = theme.value.background;
const socialLinks = theme.value.socialLinks;
const define_police_number = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + footer_lib.police.match(/\d+/);
const define_moecode_url = 'https://icp.gov.moe/?keyword=' + footer_lib.moecode.match(/\d+/);
const sidebar = theme.value.sidebar;
const define_plugins_config = theme.value.plugins;
</script>

<template>
  <ClientOnly>
    <aplayer v-if="define_plugins_config.aplayer"></aplayer>
  </ClientOnly>
  <live2d v-if="define_plugins_config.live2d"></live2d>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <h3>{{ site.title }}</h3>
        <v-spacer></v-spacer>
        <v-btn v-for="link in navbar" :key="link.text" :text="link.text" :href="link.link" variant="text"></v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3 card-with-background" :style="{ backgroundImage: 'url(' + background + ')' }">

      <v-container style="opacity: 0.75;">
        <v-row>
          <v-col xs="auto" sm="4" md="4" lg="4">
            <v-card rounded="lg" elevation="2" min-width="30vh">
              <v-list rounded="lg" align="center">
                <v-avatar :image="avatar" size="100" v-if="avatar"></v-avatar>
                <h2>{{ introduce.username }}</h2>
                <p> {{ introduce.say }}</p>
                <span v-for="social_icon in socialLinks" :key='social_icon.link'>
                  <a class="socialtag" :href="social_icon.link" target="_blank">
                    <Icon :icon="social_icon.icon" />
                  </a>
                  &nbsp;
                </span>
              </v-list>
              <v-divider class="my-2"></v-divider>
              <v-sheet rounded="lg" v-for="sideitem in sidebar" :key="sideitem.text || 'sp'">
                <template v-if="sideitem.items && sideitem.items.length > 0">
                  <h3 align="center">{{ sideitem.text === 'articles' ? '博客文章' : sideitem.text }}</h3>
                  <v-list rounded="lg">
                    <v-list-item v-for="items in sideitem.items" :key="items.text" :title="items.text"
                      :href="items.link"></v-list-item>
                  </v-list>
                </template>
                <template v-else>
                  <h3 align="center">其他页面</h3>
                  <v-list rounded="lg">
                    <v-list-item v-for="items in sidebar.filter(item => item.link && !item.items)" :key="items.text"
                      :title="items.text" :href="items.link"></v-list-item>
                  </v-list>
                </template>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col xs="auto" sm="8" md="8" lg="8">
            <v-card class="contentc" rounded="lg">
              <Content />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <footer align="center">
        <div v-html="footer_lib.message"></div>
        <div v-html="footer_lib.copyright"></div>
        <v-btn href="https://beian.miit.gov.cn" v-if="footer_lib.icp" target="_blank" variant="text">{{ footer_lib.icp
          }}</v-btn>
        <div v-if="footer_lib.police">
          <v-btn target="_blank" :href="define_police_number" variant="text">
            <img src="https://www.beian.gov.cn/img/new/gongan.png" style="float:left;" />
            <p>
              &nbsp; {{ footer_lib.police }}
            </p>
          </v-btn>
        </div>
        <v-btn :href="define_moecode_url" target="_blank" variant="text" v-if="footer_lib.moecode">萌ICP备 {{
          footer_lib.moecode.match(/\d+/).toString() }} 号</v-btn>
        <p>由<a href="https://vitepress.dev" target="_blank" class="moedesign_a_element">VitePress</a>和可爱的<a
            href="https://mizukitheme.moedigital.org" target="_blank" class="moedesign_a_element">VitePress
            Mizuki</a>主题强力驱动
        </p>
        <br>
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
  background-attachment: fixed;
  z-index: 0;
}

.card-with-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: -1;
  filter: blur(4px) brightness(100%);
}

.contentc {
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

:deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

:deep(table th),
:deep(table td) {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

:deep(table th) {
  background-color: #f5f5f5;
  font-weight: bold;
  text-align: center;
}

:deep(table tr:nth-child(even)) {
  background-color: #f9f9f9;
}

:deep(table tr:hover) {
  background-color: #f1f1f1;
}

:deep(table caption) {
  padding: 10px;
  caption-side: top;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
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

:deep(.contentc a) {
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
  background-image: linear-gradient(to right, #0056b3, #0056b3);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s ease-in-out;
}

:deep(.contentc ul) {
  padding-left: 20px;
}

.moedesign_a_element {
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
  background-image: linear-gradient(to right, #0056b3, #0056b3);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s ease-in-out;
}

:deep(.contentc a:hover) {
  background-size: 100% 2px;
}

.socialtag {
  color: black;
  font-size: 25px;
}
</style>