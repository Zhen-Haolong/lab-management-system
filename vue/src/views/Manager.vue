<template>

  <div>
    <!--    头部部分-->
    <div style="height: 60px; background-color: #0742b1;display: flex; align-items: center;">
      <img src="@/assets/logo.svg" alt="" style="width: 40px; height: 40px; margin: 10px">
      <div style="width: 400px; display: flex; align-items: center; justify-content: center; font-size: 20px; color: white">信息化管理与商务智能实验室 信息管理系统</div>
      <div style="flex: 1;"></div>
      <div style="width: 150px; display: flex; align-items: center">
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" style="width: 40px; height: 40px; margin: 10px">
        <span style="color: white; margin: 10px">管理员</span>
      </div>
    </div>

    <!--    下面部分开始-->
    <div style="display: flex">

      <!--   左侧导航栏   -->
      <div style="width: 200px; border-right: 1px solid #ddd; min-height: calc(100vh - 60px);">
        <el-menu router :default-active="router.currentRoute.value.path" style="border:0">
          <el-menu-item index="/manager/home">
            <el-icon><House /></el-icon>
            系统首页
          </el-menu-item>
          <el-menu-item>
            <el-icon><DataAnalysis /></el-icon>
            数据统计</el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><User /></el-icon>
              <span>成员管理</span>
            </template>
            <el-menu-item index="/manager/membermanagement">
              <el-icon><User /></el-icon>
              成员列表</el-menu-item>
            <el-menu-item index="/manager/departmanagement">
              <el-icon><Department /></el-icon>
              部门数据</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/manager/home">
            <el-icon><UserFilled /></el-icon>
            个人信息
          </el-menu-item>
          <el-menu-item index="/manager/home">
            <el-icon><SwitchButton /></el-icon>
            退出登录
          </el-menu-item>
        </el-menu>

      </div>

      <!--   右侧导航栏   -->
      <div style="flex: 1; width: 0; background-color: #f8f8ff; padding: 10px ">
        <RouterView></RouterView>
      </div>
    </div>

  </div>

</template>

<script setup>
import router from '@/router/index.js'
</script>