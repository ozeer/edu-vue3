<script setup lang="ts">
import { isCollapse } from "./isCollapse";
import { getUserInfo, logout } from "../../api/users"
import { useTokenStore } from "../../stores/access_token"
import BreadCrumb from "./BreadCrumb.vue"
import { useRouter } from 'vue-router';
const router = useRouter()

// 获取用户信息
const userInfo = ref({ avatar: '', nick: '' })
getUserInfo().then((res) => {
    if (res?.data) {
        userInfo.value = res.data.data;
    }
})

// 退出登录
const handleLogout = async () => {
    // 询问确认退出登录吗？
    await ElMessageBox.confirm("确认退出登录吗？", "退出询问", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: 'warning'
    }).catch(() => {
        ElMessage.info("取消退出操作")
        return new Promise(() => { })
    })

    // 执行退出
    await logout().catch(() => { })
    // 清空token，跳转到登录页面
    ElMessage.success("用户已退出")
    useTokenStore().saveToken("")
    router.push('/login')
}
</script>

<template>
    <el-header>
        <!--图标-->
        <el-icon @click="isCollapse = !isCollapse">
            <IEp-Expand v-show="isCollapse" />
            <IEp-Fold v-show="!isCollapse" />
        </el-icon>
        <!--面包屑-->
        <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" :to="{ path: item.path }">{{
                item.meta.title
            }}</el-breadcrumb-item>
        </el-breadcrumb> -->
        <el-col :span="12">
            <BreadCrumb />
        </el-col>
        <!--下拉菜单-->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="32" :src="userInfo.avatar" />
                <el-icon class="el-icon--right">
                    <IEp-arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="router.push({ 'name': 'user_profile' })">个人中心</el-dropdown-item>
                    <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
    background-color: #758d71;

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
