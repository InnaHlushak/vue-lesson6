import {defineStore} from 'pinia';
import axiosInstance from '../../services/axios.js';

//створити інстанс(екземпляр) useApiStore сховища 
//експортувати щоб використовувати його в компонентах
export const useApiStore = defineStore('ApiStore', {
    //описати стан
    state: () => ({
        count: 1,
        urlApiByCount: '',
    }),
    //події використовуються  для зміни стану 
    actions: {
        //зокрема для задання/оновлення count  
        updateCount(userCount) {
           this.count = userCount;
        }, 
        //отримання відповідного url  API
        getUrlApiByCount() {
            const API_KEY = "4ZOCEAdAoacmoaJHdEnQeIMDwsxFYAR8V7qYMddQ";
            this.urlApiByCount = `/planetary/apod?api_key=${API_KEY}&count=${this.count}&thumbs=True`;
        }
    }
});    