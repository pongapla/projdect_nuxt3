<template>
    <div>
        <h1>Size</h1>
        <a-space :size="size">
    Space
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button>
        <UploadOutlined />
        Click to Upload
      </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
  </a-space>
  <h1>Direction</h1>
        <a-space direction="vertical" :size="size">
    Space
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button>
        <UploadOutlined />
        Click to Upload
      </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
  </a-space>
  <h1>Wrap</h1>
  <a-space :size="[5, 16]" wrap>
    <template v-for="_i in 10" :key="_i">
      <a-button>Button</a-button>
    </template>
  </a-space>
    </div>
    <h1>Align</h1>
    <div class="space-align-container">
    <div class="space-align-block">
      <a-space align="center">
        center
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="start">
        start
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="end">
        end
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="baseline">
        baseline
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">                
    import { UploadOutlined } from '@ant-design/icons-vue';
    const size = ref(50);
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>