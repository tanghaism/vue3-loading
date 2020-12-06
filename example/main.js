import { createApp } from 'vue'
import App from './App.vue'

import loading from '/@/index.js'
import CustomLoading from './components/Loading.vue'

createApp(App)
  .use(loading, {
    component: CustomLoading,
    theme: 'dark'
  })
  .mount('#app')
