import './assets/main.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/jquery/dist/jquery.js"
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import AppModal from './components/AppModal.vue'

const app =createApp(App)
app.component("app-modal",AppModal)
app.mount('#app')


// modal dung robal de dung nhiu noi cho tien