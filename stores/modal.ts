import { defineStore } from 'pinia'

type StateShape = {
    isOpen: boolean
}

export const useModalStore = defineStore("modal", {
    state: (): StateShape => ({
        isOpen: false,
    }),
    getters: {
        hiddenClass: (state): string => !state.isOpen ? 'hidden' : ''
    }
})