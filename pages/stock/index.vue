<template>
    <a-row :gutter="[0,10]">
        <a-col :span="24" class="tw-my-1 tw-mt-2">
            <a-row :gutter="[0, 10]" align="middle" justify="center">
                <a-col :span="6" v-for="(item, i) in stockCardList" :key="i" class="tw-pr-2">
                    <StockCard :title="item.title" :amount="item.amount" :color="item.color" :icon="item.icon">
                    </StockCard>
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="24" class="ty-my-1">
            <a-col span="24" class="ty-my-1">
                <a-card class="tw-w-full tw-min-h-[75vh] tw-rounded-lg tw-drop-shadow-md">
                    <a-row align="middle" justify="center" gutter="[0,10]">
                        <a-col :span="24">
                            <a-row justify="space-between" :gutter="[0, 10]">
                                <a-col :span="8">
                                    <a-auto-complete size="large"
                                        class="tw-w-full tw-drop-shadow-sm hover:tw-drop-shadow-md  tw-transition-all"
                                        :options="productStore.autoCompleteOptions"
                                        @search="productStore.debouncedSearch" @select="productStore.onSelect">
                                        <template #placeholder>
                                            Input search
                                            text
                                        </template>
                                    </a-auto-complete>
                                </a-col>
                                <a-col :span="4">
                                    <a-button @click="$router.push('/stock/create')"
                                        class="tw-w-full tw-text-current tw-bg-gray-300 tw-drop-shadow-sm tw-transition-all tw-flex tw-items-center tw-justify-center tw-border-white"
                                        shape="default" size="large" type="primary">
                                        <span v-if="breakpointState.md">
                                            ADD STOCK
                                        </span>
                                        <template #icon>
                                            <PlusCircleFilled />
                                        </template>
                                    </a-button>
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="24" class="tw-mt-2">
                            <ProductTable :products="productStore.products" @handleClickDelete="handleClickDelete"
                                @handleClickEdit="handClickEdit" />
                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
})

import { Grid } from "ant-design-vue";
import {
    ShoppingCartOutlined,
    SearchOutlined,
    RollbackOutlined,
    GiftOutlined,
    PlusCircleFilled,
} from "@ant-design/icons-vue";
const productStore = useProductStore();
const { useBreakpoint } = Grid;
const breakpointState = useBreakpoint();

const stockCardList = ref([
    {
        title: "Total",
        amount: 1800,
        icon: ShoppingCartOutlined,
        color: "#00B98D",
    },
    { title: "Sold out", amount: 20, icon: SearchOutlined, color: "#058C42" },
    { title: "Return", amount: 4, icon: RollbackOutlined, color: "#04471C" },
    {
        title: "Discount",
        amount: 2,
        icon: GiftOutlined,
        color: "#0D2818",
    },
]);


onMounted(() => {
    productStore.loadProducts()
});
</script>

<style scoped>
.ant-btn-primary:hover {
    background-color:grey;
    color:black;
    opacity: .5;
}
.ant-btn-primary {
    max-width: 150px;
}
</style>