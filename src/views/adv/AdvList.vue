<script setup lang="ts">
import { getAdvList } from "../../api/advertisement"

// 获取广告列表信息
const advList = ref({})
getAdvList().then((res) => {
    advList.value = res.data.data;
})
</script>

<template>
    <h1>广告列表</h1>
</template>

<style lang="scss" scoped></style>
