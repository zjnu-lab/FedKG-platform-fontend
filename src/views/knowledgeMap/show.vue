<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">知识图谱</div>
      <div class="box-body flex-center">
        <div v-for="item in knowledgeMap.images" :key="item.image">
          <img src="item.image">
        </div>
        <div v-for="item in knowledgeMap.videos" :key="item.image">
          <video src="item.vedio"></video>
        </div>
      </div>
    </div>
    <div class="box" style="margin-top: 100px">
      <div class="box-header">实体属性</div>
      <div class="box-body flex-center">
        <div v-for="item in reality.infos" :key="item.info">
          {{ item.info }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import api from "../../utils/api";
export default {
  setup() {
    const knowledgeMap = reactive({
      data: "局部知识图展示",
      images: [],
      videos: [],
    });
    const reality = reactive({
      data: "实体关系信息/展示",
      infos: [] 
    });
    onMounted(() => {
      api.getRealityDetail(9)
        .then((res) => {console.log(res)})
        .finally(() => {
          let res = {
            code: 2002,
            data: {
              entity_info: {
                newentity_attribute: {
                  class: "class1",
                  images: [
                    {
                      image: "edit_image_url1",
                    },
                    {
                      image: "edit_image_url2",
                    },
                    {
                      image: "edit_image_url3",
                    },
                  ],
                  infomation: [
                    {
                      info: "info1",
                    },
                    {
                      info: "info2",
                    },
                  ],
                  vedio: [
                    {
                      vedio: "edit_vedio_url1",
                    },
                    {
                      vedio: "edit_vedio_url2",
                    },
                    {
                      vedio: "edit_vedio_url3",
                    },
                  ],
                },
                newentity_name: "edit-test",
              },
              failed_reason: null,
              newent_id: 5,
              status: 0,
              time: "2022-10-24 06:10:49.813707",
            },
            message: "\u83b7\u53d6\u6210\u529f",
          };
          let results =  res.data.entity_info.newentity_attribute
          knowledgeMap.images = results.images
          knowledgeMap.videos = results.vedio
          reality.infos = results.infomation
        });
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
    min-width: 800px;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    font-size: 24px;
    font-weight: bold;
    min-height: 300px;
  }
}
</style>