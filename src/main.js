import { createApp } from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

createApp(App).use(Oruga);  //createApp(...).use(Oruga); 
createApp(App).mount('#app')
