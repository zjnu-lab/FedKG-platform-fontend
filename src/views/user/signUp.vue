<template>
  <div class="box">
    <div class="box-title">注册</div>
<!--    <div v-bind="message" v-if="showMessage"></div>-->
    <el-form :model="form" ref="formRef2" label-width="60px">
      <el-form-item label="邮箱" prop="user">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.checkbox" label="协议超链接" size="large"/>
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
import {reactive, ref, toRefs} from '@vue/reactivity'
import {useRouter} from 'vue-router'
import api from "@/utils/api";

export default {
  setup(props, ctx) {
    let message = ''
    let showMessage = false
    const router = useRouter()
    const state = reactive({
      formRef2: ref(null),
      form: {
        username: "",
        password: "",
        name: "",
        unit: "",
        phone: "",
        email: "",
        checkbox: ""
      },
    })
    const handleNext = () => {
      api.userRegister(state.form.username, state.form.password, state.form.name, state.form.unit, state.form.email, state.form.phone).then((response) => {
        router.push({
          name: 'login'
        })
      }).catch(function (error) {
        alert(error.response.data.message)
      })

    }
    return {
      message,
      showMessage,
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

  .sign-in {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
}

.btn {
  background: #213182;
}
</style>