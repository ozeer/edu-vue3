<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from "../../api/users"
import { useTokenStore } from "../../stores/access_token"
import { useRoute, useRouter } from 'vue-router';

const store = useTokenStore()
const router = useRouter();
const route = useRoute();

const form = reactive({
    phone: '18701588475',
    password: '123456zy',
})

// 定义表单校验规则
const rules = reactive<FormRules>({
    phone: [
        { required: true, message: "手机号码不能为空", trigger: "blur" },
        { pattern: /^1\d{10}$/, message: "手机号必须为11位数字", trigger: "blur" },
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
        { min: 6, max: 12, message: "密码必须为6到10位", trigger: "blur" },
    ],
})

// 提交表单处理逻辑
const onSubmit = async () => {
    isLoading.value = true;

    // 表单校验
    await formRef.value?.validate().catch((err) => {
        isLoading.value = false;

        ElMessage.error("表单校验失败!")
        throw err
    })

    const { data } = await login(form).then(res => {
        // fail
        if (res.data.code != 200) {
            isLoading.value = false;

            ElMessage.error("登录信息有误!")
            throw new Error("登录失败!")
        }

        // success
        return res.data
    })

    store.saveToken(data.access_token, data.refresh_token)

    isLoading.value = false;

    ElMessage.success("登录成功!")
    router.push((route.query.redirect as string) || "/")
}

const formRef = ref<FormInstance>()
// 定义是否登录加载
const isLoading = ref(false)
</script>

<template>
    <div class=login>
        <el-form :model="form" size="large" :rules="rules" ref="formRef" label-width="120px">
            <h2>登录</h2>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
.login {
    background-color: #f4f4f5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    // 背景图片
    background-image: url('@/assets/background.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    //background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('@/assets/background.jpeg') no-repeat 0% 20%/ cover;

    .el-form {
        width: 400px;
        background-color: #eee;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
    }

    h2 {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
