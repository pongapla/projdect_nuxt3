<template>
    <div>
        <p>count</p>
        {{ counter.count }}
        <p>Double count</p>
        {{ counter.doubleCount }}
        <p>Display count</p>
        {{ counter.displayCounterText }}
        <p>Actions</p>
        <p>Actions return function</p>
        {{ counter.displayCounterTextFunction() }}
        <div class="mt-10"></div>
        <a-button type="primary" @click="onClickIncrement">Increment</a-button>
        <a-button type="primary" danger @click="onClickDecrement">Decrement</a-button>
        <div class="mt-10"></div>
        <a-input v-model:value="count">Set Count</a-input>
        <a-button class="mt-10" type="primary" @click="onClickSetCount">SetCount</a-button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../demo/counter.store';
    const count = ref('');
    const counter = useCounterStore()
    const onClickIncrement = () => {
        counter.increment();
    }
    const onClickDecrement = () => {
        counter.decrement();
    }
    const onClickSetCount = () => {
        
        counter.setCount(Number(count.value))
    }
</script>

<style scoped>

</style>