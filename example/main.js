import { createApp } from 'vue'
import App from './App.vue'

import loading from '/d/index.js'
import CustomLoading from './components/Loading.vue'
const app = createApp(App).use(loading, {component: CustomLoading, theme: 'dark'})

app.mount('#app')
