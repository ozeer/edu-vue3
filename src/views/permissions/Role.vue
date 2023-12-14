<script setup lang="ts">
import { getRoleList } from "@/api/permissions"

const rolesList = ref({})
getRoleList().then((res) => {
    rolesList.value = res.data.data;
})
</script>

<template>
    <h1>角色列表</h1>
</template>

<style lang="scss" scoped></style>
