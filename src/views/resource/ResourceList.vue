<script setup lang="ts">
import { useRouter } from 'vue-router';
import { FormInstance } from 'element-plus';
import { queryCondition, queryResult, queryResources } from "../../combined/useResources"
import { allResourceCategory, getAllResourceCategory } from "../../combined/useResourceCategory"

const router = useRouter();
const queryFm = ref<FormInstance>()

queryResources()
getAllResourceCategory()
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <el-form :inline="true" :model="queryCondition" class="demo-form-inline" ref="queryFm">
                <el-form-item label="资源名称" prop="name">
                    <el-input v-model="queryCondition.name" placeholder="资源名称" clearable />
                </el-form-item>
                <el-form-item label="资源路径" prop="url">
                    <el-input v-model="queryCondition.url" placeholder="资源路径" clearable />
                </el-form-item>
                <el-form-item label="资源分类" prop="categoryId">
                    <el-select v-model="queryCondition.categoryId" placeholder="资源分类" clearable>
                        <el-option label="不限制" value="" />
                        <el-option v-for="category in allResourceCategory" :key="category.id" :label="category.name"
                            :value="category.id" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryFm?.resetFields()">重置</el-button>
                    <el-button type="primary" @click="queryResources()">搜索查询</el-button>
                </el-form-item>
            </el-form>
        </template>
        <el-button @click="router.push({ 'name': 'menu_create' })">添加资源</el-button>
        <el-button @click="router.push({ 'name': 'resource_category' })">资源类别</el-button>
        <el-table :data="queryResult.records" border style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="name" label="资源名称" width="180" align="center" />
            <el-table-column prop="href" label="资源路径" width="180" align="center" />
            <el-table-column prop="description" label="描述" width="180" align="center" />
            <el-table-column prop="created_at" label="创建时间" align="center" />
            <el-table-column label="操作">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </el-table-column>
        </el-table>
        <template #footer>
            <el-pagination background v-model:current-page="queryResult.current" v-model:page-size="queryResult.size"
                :page-sizes="[1, 30, 100]" layout="total, prev, pager, next, sizes" :total="queryResult.total" @size-change="(size) => {
                    queryResources({ size: size })
                }" @current-change="(current) => {
    queryResources({ current: current })
}" />
        </template>
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

.el-table {
    margin-top: 15px;
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
}
</style>
