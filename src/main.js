import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import firebase from 'firebase/app'
// import 'firebase/firestore'


// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
