import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './assets/css/global.scss'
import api from './utils/request'

const app = createApp(App)
app.config.globalProperties.$api = api
app.use(router)
app.use(ElementPlus)
app.mount('#app')
