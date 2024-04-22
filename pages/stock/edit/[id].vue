<template>
    <a-row class="tw-mb-4">
        <a-col :span="24">
            <a-card class="tw-drop-shadow-md hover:tw-drop-shadow-lg tw-transition-all tw-rounded-lg">
                <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" class="tw-w-full">
                    <a-row align="middle" justify="center">
                        <a-col :span="16">
                            {{ modelRef.name }}
                            <a-row align="middle" justify="center" class="tw-w-full" :gutter="[10, 0]">
                                <a-col :span="24" class="tw-flex tw-justify-center">
                                    <a-tag color="success"
                                        class="tw-font-medium tw-text-xl tw-rounded-lg tw-px-4 tw-mb-4">
                                        Edit PRODUCT
                                    </a-tag>
                                </a-col>
                                <a-col :span="24" class="tw-flex tw-justify-center tw-w-full">
                                    <a-form-item label="Name" class="tw-font-medium tw-w-full"
                                        v-bind="validateInfos.name">
                                        <a-input class="tw-h-10" v-model="modelRef.name" @blur="
            validate('name', {
                trigger: 'blur',
            }).catch(() => { })
            " />
                                    </a-form-item>
                                </a-col>
                                <a-col :span="12" class="tw-flex tw-justify-center">
                                    <a-form-item label="Price" class="tw-font-medium tw-w-full"
                                        v-bind="validateInfos.price">
                                        <a-input class="tw-h-10" v-model="modelRef.price" type="number" @blur="
            validate('price', {
                trigger: 'blur',
            }).catch(() => { })
            " />
                                    </a-form-item>
                                </a-col>
                                <a-col :span="12" class="tw-flex tw-justify-center">
                                    <a-form-item label="Stock" v-bind="validateInfos.stock"
                                        class="tw-font-medium tw-w-full">
                                        <a-input class="tw-h-10" type="number" v-model="modelRef.stock" @blur="
            validate('stock', {
                trigger: 'blur',
            }).catch(() => { })
            " />
                                    </a-form-item>
                                </a-col>
                                <a-col :span="24" class="tw-flex tw-justify-center">
                                    <a-form-item label="Image file" class="tw-font-medium tw-w-full"
                                        v-bind="validateInfos.image">
                                        <a-upload v-model="modelRef.image" :max-count="1" name="image"
                                            list-type="picture-card" class="avatar-uploader" :show-upload-list="true"
                                            :before-upload="formats.beforeUpload
            " @change="handleUploadChange" @preview="
            productStore.handlePreview
            ">
                                            <div slot="trigger">
                                                <!-- <loading-outlined v-if="loading"></loading-outlined>
                        <plus-outlined v-else></plus-outlined> -->
                                                <div class="ant-upload-text">
                                                    Upload
                                                </div>
                                            </div>
                                        </a-upload>
                                        <a-modal :visible="productStore.preview.visible
            " :title="productStore.preview.title" :footer="null" @cancel="productStore.handleCancel">
                                            <img :src="previewImageUrl!" alt="example" style="width: 100%" />
                                        </a-modal>
                                    </a-form-item>
                                </a-col>
                                <a-col :span="24" class="tw-flex tw-justify-center">
                                    <a-form-item class="tw-w-full">
                                        <a-row justify="end">
                                            <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
                                            <a-button class="tw-ml-2" @click="resetFields">Reset</a-button>
                                            <a-button class="tw-ml-2" @click="$router.push('/stock')">Cancel</a-button>
                                        </a-row>
                                    </a-form-item>
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </a-form>
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { Form } from "ant-design-vue";
import { useProductStore } from "../../../stores/product.store"
import { ref, reactive} from "vue"
import { useFormRule } from "../../../composables/useFormRule";
definePageMeta({
    layout: "default",
});
const router = useRouter();
const useForm = useRule();
const formRule = useFormRule();
const productStore = useProductStore();
const modelRef = reactive({
    name: "",
    price: "",
    stock: "",
    image: null as any,
});
const { resetFields, validate, validateInfos } = useForm(modelRef, formRule.rules);
</script>

<style scoped>

</style>