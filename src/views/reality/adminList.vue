<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">待审核实体列表(管理员)</div>
      <div class="box-body">
        <div style="text-align: start; margin-bottom: 20px;">
          <el-button @click="handlePass"> 通过 </el-button>
          <el-button @click="handleUnpass"> 不通过 </el-button>
        </div>
        <el-table
          :data="table.tableData"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="实体名称">
            <template v-slot="{ row }">
              {{ row.realityName }}
            </template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template v-slot="{ row }">
              {{ row.status }}
            </template>
          </el-table-column>
          <el-table-column width="100px">
            <template v-slot="{ row }">
              <el-button size="small" @click="table.pass(row)"
                >信息查看</el-button
              >
            </template>
          </el-table-column>
          <el-table-column>
            <template v-slot="{ row }">
              <el-button size="small" @click="table.unpass(row)"
                >撤销</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="table.tableData.length"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const table = reactive({
      tableData: [
        { realityName: "ame", status: "1" },
        { realityName: "topson", status: "2" },
        { realityName: "jerax", status: "3" },
        { realityName: "ceb", status: "4" },
        { realityName: "notail", status: "5" },
      ],
      pass(row) {
        // 信息查看详情操作
      },
      unpass(row) {
        // 撤销操作
      },
      selectData: [] // 表格中选择的数据
    });
    function handleSelectionChange(val) {
      table.selectData = val;
      console.log(val)
      // 表格单选框事件
    }
    function handlePass() {
      // 批量通过按钮回调
    }
    function handleUnpass() {
      // 批量不通过按钮回调
    }
    return {
      table,
      handleSelectionChange,
      handlePass,
      handleUnpass,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  box-shadow: 0 0 20px rgba(14, 14, 60, 0.08);
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