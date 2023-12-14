<script setup lang="ts">
</script>

<template>
    <el-descriptions title="服务器数据" direction="vertical" :column="4" border>
        <el-descriptions-item label="系统语言">PHP</el-descriptions-item>
        <el-descriptions-item label="数据库">MySQL</el-descriptions-item>
        <el-descriptions-item label="更新时间" :span="2">2023-12-14</el-descriptions-item>
    </el-descriptions>
</template>

<style lang="scss" scoped>
.el-descriptions {
    margin-top: 20px;
}
</style>
