import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 5 }
    },
    actions: {
        increaseCounter() {
            this.count++
        },
        decreaseCounter() {
            this.count--
        },
    },
})