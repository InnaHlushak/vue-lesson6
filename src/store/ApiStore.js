import {defineStore} from 'pinia';

//створити інстанс(екземпляр) useApiStore сховища 
//експортувати щоб використовувати його в компонентах
export const useApiStore = defineStore('ApiStore', {
    //описати стан
    state: () => ({
        API_KEY: "4ZOCEAdAoacmoaJHdEnQeIMDwsxFYAR8V7qYMddQ",
        count: 1,
    }),
    getters: {
        //отримання відповідного url  API
        urlApiByCount(state) {
            return `/planetary/apod?api_key=${state.API_KEY}&count=${state.count}&thumbs=True`;
        },
    },
    //події використовуються  для зміни стану 
    actions: {
        //зокрема для задання/оновлення count  
        updateCount(userCount) {
           this.count = userCount;
        }, 
    }
});    