<template>
  <div class="box">
    <div class="box-title">登录</div>
    <el-form :model="form" ref="formRef2" label-width="60px">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="user.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"/>
      </el-form-item>
      <!--      <el-form-item label="验证码">-->
      <!--        <el-input v-model="form.verify"></el-input>-->
      <!--      </el-form-item>-->
    </el-form>
    <div class="box-footer">
      <el-button
          class="btn"
          type="info"
          @click="handleNext"
      >
        登录
      </el-button>
    </div>
    <div class="sign-in">
      <el-button class="btn" type="info" @click="handleSignUp">注册</el-button>
    </div>
  </div>
</template>
<script>
import {reactive, ref, toRefs} from '@vue/reactivity'
import {useRouter} from 'vue-router'
import api from '../../utils/api'
import {userStore} from "../../store/user";

export default {
  setup(props, ctx) {
    const router = useRouter()
    const state = reactive({
      formRef2: ref(null),
      user: {
        username: "",
        password: "",
        // verify: "",
      },
    })
    const user = userStore()
    const handleNext = () => {
      //  应该跟后端配合，保留一个加密的token登陆, 在发请求和路由跳转 或某些需要登陆后才能使用的功能 鉴定该token
      api.postUser(state.user.username, state.user.password).then(response => {
        user.$patch({
          userId: response.data.data.user_id,
          userRole: response.data.data.user_role,
          token: response.data.data.token,
        })
        localStorage.setItem('token', response.data.data.token)
        router.push({
          name: 'home'
        })
      }).catch(function (error) {
        alert(error.response.data.message)
      })

    }
    const handleSignUp = () => {
      router.push({
        name: 'signUp'
      })
    }
    return {
      ...toRefs(state),
      handleNext,
      handleSignUp
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
  height: 430px;
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