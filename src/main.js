import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

//Bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import router from "@/router";

//Vuetyfi
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    },
})

//Axios
import axios from 'axios';

//Firebase (для аутентифікації)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjyefxvBsD5ElIRkqJNNrFpL9Mea5QvC0",
  authDomain: "study-project-43b9b.firebaseapp.com",
  projectId: "study-project-43b9b",
  storageBucket: "study-project-43b9b.appspot.com",
  messagingSenderId: "289843573538",
  appId: "1:289843573538:web:902becd363a28299172b7b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); //змінна стану аутентифікації
export { auth }; //щоб змінна auth була доступна у  додатку

//PINIA
const pinia = createPinia();

//Глобально зареєстровані компоненти
import ItemCard from '@/components/ItemCard.vue';
import ItemDescription from '@/components/ItemDescription.vue';

const app = createApp(App);
app.component('ItemCard', ItemCard);
app.component('ItemDescription', ItemDescription);

app.use(vuetify).use(router).use(pinia).mount('#app');
