<template>
 {{ data }}
</template>
<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>
<style scoped>
</style>