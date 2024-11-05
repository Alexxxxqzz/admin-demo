<template>
  <div class="login-box">
    <div class="title">格力商用空调云平台</div>
    <el-tabs
      v-model="activeName"
      type="card"
      class="tabs"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane label="账号登录" name="account">
        <el-form
          class="el-form"
          ref="ruleFormRef"
          :rules="rules"
          :model="ruleForm"
          label-position="right"
          style="max-width: 400px"
          status-icon
        >
          <el-form-item label="账号" prop="userCount">
            <el-input v-model="ruleForm.userCount" />
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input
              v-model="ruleForm.passWord"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox label="记住密码" v-model="isRemeber" />
            <el-button text style="color: skyblue">注册</el-button>
            <el-button text>忘记密码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="login(ruleFormRef)"
              size="large"
              style="background-color: aqua; width: 100%"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <el-form
          class="el-form"
          ref="ruleFormRef"
          :rules="rules"
          :model="ruleForm"
          label-position="right"
          style="max-width: 400px"
        >
          <el-form-item label="手机号" prop="userCount">
            <el-input v-model="ruleForm.userCount" />
          </el-form-item>
          <el-form-item label="验证码" prop="passWord">
            <el-input
              v-model="ruleForm.passWord"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox label="记住密码" v-model="isRemeber" />
            <el-button text style="color: skyblue">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="login(ruleFormRef)"
              size="large"
              style="background-color: aqua; width: 100%"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import type {
  FormInstance,
  FormRules,
  TabsPaneContext,
  ElMessage
} from 'element-plus'
import useLoginStore from '@/stores/login/login'
import type { IRuleForm } from './interface/index'
import { localCache } from '@/utils/cache'
const router = useRouter()
const ruleFormRef = ref<FormInstance>()

//tabs
const activeName = ref('account')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

//记住密码的小逻辑
const isRemeber = ref<boolean>(
  localCache.getCache('newValue') ?? false
)
watch(isRemeber, (newValue) => {
  localCache.setCache('isRemeber', newValue)
})
const ruleForm = reactive<IRuleForm>({
  userCount: localCache.getCache('userCount') ?? '',
  passWord: localCache.getCache('passWord') ?? ''
})
const rules = reactive<FormRules<IRuleForm>>({
  userCount: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  passWord: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 8,
      max: 16,
      message: '密码长度为8～16！',
      trigger: 'blur'
    }
  ]
})
//登录
const loginStore = useLoginStore()
const login = async (formEl: FormInstance | undefined) => {
  //获取用户输入的账号和密码，携带它们向服务器发送网络请求
  // router.push('/home')
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginStore.loginAction(ruleForm).then((res) => {
        //判断用户是否记住密码，如果记住则保存到本地缓存中
        if (isRemeber.value) {
          localCache.setCache('userCount', ruleForm.userCount)
          localCache.setCache('passWord', ruleForm.passWord)
        } else {
          //如果没记住密码则清空缓存
          localCache.removeCache('userCount')
          localCache.removeCache('passWord')
        }
      })
      ElMessage({
        message: '登录成功，请稍等片刻！',
        type: 'success'
      })
    } else {
      console.log('出错了')
      ElMessage({
        message: '登录出错啦，请稍后再试！',
        type: 'error'
      })
    }
  })
}
</script>

<style scoped>
.loginBox {
  width: 450px;
  height: 400px;
  border-radius: 10px;
  background-color: red;
}
.title {
  width: 100%;
  height: 100px;
  margin-top: 40px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}
.tabs {
  width: 100%;
}
.el-form {
  margin-left: 20px;
}
</style>
