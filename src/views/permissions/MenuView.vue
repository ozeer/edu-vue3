<script setup lang="ts">
import { getMenuList } from "@/api/permissions"

const menuList = ref({})
getMenuList().then((res) => {
    menuList.value = res.data.data;
})
</script>

<template>
    <h1>菜单列表</h1>
</template>

<style lang="scss" scoped></style>
