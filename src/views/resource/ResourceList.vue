<script setup lang="ts">
import { useRouter } from 'vue-router';
import { FormInstance } from 'element-plus';
import { queryCondition, queryResult, queryResources } from "../../combined/useResources"
import { allResourceCategory, getAllResourceCategory } from "../../combined/useResourceCategory"
import ResourceEditDialog from './ResourceEditDialog.vue';

const router = useRouter();
const queryFm = ref<FormInstance>()
const dlgResourceEdit = ref<InstanceType<typeof ResourceEditDialog>>()

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
                <el-form-item label="资源分类" prop="category_id">
                    <el-select v-model="queryCondition.category_id" placeholder="资源分类" clearable>
                        <el-option label="不限制" :value="0" />
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
        <el-button @click="dlgResourceEdit?.initAndShow(0)">添加资源</el-button>
        <el-button @click="router.push({ 'name': 'resource_category' })">资源类别管理</el-button>
        <el-table :data="queryResult.records" border style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="name" label="资源名称" width="180" align="center" />
            <el-table-column prop="url" label="资源路径" width="180" align="center" />
            <el-table-column prop="description" label="描述" width="180" align="center" />
            <el-table-column prop="created_at" label="创建时间" align="center" />
            <el-table-column label="操作" v-slot="{ row }">
                <el-button type="primary" @click="dlgResourceEdit?.initAndShow(row.id)">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </el-table-column>
        </el-table>
        <ResourceEditDialog ref="dlgResourceEdit" />
        <template #footer>
            <el-pagination background v-model:current-page="queryResult.current" v-model:page-size="queryResult.size"
                :page-sizes="[15, 20, 30]" layout="total, prev, pager, next, sizes" :total="queryResult.total" @size-change="(size) => {
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
