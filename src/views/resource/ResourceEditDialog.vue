<script setup lang="ts">
import { queryResult, queryResources } from '../../combined/useResources'
import { submitEditResource } from '../../api/resources'
import { allCategoryItem } from "../../combined/useResourceCategory"

const initData = () => ({
    id: 0,
    name: '',
    category_id: 0,
    url: '',
    description: ''
})

const dialogFormVisible = ref(false)
const form = reactive(initData())
const isCreate = ref(true)
const msgText = ref('')

const initAndShow = (id = 0) => {
    Object.assign(form, initData())
    dialogFormVisible.value = true
    if (id) {
        isCreate.value = false
        msgText.value = '更新'
        const selectResource = queryResult.value.list.find((item) => item.id === id)
        Object.assign(form, selectResource)
    } else {
        isCreate.value = true
        msgText.value = '创建'
    }
}

const onSubmit = async () => {
    if (!form.name) {
        ElMessage.error('资源不能为空')
        return
    }

    const { data } = await submitEditResource(form).finally(() => {
        dialogFormVisible.value = false
    })

    if (data.code === 200) {
        ElMessage.success(`${msgText.value}资源成功`)
        queryResources()
    } else {
        ElMessage.error(`${msgText.value}资源失败`)
    }
}

defineExpose({
    initAndShow,
})
</script>

<template>
    <el-dialog v-model="dialogFormVisible" :title="msgText + '资源'">
        <el-form :model="form">
            <el-form-item label="资源名称" label-width="140px" prop="name">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="资源路径" label-width="140px" prop="url">
                <el-input v-model="form.url" autocomplete="off" />
            </el-form-item>
            <el-form-item label="资源类别" label-width="140px" prop="category_id">
                <el-select v-model="form.category_id" placeholder="资源类别">
                    <el-option label="不限制" :value="0" />
                    <el-option v-for="category in allCategoryItem" :key="category.id" :value="category.id"
                        :label="category.name" />
                </el-select>
            </el-form-item>
            <el-form-item label="资源描述" label-width="140px" prop="description">
                <el-input type="textarea" v-model="form.description" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped></style>
