<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">已通过实体列表</div>
      <div class="box-body">
        <el-table :data="table.tableData">
          <el-table-column label="实体名称">
            <template v-slot="{row}">
              {{ row.newent_name }}
            </template>
          </el-table-column>
          <el-table-column width="100px">
            <template v-slot="{row}">
              <el-button size="small" @click="table.pass(row)">信息查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination layout="prev, pager, next" :total="table.tableData.length"/>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive, ref} from "@vue/reactivity";
import api from '../../utils/api'
import {userStore} from "../../store/user";

export default {
  setup() {
    const user = userStore()
    let table = reactive({
      tableData: [],
      pass(row) {
        api.getRealityIfor(user.token, row.newent_id).then((response) => {
          alert("实体名称："+response.data.data.entity_info.newentity_name)
        })
      },
    })
    return {
      table, user
    };
  },
  mounted() {
    if (this.user.userRole === 2) {
      api.postReality(this.user.token, "3").then((result) => {
        console.log(result.data.data.entities_list)
        this.table.tableData = result.data.data.entities_list
      })
    } else {
      api.postReality(this.user.token, "0").then((result) => {
        this.table.tableData = result.data.data.entities_list
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  box-shadow: 0 0 20px rgba(14, 14, 60, .08);

  &-header {
    text-align: start;
    border: 1px solid #ccc;
    border-radius: 4px 4px 0 0;
    border-bottom: 0px;
    padding: 10px 20px;
    font-size: 16px;
  }

  &-body {
    padding: 50px 100px;
    min-width: 400px;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    min-height: 800px;
  }
}
</style>