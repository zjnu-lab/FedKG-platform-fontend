<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">知识图谱</div>
      <div class="box-body flex-center">{{knowledgeMap.data}}</div>
    </div>
    <div class="box" style="margin-top: 100px;">
      <div class="box-header">实体属性</div>
      <div class="box-body flex-center">{{reality.data}}</div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const knowledgeMap = reactive({
      data: '局部知识图展示'
    });
    const reality = reactive({
      data: '实体关系信息/展示'
    });
    return {
      knowledgeMap,
      reality,
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
    min-width: 800px;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    font-size: 24px;
    font-weight: bold;
    min-height: 300px;
  }
}
</style>