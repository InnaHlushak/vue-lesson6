import { defineStore } from 'pinia';

export const useInfoUserStore = defineStore('infoUserStore', {
    state: () => ({
        isLogged: false,
    }),
});