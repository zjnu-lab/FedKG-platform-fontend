<template>
  <el-row style="width: 80%; height: 100%">
    <el-col class="col">
      <el-steps :active="actived" finish-status="success" process-status="process" align-center>
        <el-step title="相关规定"/>
        <el-step title="协议条款"/>
        <el-step title="用户注册"/>
      </el-steps>
    </el-col>
    <el-col class="col">
      <el-dialog v-model="dialogVisible" title="提示" width="30%" center>
        <span style="text-align: center">注册需要上传已经签好的协议，您是否已经下载好当前页面的协议文件？</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">否</el-button>
            <el-button type="primary" @click="handleNext">
              是
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-col>
    <el-col class="col">
      <iframe :src="src" height="700px" width="80%"/>
    </el-col>
    <el-col class="col">
      <el-button type="primary" @click="dialogVisible = true">确认</el-button>
    </el-col>
  </el-row>
</template>

<script>
import {useRouter} from "vue-router";
import {ref} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import api from "@/utils/api";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
  name: "compactDownload",
  setup() {
    const router = useRouter()
    const src = ref("")
    const actived = ref(1)
    const dialogVisible = ref(false)

    const handleNext = () => {
      dialogVisible.value = false
      router.push({
        name: 'signUp'
      })
    }

    onMounted(() => {
      api.getPDF().then((response)=>{
        src.value = response.data.data.protocol_text[0]
      }).catch((error)=>{
        ElMessage({
          message: h('error', {style: 'color: red'}, error.message)
        })
        router.push({
        name: 'home'
      })
      })
    })
    return {
      src,
      actived,
      dialogVisible,
      handleNext
    }
  }
}
</script>

<style scoped>
.col {
  margin-top: 5px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>