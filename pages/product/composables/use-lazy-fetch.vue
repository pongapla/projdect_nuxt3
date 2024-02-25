<template>
    <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    {{ secretEnvResp }}
  </div>
</template>
<script setup lang="ts">
const { pending, data: secretEnvResp } = await useLazyFetch('/api/secret-env')
watch(secretEnvResp, (newPosts) => {
console.log(newPosts)
})
</script>
<style>
</style>