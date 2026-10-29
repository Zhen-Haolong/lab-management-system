<template>
  <div>

    <div>
      <el-button type="primary" @click="router.back()">返回主页</el-button>
    </div>

    <div style="margin-bottom:20px; font-size: 30px; font-weight: bold; color: #333333">
      一舟的第一个作品
    </div>

    <div style="margin-bottom:20px;font-size: 20px">
      {{ a }} {{ b }}
    </div>

    <div style="margin-bottom:20px;font-size: 20px">
      {{ data.a }} {{ data.b }} {{data.c}} {{data.d}}
    </div>

    <div style="margin-bottom:20px;">
      <input v-model="data.name" />
    </div>

    <div style="margin-bottom:20px;">
      <span style="color: red" v-if="data.name === '佩奇'">小猪佩奇</span>
      <span style="color: blue"  v-else-if="data.name === '乔治'">小猪乔治</span>
      <span style="color: hotpink" v-else>小猪朵朵</span>
    </div>

    <div style="display: flex">
      <div @click="show(item)" v-for="item in data.arr" style="margin-right:10px;text-align: center;font-size:30px;line-height: 300px; width: 300px; height: 300px;background-color: green">{{ item }}</div>
    </div>

    <div style="margin-bottom: 20px">
      <select style="width: 200px" name="" id="">
        <option v-for="item in data.fruits">{{ item }}</option>
      </select>
    </div>

    <div style="margin-bottom: 20px">
      <button @click="click">点我加好运</button>
    </div>

    <div>
      <div :style="data.box"></div>
      <div>
        <img :src="data.img" alt="">
      </div>
    </div>

    <div style="margin: 10px">
      <el-button @click="click" color="blue">点我加好运</el-button>
      <el-button @click="click">点我加好运</el-button>
      <el-button type="primary" @click="click">点我加好运</el-button>
      <el-button type="success" @click="clickData">点击事件</el-button>
      <el-button type="info" >Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button type="danger" :icon="Delete" circle />
    </div>

    <div style="margin: 10px; color: #666">
      <el-icon :size="20" color="#666" style="top: 4px"><View /></el-icon>100
    </div>

    <div style="margin: 20px">
      <el-input
          v-model="input2"
          class="responsive-input"
          placeholder="Type something"
          :prefix-icon="Search"
      />
    </div>


  </div>
</template>


<script setup>
import {reactive, ref, onMounted} from "vue";
import {Delete, Search} from "@element-plus/icons-vue";
import router from "@/router/index.js";

const a = ref(1)
const b = ref("数据绑定可以使用const，一个数据一个ref")

const data = reactive({
  id: router.currentRoute.value.query.id,
  name1: router.currentRoute.value.query.name,
  a: 123,
  b: "常用的数据绑定方法是使用reactive，多个数据一个reactive",
  c: "123121321",
  d: true,
  name: "",
  arr: [1,2,3,7,8],
  fruits:['苹果','香蕉','橘子'],
  box:{
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  },
  img: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png'
})

onMounted(() => {
  console.log('页面加载完成')
})

const click = () =>{
  alert("好运＋1")
}

const show = (value) =>{
  alert(`这是：${value}`)
}

const clickData = () =>{
  alert('我当前使用的是Element-Plus组件的点击事件')
}

console.log('获取到传递过来的id=' + data.id)
console.log('获取到传递过来的name=' + data.name1)

</script>