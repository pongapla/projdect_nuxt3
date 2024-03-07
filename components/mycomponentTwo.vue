<template>
    <div>
        <h1>Author</h1>
        <p>First Name : {{ author.fristName }}</p>
        <p>Last Name : {{ author.lastName }}</p>
        <p>Email : {{ author.email }}</p>
        <p>Date : {{  author.date }}</p>
    </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { type TAuthor } from "../types/author.type";
const props = defineProps({
    author: {
        type: Object as PropType<TAuthor>,
        required: true,
        default: () => ({} as TAuthor),
    }
})
</script>
<style scoped>
</style>