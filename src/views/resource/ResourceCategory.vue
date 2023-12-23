<script setup lang="ts">
import { queryCondition, queryResult, queryResourceCategory, currentPage, pageSize, handleDelete } from '../../combined/useResourceCategory'
import ResourceCategoryDialog from './ResourceCategoryDialog.vue';
import { useRouter } from 'vue-router';

queryResourceCategory()
const dlgResourceCategoryEdit = ref<InstanceType<typeof ResourceCategoryDialog>>()
const router = useRouter();

</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <h3>资源类别列表</h3>
                <el-button class="button" type="primary" @click="dlgResourceCategoryEdit?.initAndShow(0)">创建类别</el-button>
            </div>
        </template>
        <el-button @click="router.push({ 'name': 'resources' })">资源管理</el-button>
        <el-table :data="queryResult.list" border style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="name" label="类别名称" width="180" align="center" />
            <el-table-column prop="created_at" label="创建时间" align="center" />
            <el-table-column prop="sort" label="排序" align="center" />
            <el-table-column label="操作" v-slot="{ row }">
                <el-button type="primary" @click="dlgResourceCategoryEdit?.initAndShow(row.id)">编辑</el-button>
                <el-button type="danger" @click="handleDelete(row.id)">删除</el-button>
            </el-table-column>
        </el-table>
        <ResourceCategoryDialog ref="dlgResourceCategoryEdit" />
        <template #footer>
            <el-pagination background v-model:current-page="queryCondition.current" v-model:page-size="queryCondition.size"
                :page-sizes="[15, 20, 30]" layout="total, prev, pager, next, sizes" :total="queryResult.total"
                @size-change="queryResourceCategory()" @current-change="queryResourceCategory()" />
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
</style>
