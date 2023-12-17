<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMenus } from "@/combined/useMenus"

const router = useRouter();
const { allMenus, getAllMenus } = useMenus()
getAllMenus()

const handleEditMenu = async () => {
    console.log("编辑菜单");

}

const handleDeleteMenu = async () => {
    console.log("删除菜单");

}
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <el-button class="button" @click="router.push({ 'name': 'menu_edit' })">添加菜单</el-button>
            </div>
        </template>
        <el-table :data="allMenus" border style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="name" label="菜单名称" align="center" />
            <el-table-column prop="level" label="菜单层级" width="90" align="center" />
            <el-table-column prop="icon" label="菜单图标" align="center" />
            <el-table-column prop="href" label="菜单路径" align="center" />
            <el-table-column prop="order_num" label="排序" width="60" align="center" />
            <el-table-column label="操作">
                <el-button class="primary" @click="handleEditMenu">编辑</el-button>
                <el-button class="danger" @click="handleDeleteMenu">删除</el-button>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<style lang="scss" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: auto;
}
</style>
