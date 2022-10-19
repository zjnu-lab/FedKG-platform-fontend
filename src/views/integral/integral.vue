<template>
  <div class="integral">
    <div class="box">
      <div class="box-header">总积分:{{ totalIntegral }}</div>
      <div class="box-body">
        <el-table :data="table.tableData" border>
          <el-table-column label="积分记录">
            <template v-slot="{row}">
              {{ row.time }}
            </template>
          </el-table-column>
          <el-table-column width="120px" prop="desc">
          </el-table-column>
          <el-table-column width="120px" prop="action">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination layout="prev, pager, next" :total="table.tableData.length" />
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
        { time: '2020-10-18', desc: 'rng 0-2 不敌og', action: '+0 积分' },
        { time: '2020-10-18', desc: 'rng 0-2 不敌og', action: '+0 积分' },
        { time: '2020-10-18', desc: 'rng 0-2 不敌og', action: '+0 积分' },
        { time: '2020-10-18', desc: 'rng 0-2 不敌og', action: '+0 积分' },
        { time: '2020-10-18', desc: 'rng 0-2 不敌og', action: '+0 积分' },
      ],
      pass(row) {
        // 信息查看详情操作
      },
    })
    const totalIntegral = ref(0)
    return {
      table,
      totalIntegral
    };
  },
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