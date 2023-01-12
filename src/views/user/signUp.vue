<template>

  <el-row style="width: 80%; height: 100%">
    <el-col class="col">
      <el-steps :active="actived" finish-status="success" process-status="process" align-center>
        <el-step title="相关规定"/>
        <el-step title="协议条款"/>
        <el-step title="用户注册"/>
      </el-steps>
    </el-col>
    <el-col class="col" style="display: flex;justify-content: center; margin-top: 30px">
      <el-card style="width: 35%">
        <h1>注册</h1>
        <el-divider/>
        <el-form :model="info" label-position="right">
          <el-form-item class="item" label="邮箱" prop="user">
            <el-input v-model="info.username" class="input"/>
          </el-form-item>
          <el-form-item class="item" label="密码" prop="password">
            <el-input v-model="info.password" class="input"/>
          </el-form-item>
          <el-form-item class="item" label="姓名">
            <el-input v-model="info.name" class="input"/>
          </el-form-item>
          <el-form-item class="item" label="单位">
            <el-input v-model="info.unit" class="input"/>
          </el-form-item>
          <el-form-item class="item" label="手机号">
            <el-input v-model="info.phone" class="input"/>
          </el-form-item>
          <el-form-item class="item" label="上传协议">
            <el-upload
                ref="upload"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
            >
              <el-button type="success">选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="item">
            <el-button style="margin-left: 30%" type="primary" @click="handleNext">
              提交
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {reactive, ref, toRefs} from '@vue/reactivity'
import {useRouter} from 'vue-router'
import api from "@/utils/api";


export default {
  setup() {
    const actived = ref(2)
    const router = useRouter()

    const user = reactive({
      info: {
        username: "",
        password: "",
        name: "",
        unit: "",
        phone: "",
        email: "",
      },
    })

    const handleNext = () => {
      api.userRegister(user.info.username, user.info.password, user.info.name, user.info.unit, user.info.email, user.info.phone).then((response) => {
        router.push({
          name: 'login'
        })
      }).catch(function (error) {
        alert(error.response.data.message)
      })

    }


    return {
      actived,

      ...toRefs(user),
      handleNext
    }
  }
}
</script>
<style lang="scss" scoped>

.col {
  margin-top: 13px;
}

.input {
  width: 70%;
}

.item {
  margin-top: 40px;
  margin-left: 20%;
}
</style>