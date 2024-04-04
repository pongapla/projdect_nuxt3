<template>
    <a-layout-sider 
        collapsible :collapsed="collapsed" 
        breakpoint="xl" 
        @collapse="onCollapse"
        style="background-color: #00B98Ddd;">
        <a-row class="tw-mt-1 tw-flex tw-items-center">
            <a-typography-title :level="4" class="tw-text-center tw-w-full">
                <span class="tw-text-white">
                    บริษัท aaaa
                </span>
            </a-typography-title>
        </a-row>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline"
            class="tw-p-2 tw-rounded-md tw-bg-transparent tw-border-transparent">
            <template v-for="(item, i) in menuList" :key="i">
                <a-menu-item v-if="!item.isSub" :key="item.to" @click="$router.push(item.to!)"
                    class="tw-rounded-md tw-transition-all hover:tw-shadow-[#00B98Dff] hover:tw-shadow-md hover:!tw-bg-[#00B98Dff] tw-text-white after:tw-border-[#ffffff]">
                    <Icon class="tw-text-white" :component="item.icon" />

                    <span class="tw-text-white">{{ item.name }}</span>
                </a-menu-item>
                <a-sub-menu :key="item.name" v-else
                    class="tw-rounded-md hover:tw-shadow-[#00B98Dff] hover:tw-shadow-md hover:tw-bg-[#00B98Dff] tw-text-white">
                    <template #title>
                        <Icon class="tw-text-white" :component="item.icon"></Icon>
                        <span class="tw-text-white"> {{ item.name }}</span>
                    </template>
                    <a-menu-item v-for="(sub, j) in item.options" :key="`sub-${i}-${j}`" @click="$router.push(sub.to!)">
                        <span class="tw-text-white">{{ sub.name }}</span>
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts">
import {
    FileOutlined,
    InfoCircleFilled,
    PieChartOutlined,
    StockOutlined,
    TeamOutlined,
    UserOutlined,
    SettingFilled,
} from "@ant-design/icons-vue";
import { onMounted, ref} from "vue";

const emits = defineEmits(["update:collapsed"]);

const props = defineProps({
    collapsed: {
        type: Boolean,
        default: false,
    },
});
const selectedKeys = ref<string[]>(["1"]);
const route = useRoute();

const menuList = reactive([
    { name: "Stock", to: "/stock", icon: StockOutlined, isSub: false },
    {
        name: "Report",
        to: "/report",
        icon: PieChartOutlined,
        isSub: false,
    },
    {
        name: "Demo",
        icon: TeamOutlined,
        options: [
            { name: "index", to: "/demo", icon: "StockOutlined" },
            { name: "about", to: "/demo/about", icon: "StockOutlined" },
            {
                name: "products",
                to: "/demo/products",
                icon: "StockOutlined",
            },
            {
                name: "components",
                to: "/demo/components",
                icon: "StockOutlined",
            },
        ],
        isSub: true,
    },
    {
        name: "Setting",
        icon: SettingFilled,
        options: [
            { name: "Users", to: "/setting" },
            { name: "Products", to: "/products"},
            { name: "Site", to: "/site" },
            { name: "Department", to: "/department" },
            { name: "Section", to: "/section" },
            { name: "Role", to: "/role"},
        ],
        isSub: true,
    },
    {
        name: "Preferences",
        icon: FileOutlined,
        options: [
            { name: "Docs", to: "/preferences/docs" },
            { name: "Theme", to: "/preferences/theme" },
        ],
        isSub: true,
    },
    {
        name: "About",
        to: "/about",
        icon: InfoCircleFilled,
        isSub: false,
    },
]);

onMounted(async () => {
    selectedKeys.value = [route.path];
});

const onCollapse = (collapsed: boolean, type: string) => {
    if (type == "responsive") {
        emits("update:collapsed", !props.collapsed);
    }
};
</script>

<style>
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #00b98dff !important;
    border-radius: 0;
    padding: 0;
    margin: 0;
}

.ant-menu-sub.ant-menu-vertical {
    background-color: #001e26 !important;
}

.ant-menu-sub.ant-menu-inline {
    background-color: transparent !important;
}

.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
    border-color: white !important;
}

</style>