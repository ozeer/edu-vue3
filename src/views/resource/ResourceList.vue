<script setup lang="ts">
import { useResource } from "../../combined/useResource"

const { allResourceCategory, getAllResourceCategory } = useResource()

getAllResourceCategory()
</script>

<template>
    <h1>资源列表</h1>
</template>

<style lang="scss" scoped></style>
