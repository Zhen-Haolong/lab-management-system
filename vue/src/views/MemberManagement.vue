
<template>

  <div>
    <div class="card" style="margin-bottom: 5px">
      <el-input style="width: 240px; margin-right: 10px  " v-model="data.name" placeholder="请输入名称查询" prefix-icon="Search"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="warning">重置</el-button>
    </div>

    <div class="card" style="margin-bottom: 5px" >
      <div style="margin-bottom: 10px">
        <el-button type="primary">新增</el-button>
        <el-button type="warning">批量删除</el-button>
        <el-button type="info">导入</el-button>
        <el-button type="success">导出</el-button>
      </div>

      <div>
          <el-table :data="members" border v-loading="loading" style="width: 100%" size="small">
<!--        <el-table :data="data.testmembersdata" stripe border style="width: 100%">-->
          <el-table-column prop="id" label="ID" min-width="" />
          <el-table-column prop="name" label="姓名" min-width="80" />
          <el-table-column prop="stu_id" label="学号" min-width="120" />
          <el-table-column prop="gender" label="性别" min-width="70" />
          <el-table-column prop="birth" label="出生日期" min-width="110" />
          <el-table-column prop="school" label="学校" min-width="180" show-overflow-tooltip />
          <el-table-column prop="major" label="专业" min-width="150" show-overflow-tooltip />
          <el-table-column prop="email" label="邮箱" min-width="180" show-overflow-tooltip />
        </el-table>
      </div>

      <div style="margin-top: 10px">
        <el-pagination
            v-model:current-page="data.pageNum"
            v-model:page-size="data.pageSize"
            :page-sizes="[5, 10, 15, 20]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
        />
      </div>
    </div>

  </div>

</template>



<script setup>
import {onMounted, reactive, ref} from "vue";
import { ElMessage } from "element-plus";
import { fetchMembersData } from "@/api/membersdata.js";

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
  name: '',
  pageNum: 1,
  pageSize: 10,
  total: 47,
  testmembersdata:[{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  },{
    id: 1,
    name: "周家愉",
    stu_id: "202314120124",
    gender: "M",
    birth: "2005-10-01",
    school: "华北理工大学（曹妃甸校区）",
    grade: "2023",
    major: "信息管理与信息系统",
    mobile: "17707921482",
    email: "1803084613@qq.com"
  }]
})

</script>

<style scoped>
.card{
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, .12);
}
</style>
