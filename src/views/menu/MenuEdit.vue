<script setup lang="ts">
import { useMenus } from "../../combined/useMenus"
import { useRoute } from 'vue-router';

const route = useRoute();
const { getTopMenus, topMenus, form, onSubmit, getMenuInfoById, msgText } = useMenus()
getTopMenus()
if (route.params.id) {
    getMenuInfoById(route.params.id as string)
}
</script>

<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="菜单名称" prop="name" :required="true">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="菜单路径" prop="href" :required="true">
            <el-input v-model="form.href" />
        </el-form-item>
        <el-form-item label="上级菜单" prop="parent_id" :required="true">
            <el-select v-model="form.parent_id" placeholder="请选择上级菜单">
                <el-option label="顶级菜单" :value="-1" />
                <el-option v-for="menu in topMenus" :key="menu.id" :label="menu.name" :value="menu.id" />
            </el-select>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.description" />
        </el-form-item>
        <el-form-item label="图标名称" prop="icon" :required="true">
            <el-input v-model="form.icon" />
        </el-form-item>
        <el-form-item label="是否显示">
            <el-radio-group v-model="form.show">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
            </el-radio-group>
            <!-- <el-switch v-model="form.show" active-text="是" inactive-text="否" /> -->
        </el-form-item>
        <el-form-item label="排序" prop="order_num" :required="true">
            <el-input v-model="form.order_num" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即{{ msgText }}</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped>
.el-form {
    background-color: #fff;
    padding: 30px;
}
</style>
