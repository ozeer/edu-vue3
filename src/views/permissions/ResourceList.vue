<script setup lang="ts">
import { getResourceList } from "@/api/permissions"

const resourceList = ref({})
getResourceList().then((res) => {
    resourceList.value = res.data.data;
})
</script>

<template>
    <h1>资源列表</h1>
</template>

<style lang="scss" scoped></style>
