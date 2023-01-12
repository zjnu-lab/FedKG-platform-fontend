<template>
  <div>
    <div class="box">
      <el-descriptions title="用户个人信息" :column="3" border>
        <el-descriptions-item label="名字" label-align="center" align="center">
          {{ userInfo.name }}
        </el-descriptions-item>

        <el-descriptions-item label="用户名" label-align="center" align="center" class-name="my-content">
          {{ userInfo.username }}
        </el-descriptions-item>

        <el-descriptions-item label="手机号" label-align="center" align="center">
          {{ userInfo.phone }}
        </el-descriptions-item>

        <el-descriptions-item label="个人认证" label-align="center" align="center">
          <el-tag size="small" v-if="userInfo.active">已认证</el-tag>
          <el-tag size="small" v-else>未认证</el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="组织" label-align="center" align="center">
          {{ userInfo.organization }}
        </el-descriptions-item>

        <el-descriptions-item label="总积分" label-align="center" align="center">
          {{ userInfo.scores }}
        </el-descriptions-item>

      </el-descriptions>
      <el-table :data="userInfo.scores_records" stripe border>
        <el-table-column label="积分记录">
          <el-table-column label="时间">
            <template v-slot="{row}">
              {{ row.create_time }}
            </template>
          </el-table-column>
          <el-table-column width="120px" label="积分" prop="change_records">
          </el-table-column>
          <el-table-column width="120px" label="事件" prop="change_reasons">
          </el-table-column>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
          v-model:current-page="currentPage"
          page-size="10"
          layout="prev, pager, next, jumper"
          :page-count="userInfo.totalpage"
          @current-change="handleCurrentChange"
          style=" display: flex; justify-content: center"
      />
    </div>
  </div>
</template>
<script>
import {reactive, toRefs} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {userStore} from "@/store/user";
import api from "@/utils/api";

export default {
  name: "userInfor",
  setup() {
    const user = userStore()
    const table = reactive({
      userInfo: {},
    })

    const page = reactive({
      currentPage: 1,
      handleCurrentChange() {
        api.getUserInfor(user.token, page.currentPage).then((response) => {
          table.userInfo = response.data.data
        }).catch((error) => {
          console.log(error.massage)
        })
      }
    })

    onMounted(() => {
      api.getUserInfor(user.token, 1).then((response) => {
        table.userInfo = response.data.data
      }).catch((error) => {
        console.log(error.massage)
      })
    })

    return {
      ...toRefs(table),
      ...toRefs(page)
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(14, 14, 60, .08);
  padding: 50px 100px;
  min-width: 400px;
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  min-height: 200px;

}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
