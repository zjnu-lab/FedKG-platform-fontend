<template>
  <div class="box">
    <div class="box-title">修改信息</div>
    <el-form :model="form" ref="formRef2" label-width="60px">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input v-model="form.oldPassword" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword" >
        <el-input v-model="form.newPassword" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
        class="btn"
        type="info"
        @click="handleNext"
      >
        提交
      </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
export default {
  setup(props, ctx) {
    const state = reactive({
      formRef2: ref(null),
      form: {
        oldPassword: "",
        newPassword: "",
        email: "",
        phone: "",
      },
    })
    const handleNext = () => {
      console.log('提交')
    }
    return {
      ...toRefs(state),
      handleNext
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin-top: 200px;
  position: relative;
  display: flex;
  width: 480px;
  min-width: 480px;
  height: 600px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 90px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(14, 14, 60, .08);
  &-title {
    margin-bottom: 40px;
    color: #213182;
    font-family: PingFang SC;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
  .sign-in{
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
}
.btn {
  background: #213182;
}
</style>