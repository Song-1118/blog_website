import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from './router/router'

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')