<script setup lang="ts">
import AppAside from "./AppAside.vue"
import AppHeader from "./AppHeader.vue"
</script>

<template>
    <div class="common-layout">
        <el-container>
            <AppAside />
            <el-container class="header-main">
                <AppHeader />
                <el-main>
                    <el-scrollbar>
                        <RouterView />
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.header-main {
    flex-direction: column;
    height: 100vh;
}

.el-main {
    background-color: #fff;
    padding-right: 0;
}
</style>
