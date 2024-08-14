// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
console.log('VitePress Mizuki - VitePress ACG style articles theme'+'\nRelease 1.5.0 Boycott SCLA'+'\nMoedigital OpenSource');
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

