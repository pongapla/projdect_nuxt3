<template>
    <div>
        <a-card
    style="width: 100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template #customTab="item">
      <span v-if="item.key === 'tab1'">
        <home-outlined />
        {{ item.key }}
      </span>
    </template>
    <template #extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </a-card>
  <br />
  <br />
  <a-card
    style="width: 100%"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="key => onTabChange(key, 'noTitleKey')"
  >
    <p v-if="noTitleKey === 'article'">article content</p>
    <p v-else-if="noTitleKey === 'app'">app content</p>
    <p v-else>project content</p>
    <template #tabBarExtraContent>
      <a href="#">More</a>
    </template>
  </a-card>
    </div>
    <div class="mt-3">
        <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';


const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];
const contentList = {
  tab1: 'content1',
  tab2: 'content2',
};
const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];
const key = ref('tab1');
const noTitleKey = ref('app');
const onTabChange = (value, type) => {
  console.log(value, type);
  if (type === 'key') {
    key.value = value;
  } else if (type === 'noTitleKey') {
    noTitleKey.value = value;
  }
};
</script>

<style scoped>

</style>