import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { i18nDefinition } from './lang'

const app = createApp(App)
app.use(i18nDefinition)
app.mount('#app')
