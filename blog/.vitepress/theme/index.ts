// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
console.log('VitePress Mizuki - VitePress ACG style blog theme'+'\nBeta 1.4.46'+'\nMoedigital OpenSource');
const vuetify = createVuetify({
  components,
  directives,
})

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
  }
} satisfies Theme

