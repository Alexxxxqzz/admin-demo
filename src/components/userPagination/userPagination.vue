<template>
  <div class="user-form">
    <el-form ref="formRef" :inline="true" :model="formInline">
      <el-form-item label="搜索类型" prop="option">
        <el-select
          v-model="formInline.option"
          placeholder="请选择搜索类型"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="formInline.content"
          placeholder="请输入搜索内容"
          clearable
        />
      </el-form-item>
      <el-form-item label="时间范围" prop="date">
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlereset"
          >重置</el-button
        >
        <el-button type="primary" @click="handleQuery"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const formInline = reactive({
  date: '',
  user: '',
  option: '',
  content: ''
})
const options = ref([
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
])
const handlereset = () => {}
const handleQuery = () => {}
</script>

<style scoped lang="less">
.user-form {
  width: 100%;
  height: 100px;
  margin-top: 40px;
  margin-left: 40px;
}
/deep/ .el-form-item__content {
  width: 300px;
}
</style>
