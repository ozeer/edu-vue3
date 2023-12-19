<script setup lang="ts">
import { getUserProfile } from "../../api/users"

const userProfile = ref({ avatar: '', nick: '' })
getUserProfile().then((res) => {
    userProfile.value = res.data.data;
})
</script>

<template class="user_profile">
    <el-row>
        <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.ep-bg-purple-dark {
    background-color: palevioletred;
}

.ep-bg-purple {
    background-color: purple;
}

.ep-bg-purple-light {
    background-color: palevioletred;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
