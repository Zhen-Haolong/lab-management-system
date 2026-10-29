
<template>

  <div style="margin-bottom: 20px">
    <RouterLink to="/manager/test1">跳转到Test1.vue页面</RouterLink> |
    <a href="/manager/test1">通过a标签跳转到Test.vue</a>
  </div>

  <div style="margin: 20px">
    <el-button type="primary" @click="router.push('/manager/test1')">编程式跳转到新的页面Test.vue</el-button>
    <el-button type="primary" @click="router.replace('/manager/test1')">编程式跳转到新的页面Test.vue</el-button>
  </div>

  <div style="margin: 20px">
    <el-button type="primary" @click="router.push('/manager/test1?id=1&name=青哥哥')">路由传参id=1&name=青哥哥</el-button>
  </div>
  <div style="margin: 20px">
    <el-button type="primary" @click="router.push({ path: '/manager/test1', query: {id: 1, name: '青哥哥'}})">路由传参id=1&name=青哥哥</el-button>
  </div>

  <div>
    <div style="margin: 20px">
      单选框
      <el-input
          v-model="data.input"
          style="width: 240px"
          placeholder="请输入内容"
          prefix-icon="Search"
          clearable
      />{{ data.input }}
      <el-input style="width: 200px" :suffix-icon="Calendar"></el-input>
      <el-input
          v-model="data.descr"
          type="textarea"
          style="width: 240px"
          placeholder="请输入一段描述"></el-input>
    </div>
  </div>
  <div style="margin: 20px">
    下拉列表
    <el-select
        clearable
        multiple
        collapse-tags
        collapse-tags-tooltip
        :max-collapse-tags="3"
        v-model="data.value"
        value-key="id"
        placeholder="请选择水果"
        style="width: 300px"
    >
      <el-option
          v-for="item in data.option"
          :key="item.id"
          :label="item.label"
          :value="item.name"
      />
    </el-select>
  </div>

  <div style="margin: 20px">
    单选框
    <el-radio-group v-model="data.sex">
      <el-radio value="男" >男</el-radio>
      <el-radio value="女" >女</el-radio>
    </el-radio-group>
  </div>

  <div style="margin: 20px">
    单选按钮组
    <el-radio-group v-model="data.tag">
      <el-radio-button label="筹备中" value="1"></el-radio-button>
      <el-radio-button label="宣传中" value="2"></el-radio-button>
      <el-radio-button label="进行中" value="3"></el-radio-button>
      <el-radio-button label="已完成" value="4"></el-radio-button>
    </el-radio-group>
  </div>

  <div style="margin: 20px">
    <el-table :data="data.tableData" style="width: 100%" stripe border height="300">
      <el-table-column prop="date" label="日期" width="100px" />
      <el-table-column prop="name" label="名称" width="100px" />
      <el-table-column prop="address" label="地址" width="100px" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="danger" icon="Delete" size="small" @click="del(scope.row.id)">删除</el-button>
          <el-button type="primary" icon="Edit" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <div style="margin: 20px">
    分页器
    <el-pagination
        v-model:current-page="data.currentPage"
        v-model:page-size="data.pageSize"
        :page-sizes="[5, 10, 15, 20]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.tableData.length"
    />
  </div>

  <div style="margin: 20px;">
    <el-table :data="members" border v-loading="loading" style="width: 100%" size="small">
      <el-table-column prop="id" label="ID" min-width="60" />
      <el-table-column prop="name" label="姓名" min-width="80" />
      <el-table-column prop="stu_id" label="学号" min-width="120" />
      <el-table-column prop="gender" label="性别" min-width="70" />
      <el-table-column prop="birth" label="出生日期" min-width="110" />
      <el-table-column prop="school" label="学校" min-width="180" show-overflow-tooltip />
      <el-table-column prop="major" label="专业" min-width="150" show-overflow-tooltip />
      <el-table-column prop="email" label="邮箱" min-width="180" show-overflow-tooltip />
    </el-table>
  </div>

  <div style="margin: 20px">
    v-for循环渲染
    <el-checkbox-group v-model="data.checklist">
      <el-checkbox v-for="item in data.option" :key="item.id" :value="item.name" :label="item.name"></el-checkbox>
    </el-checkbox-group>
  </div>
  <div style="margin: 20px">
    <el-checkbox-group v-model="data.checklist1" :options="data.option" :props="data.props"/>
  </div>
  
  <div style="margin: 20px 0">
    <img src="@/assets/logo.svg" alt="" style="width: 100px">
    <el-image :src="img" style="width: 100px; margin-left: 100px" :preview-src-list="[img]"></el-image>
  </div>

  <div style="margin: 20px">
    轮播图
    <el-carousel type="card" height="400px">
      <el-carousel-item v-for="item in data.img" :key="item">
        <img style="width: 100%" height="400px" items-center="auto" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

  <div style="margin: 20px">
    <el-date-picker
        v-model="data.date"
        type="datetime"
        placeholder="选择日期"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        :shortcuts="shortcuts"
    />{{data.date}}

    <el-date-picker
        style="margin-left: 50px"
        v-model="data.date1"
        type="datetime"
        placeholder="选择日期时间"
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
        :shortcuts="shortcuts"
    />{{data.date1}}

    <el-date-picker
        style="margin-left: 50px"
        v-model="data.date2"
        type="datetime"
        placeholder="选择时间"
        format="HH:mm:ss"
        value-format="HH:mm:ss"
        :shortcuts="shortcuts"
    />{{data.date2}}

    <el-date-picker
        style="margin-left: 50px"
        v-model="data.date3"
        type="datetimerange"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        single-panel />{{data.date3?.length ? data.date3[0] : ''}} {{data.date3?.length ? data.date3[1] : ''}}
  </div>

  <div style="margin: 20px">
    <el-dialog v-model="data.dialogVisible" title="编辑行对象" width="500">
      <div style="padding: 20px">
        <div style="margin-bottom: 10px">日期：{{ data.row.date }}</div>
        <div style="margin-bottom: 10px">名称：{{ data.row.name }}</div>
        <div>地址：{{ data.row.address }}</div>
      </div>
    </el-dialog>
  </div>

</template>



<script setup>
import {onMounted, reactive, ref} from "vue";
import { ElMessage } from "element-plus";
import {Calendar, Search} from "@element-plus/icons-vue"
import { fetchMembersData } from "@/api/membersdata.js"
import img from '@/assets/logo.svg'
import lun1 from '@/assets/lun1.png'
import lun2 from '@/assets/lun2.png'
import lun3 from '@/assets/lun3.png'
import router from '@/router/index.js'

const members = ref([]);
const loading = ref(false);
async function loadMembers() {
  loading.value = true;
  try {
    const payload = await fetchMembersData();
    members.value = Array.isArray(payload) ? payload : payload.data;
  } catch (error) {
    ElMessage.error(`获取成员列表失败：${error.message}`);
  } finally {
    loading.value = false;
  }
}

onMounted(loadMembers);

const data = reactive({
  input: "为什么显示不一样!!",
  descr: "很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字",
  value:"",
  tableData: [
    { id: 1, date: '2024-10-11', name: '亲哥哥哥', address: '安徽合肥' },
    { id: 2, date: '2024-10-12', name: '小鲁班', address: '上海浦东' },
    { id: 3, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 4, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 5, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 6, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 7, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 8, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 9, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 10, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 11, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 12, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 13, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 14, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 15, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 16, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 17, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
    { id: 18, date: '2024-10-13', name: '小妲己', address: '北京大兴' },
  ],
  option: [{id: 1, label: '苹果', name: '苹果1'}, {id: 2,  label: '香蕉', name: '香蕉'},
    {id: 3,  label: '桃子',name: '桃子'}, {id: 4, label: '苹果', name: '苹果2',unable: true},],
  sex: '男',
  tag: '1',
  checklist: [],
  checklist1:['苹果2'],
  props:{label: 'name', key: 'id', value: 'value', disabled:'unable'},
  img: [lun1, lun2, lun3],
  date: '',
  date1: '',
  date2: '',
  date3: '',
  row: null,
  currentPage: 1,
  pageSize: 5,
  dialogVisible: false,

})

const del = (id) =>{
  alert("删除ID=" + id + "的数据")
}

const edit = (row) =>{
  data.row = row;
  data.dialogVisible = true;
}

</script>
