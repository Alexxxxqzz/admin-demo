<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="240px" style="background-color: aqua">
        <menu-content></menu-content>
      </el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <user-dialog
      ref="dialogRef"
      :dialog-conifg="dialogConifg"
    ></user-dialog>
    <!-- <el-button @click="logout">退出登陆</el-button>
    <user-pagination></user-pagination>
    <user-table></user-table> -->
  </div>
</template>

<script setup lang="ts">
import dialogConifg from '@/components/userDialog/config/index'
import menuContent from '@/layout/menuContent.vue'
// import { localCache } from '@/utils/cache'
// import { useRouter } from 'vue-router'

// const router = useRouter()
// const logout = () => {
//   //1、删除token
//   localCache.removeCache('token')
//   //2、跳转到登陆页面
//   router.push('/Login')
// }
</script>

<style scoped lang="less">
.main {
  height: 100%;
  color: red;
  .main-content {
    height: 100%;
  }

  .el-aside {
    overflow-y: auto;
    overflow-x: hidden;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
