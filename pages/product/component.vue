<template>
    <div>
        <h2>My component2</h2>
        <MycomponentTwo :author="author"></MycomponentTwo>
        <p>Dayjs {{ $dayjs().format() }}</p>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { type TAuthor } from '../../types/author.type';
import {} from '../../components/mycomponentTwo.vue';

const author = reactive<TAuthor>({ 
    fristName: 'pong',
    lastName: 'apla',
    email: 'test@gmail.com',
    date: new Date(),
    })
</script>

<style scoped></style>