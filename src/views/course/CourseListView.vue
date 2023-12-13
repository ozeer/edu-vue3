<script setup lang="ts">
import { getCourseList } from "@/api/courses"

// 课程管理
const courseList = ref({})
getCourseList().then((res) => {
    courseList.value = res.data.data;
})
</script>

<template>
    <h1>课程列表</h1>
</template>

<style lang="scss" scoped></style>
