<script setup lang="ts">
import { getUsers } from "@/api/users"

// 用户管理
const userList = ref({})
getUsers().then((res) => {
    userList.value = res.data.data;
})
</script>

<template>
    <h1>用户列表</h1>
</template>

<style lang="scss" scoped></style>
