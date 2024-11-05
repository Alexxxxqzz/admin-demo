import { createApp } from 'vue'
// 引入状态管理
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入样式重置
import '../src/assets/css/normalize.css'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
