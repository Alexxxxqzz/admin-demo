<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="Shipping address"
      width="500"
    >
      <el-form :model="formData">
        <template
          v-for="item in dialogConifg.formItem"
          :key="item.prop"
        >
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            :label-width="item.formLabelWidth"
          >
            <template v-if="item.type === 'input'">
              <el-input v-model="formData[item.prop]"></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select v-model="formData[item.prop]"></el-select>
            </template>
          </el-form-item>
        </template>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import dialogConifg from './config/index'
interface Iprops {
  dialogConfig: {
    formItem: any[]
  }
}
const props = defineProps<Iprops>()
const dialogVisible = ref(true)
const initForm: any = {}
//定义props
// for (const item of props.dialogConfig.formItem) {
//   // console.log(item, 'dayaaaaaaa')

//   initForm[item.prop] = item.initialValue ?? ''
// }
const formData = reactive<any>(initForm)
//定义设置dialog的方法
const setDialog = () => {
  dialogVisible.value = true
  for (const key in formData) {
    const item = dialogConifg.formItem.find(
      (item) => item.prop === key
    )
    formData[key] = item ? item.initialValue : ''
  }
}
</script>

<style scoped></style>
