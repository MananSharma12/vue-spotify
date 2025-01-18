import { defineStore } from 'pinia'

type StateShape = {
    userLoggedIn: boolean
    isAuthReady: boolean
}

export const useUserStore = defineStore("user", {
    state: (): StateShape => ({
        userLoggedIn: false,
        isAuthReady: false
    }),
    actions: {
        setUserLoggedIn(value: boolean) {
            this.userLoggedIn = value
            this.isAuthReady = true
        }
    }
})