<script setup lang="ts">
import { isCollapse } from "./isCollapse";
</script>

<template>
    <el-aside>
        <el-scrollbar>
            <el-menu router unique-opened :collapse="isCollapse">
                <a href="/" class="logo">
                    <img src="@/assets/logo.svg" alt="">
                    <h1>Demo</h1>
                </a>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <IEpLock />
                        </el-icon>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item index="/roles">
                        <el-icon>
                            <IEpSetting />
                        </el-icon>
                        <span>角色列表</span>
                    </el-menu-item>
                    <el-menu-item index="/menus">
                        <el-icon>
                            <IEpSetting />
                        </el-icon>
                        <span>菜单列表</span>
                    </el-menu-item>
                    <el-menu-item index="/resources">
                        <el-icon>
                            <IEpSetting />
                        </el-icon>
                        <span>资源列表</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/users">
                    <el-icon>
                        <IEpUser />
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="/courses">
                    <el-icon>
                        <IEpNotebook />
                    </el-icon>
                    <span>课程管理</span>
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <IEpTrendCharts />
                        </el-icon>
                        <span>广告管理</span>
                    </template>
                    <el-menu-item index="/adv_list">
                        <el-icon>
                            <IEpSetting />
                        </el-icon>
                        <span>广告列表</span>
                    </el-menu-item>
                    <el-menu-item index="/adv_space">
                        <el-icon>
                            <IEpSetting />
                        </el-icon>
                        <span>广告位管理</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    // background-color: #c8b7a6;
    height: 100vh;
    width: auto;
    border-right: 1px solid gray;
}

.el-menu {
    width: 200px;
    // background-color: #c8b7a6;
    border-right: none;

    &.el-menu--collapse {
        width: 60px;

        & h1 {
            display: none;
        }
    }
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    text-decoration: none;
    // border-bottom: 1px dashed gray;

    img {
        width: 32px;
        height: 32px;
    }

    // h1 {
    //     color: #fff;
    // }
}
</style>
