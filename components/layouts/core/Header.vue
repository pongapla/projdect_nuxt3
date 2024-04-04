<template>
    <a-layout-header class="tw-p-0 !tw-bg-[#00B98Dff] tw-drop-shadow-md">
        <a-row>
            <a-col :flex="2">
                <a-typography-title :level="4">
                    <span class="tw-text-white">
                        Management Stock 
                    </span>
                </a-typography-title>
            </a-col>


            <a-col :flex="0">
                <a-space>
                    <a-avatar size="large" src="/images/23_profile.png" />
                    <a-typography-title :level="4" class="tw-m-2" style="color: aliceblue;">{{
                        authStore.session.username }}</a-typography-title>
                    <a-button type="primary" ghost @click="authStore.logout()">Logout</a-button>
                </a-space>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../../stores/auth.store";
const authStore = useAuthStore();

</script>

<style scoped>
.ant-btn-primary {
    background-color:rgb(66, 235, 196);
    border-color: white;
    color: black;
}
.ant-btn-primary:hover {
    background-color:white !important;
    border-color: white !important;
    color: black !important;
}

</style>