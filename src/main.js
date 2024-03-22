import { createApp } from 'vue'
import Contact from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(Contact)
  .use(vuetify)
  .mount('#app')
