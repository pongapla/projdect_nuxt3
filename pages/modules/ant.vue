<template>
    <div>
        <a-button @click="handleMessage" >
    button
  </a-button>
    </div>
</template>

<script setup lang="ts">
 const handleMessage = () => {
    alert('test');
 }
</script>

<style scoped>

</style>