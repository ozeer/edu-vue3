<script setup lang="ts">
import { ref } from 'vue'
import { queryResult, queryResourceCategory } from '../../combined/useResourceCategory'
import { submitEditCategory } from '../../api/resource_category'

// 提交按钮事件处理
const onSubmit = async () => {
    if (!form.name) {
        ElMessage.error('资源类别不能为空')
        return
    }
    const { data } = await submitEditCategory(form).finally(() => {
        dialogFormVisible.value = false
    })

    if (data.code === 200) {
        ElMessage.success(`${msgText.value}资源类型成功`)
        queryResourceCategory()
    } else {
        ElMessage.error(`${msgText.value}资源类型失败`)
    }
}

const dialogFormVisible = ref(false)
const isCreate = ref(true)
const msgText = ref('')
const initData = () => ({
    id: 0,
    name: '',
    sort: 0
})
const form = reactive(initData())

const initAndShow = (id = 0) => {
    Object.assign(form, initData())

    dialogFormVisible.value = true
    if (id) {
        isCreate.value = false
        msgText.value = '更新'
        const selectCategory = queryResult.value.list.find((item) => item.id === id)
        Object.assign(form, selectCategory)
    } else {
        isCreate.value = true
        msgText.value = '创建'
    }
}
defineExpose({
    initAndShow,
})
</script>

<template>
    <el-dialog v-model="dialogFormVisible" :title="msgText + '资源类别'">
        <el-form :model="form">
            <el-form-item label="类别名称" label-width="140px" prop="name" :required="true">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="排序" label-width="140px" prop="sort" :required="true">
                <el-input v-model="form.sort" autocomplete="off" />
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

<style lang="scss" scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
