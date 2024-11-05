<template>
  <div class="menu-content">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title">格力商用空调云平台</h2>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        text-color="#b7bdc3"
        background-color="#001529"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品统计</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">部门管理</el-menu-item>
          <el-menu-item index="1-1">菜单管理</el-menu-item>
          <el-menu-item index="1-2">角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item index="1-1">商品类别</el-menu-item>
          <el-menu-item index="1-2">商品信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><ChatDotRound /></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item index="1-1">你的故事</el-menu-item>
          <el-menu-item index="1-2">故事列表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
  user-select: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-cative {
    background-color: #0a60bd;
  }
}
.menu-content {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
</style>
