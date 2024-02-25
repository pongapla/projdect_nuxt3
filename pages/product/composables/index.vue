<template>
    <p>{{ foo }}</p>
</template>
<script setup lang="ts">
import { useFoo } from '../../composables/useFoo';

const foo = useFoo()
</script>
<style scoped></style>