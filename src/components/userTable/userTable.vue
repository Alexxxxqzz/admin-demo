<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="count" label="账号" width="180" />
      <el-table-column prop="userName" label="用户名" />
      <el-table-column prop="projectID" label="工程ID" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="date" label="时间" />
      <el-table-column label="操作">
        <template #default="scoped">
          <el-button>关注</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style scoped></style>
