<script setup lang="ts">
import { getAdvSpace } from "@/api/advertisement"

// 获取广告位信息
const advSpace = ref({})
getAdvSpace().then((res) => {
    advSpace.value = res.data.data;
})
</script>

<template>
    <h1>广告位管理</h1>
</template>

<style lang="scss" scoped></style>
