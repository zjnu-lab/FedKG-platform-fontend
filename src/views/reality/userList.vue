<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">待审核实体列表(用户)</div>
      <div class="box-body">
        <el-table :data="table.tableData">
          <el-table-column label="实体名称">
            <template v-slot="{row}">
              {{ row.newent_name }}
            </template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template v-slot="{row}">
              {{ row.newent_status }}
            </template>
          </el-table-column>
          <el-table-column>
            <template v-slot="{row}">
              <el-button size="small" @click="table.detail(row)">信息查看</el-button>
            </template>
          </el-table-column>
          <el-table-column>
            <template v-slot="{row}">
              <el-button size="small" @click="table.reback(row)">撤销</el-button>
            </template>
          </el-table-column>
          <!--          <el-table-column>-->
          <!--            <template v-slot="{row}">-->
          <!--              <el-button size="small" @click="table.modify(row)">修改</el-button>-->
          <!--            </template>-->
          <!--          </el-table-column>-->
        </el-table>
        <el-pagination layout="prev, pager, next" :total="table.tableData.length"/>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive, ref} from "@vue/reactivity";
import api from "@/utils/api";
import {userStore} from "@/store/user";

export default {
  setup() {
    const user = userStore()
    const table = reactive({
      tableData: [],
      detail(row) {
        api.getRealityDetail(user.token, row.newent_id).then((response) => {
          alert("实体名称：" + response.data.data.entity_info.newentity_name)
        })
      },
      reback(row) {
        api.deleteReality(user.token, row.newent_id)
        location.reload()
      },
      // modify(row) {
      //   // 修改操作
      // },
    })

    return {
      table, user
    };
  },

  mounted() {
    api.getReality(localStorage.getItem('token'), "0").then((result) => {
      this.table.tableData = result.data.data.entities_list
    })
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