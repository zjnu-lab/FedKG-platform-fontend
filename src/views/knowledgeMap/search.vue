<template>
  <div class="knowledgeMapSearch">
    <h1>知识图谱</h1>
    <div class="flex-center search-box">
      <el-input
        placeholder="请输入关键字"
        size="large"
        v-model="searchStr"
        style="margin-right: 50px; width: 400px"
      ></el-input>
      <el-button size="large" @click="handleSearch">搜索</el-button>
    </div>
    <div class="content-box">
      <div v-for="item in showData.list" :key="item.key">
        {{ `${item.name}: ${item.song}` }}
      </div>
      <div>{{ searchStr }}</div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const searchStr = ref("");
    const handleSearch = () => {
      console.log(handleSearch);
    };
    const showData = reactive({
      list: [
        { name: "eason", song: "热带雨林", key: 1 },
        { name: "eason", song: "单车", key: 2 },
        { name: "eason", song: "明年今日", key: 3 },
        { name: "eason", song: "k歌之王", key: 4 },
      ],
    });
    return {
      searchStr,
      handleSearch,
      showData,
    };
  },
};
</script>
<style lang="scss" scoped>
.search-box {
  margin-top: 50px;
}
.content-box {
  box-shadow: 0 0 20px rgba(14, 14, 60, .08);
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 50px;
  padding: 50px;
}
</style>