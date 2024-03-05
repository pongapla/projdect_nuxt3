<template>
    <div>
        <a-button type="primary">Submit</a-button>
        <h1>Button Test</h1>
        <a-space wrap>
            <a-button type="primary">Primary Button</a-button>
            <a-button>Default Button</a-button>
            <a-button type="dashed">Dashed Button</a-button>
            <a-button type="text">Text Button</a-button>
            <a-button type="link">Link Button</a-button>
        </a-space>
    </div>
    <h1>Ghost Button</h1>
    <div :style="{ background: 'rgb(190, 200, 200)', padding: '16px 16px' }">
    <a-space>
      <a-button type="primary" ghost>Primary</a-button>
      <a-button ghost>Default</a-button>
      <a-button type="dashed" ghost>Dashed</a-button>
      <a-button type="primary" danger ghost>Danger</a-button>
    </a-space>
  </div>
  <h1>Danger Button</h1>
  <a-space warp>
    <a-button type="primary" danger>Primary</a-button>
    <a-button danger>Default</a-button>
    <a-button type="dashed" danger>Dashed</a-button>
    <a-button type="text" danger>Text</a-button>
    <a-button type="link" danger>Link</a-button>
  </a-space>
  <h1>Icon</h1>
  <a-space direction="vertical">
    <a-space warp>
      <a-tooltip title="search">
        <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <a-button type="primary" shape="circle">A</a-button>
      <a-button type="primary" :icon="h(SearchOutlined)">Search</a-button>
      <a-tooltip title="search">
        <a-button shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <a-button :icon="h(SearchOutlined)">Search</a-button>
    </a-space>
    </a-space>
  <h1>Loading</h1>
  <a-button type="primary" loading>Loading</a-button>
  <h1>Block</h1>
  <a-button type="primary" danger block>Block</a-button>
</template>

<script setup lang="ts">

import { h } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>

</style>