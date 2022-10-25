import { defineStore } from 'pinia'

export const userStore = defineStore("user", {
    state: () => {
        return {
            userId: null,
            userRole: null,
            token: null
        };
    }
});