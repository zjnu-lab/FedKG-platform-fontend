<template>
  <div class="knowledgeMapShow">
    <div class="box">
      <div class="box-header">实体信息</div>
      <div class="box-body">
        <el-form :model="form" ref="formref" label-width="100px">
          <el-form-item label="实体名称">
            <el-input v-model="form.realityName"></el-input>
          </el-form-item>
          <el-form-item label="实体图片">
            <!-- 导入 这里要配置 参考文档
              https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95
             -->
            <el-upload>
              <el-button>选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="实体描述视频">
            <el-upload>
              <el-button>选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="实体文件描述">
            <el-button @click="subtract">-</el-button>
            <span style="padding: 0 20px;">{{ form.realityFileDesc }}</span>
            <el-button @click="add">+</el-button>
          </el-form-item>
          <el-form-item style="margin-top: 50px;">
            <el-button type="primary" @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const formref = ref(null)
    const form = reactive({
      realityName: '',
      realityFileDesc: 0,
    });
    const subtract = () => {
      form.realityFileDesc--;
    }
    const add = () => {
      form.realityFileDesc++;
    }
    const handleSubmit = () => {
      // 提交逻辑写在这里
      console.log(form)
    }
    return {
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