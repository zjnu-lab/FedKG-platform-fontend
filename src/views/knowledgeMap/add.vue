<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">知识图谱</div>
      <div class="box-body">
        <el-form :model="form" ref="formref" label-width="100px">
          <el-form-item label="实体名称">
            <el-input v-model="form.realityName"></el-input>
          </el-form-item>
          <el-form-item label="实体图片">
            <el-upload>
              <el-button>选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="实体描述视频">
            <el-upload>
              <el-button>选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="实体描述">
            <!-- <el-button @click="subtract">-</el-button>
            <span style="padding: 0 20px;">{{ form.realityFileDesc }}</span>
            <el-button @click="add">+</el-button> -->
            <el-input placeholder="请输入描述" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 50px">
            <el-button type="primary" @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import api from "../../utils/api";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const des = ref("");
    const formref = ref(null);
    const form = reactive({
      realityName: "",
      realityFileDesc: 0,
      desc: "",
    });
    const subtract = () => {
      form.realityFileDesc--;
    };
    const add = () => {
      form.realityFileDesc++;
    };
    const handleSubmit = () => {
      // 提交逻辑写在这里
      let data = {
        newentity_name: form.realityName,
        newentity_attribute: form.desc,
      };
      api.postReality(data).then((res) => {
        if (res.data.code === 200) {
          ElMessage({
            message: "success",
            type: "success",
          });
        } else {
          ElMessage({
            message: "fail.",
            type: "error",
          });
        }
      });
      alert("提交成功，请联系工作人员审核");
      location.reload();
    };
    return {
      des,
      form,
      formref,
      subtract,
      add,
      handleSubmit,
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