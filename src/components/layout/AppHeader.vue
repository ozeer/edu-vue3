<script setup lang="ts">
import { isCollapse } from "./isCollapse";
</script>

<template>
    <el-header>
        <!--图标-->
        <el-icon @click="isCollapse = !isCollapse">
            <IEp-Expand v-show="isCollapse" />
            <IEp-Fold v-show="!isCollapse" />
        </el-icon>
        <!--面包屑-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">lu</a></el-breadcrumb-item>
        </el-breadcrumb>
        <!--下拉菜单-->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="32"
                    :src="'https://yt3.ggpht.com/uIKSzegwhBpAFsphssmvUhm2RzlCb3lKY1SiZfLz17b42GC_ur7luYEwfVeM9aQEWKWOGaEYd7w=s88-c-k-c0x00ffffff-no-rj'" />
                <el-icon class="el-icon--right">
                    <IEp-arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>用户姓名</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
    background-color: #faecd8;

    .el-icon {
        margin-right: 18px;
    }
}

.el-dropdown {
    margin-left: auto;

    .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.el-icon {
    cursor: pointer;
}
</style>
