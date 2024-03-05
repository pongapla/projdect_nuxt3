<template>
    <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96d',
      },
    }"
    >
    <slot></slot>
    </a-config-provider>
</template>