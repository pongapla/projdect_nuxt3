export const useCounterStore = defineStore("counter",{
    state: () => ({
        count: 1
    }),
    getters: {
        doubleCount(): number {
            return this.count * 2;
        },
        displayCounterText(): string {
            return `This is counter state = ${this.count}`
        }
    },
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        displayCounterTextFunction(): string {
            return `this is counter state = ${this.count}`
        },
        setCount(count: number) {
            this.count = count;
        }
    }
});