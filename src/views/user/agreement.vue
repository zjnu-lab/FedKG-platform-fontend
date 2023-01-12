<template>
  <el-row style="width: 80%; height: 100%">
    <el-col class="col">
      <el-steps :active="actived" finish-status="success" align-center>
        <el-step title="相关规定"/>
        <el-step title="协议条款"/>
        <el-step title="用户注册"/>
      </el-steps>
    </el-col>
    <el-col class="demo-image__lazy col">
      <el-image v-for="url in urls.data" :key="url" :src="url" :preview-src-list="urls.data" class="img"/>
    </el-col>
    <el-col class="col">
      <input type="checkbox" v-model="checked">
      <label class="front">阅读并接受</label>
      <a target="_blank" href="" class="a">《浙师大用户协议》</a>、
      <a target="_blank" href="" class="a">《浙师大账号服务条款》</a>及
      <a target="_blank" href="" class="a">《浙师大隐私保护声明》</a>
    </el-col>
    <el-col class="col">
      <el-button type="primary" @click="confirm">确认</el-button>
    </el-col>
  </el-row>
</template>

<script>
import {reactive, ref} from "@vue/reactivity";
import {ElMessage} from "element-plus";
import {h} from "vue";
import {useRouter} from 'vue-router'

export default {
  name: "agreement",
  setup() {
    const router = useRouter()
    const checked = ref(false)
    const actived = ref(0)
    //显示协议条例图片
    const urls = reactive({
      data: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ]
    })

    //按钮点击确认事件，进行页面跳转
    const confirm = () => {
      console.log(checked.value)
      if (checked.value) {
        router.push({
          name: 'compactDownload',
        })
      } else {
        ElMessage({
          message: h('error', {style: 'color: red'}, "请阅读并接受相关条例")
        })
      }
    }
    return {
      actived,
      checked,
      urls,
      confirm
    }
  }
}
</script>

<style scoped>
.col {
  margin-top: 10px;
}
.demo-image__lazy {
  height: 700px;
  overflow-y: auto;
}

.demo-image__lazy .img {
  display: block;
  min-height: 300px;
}

.front {
  height: 16px;
  width: 14px;
  text-align: center;
}

.a {
  color: #2e58ff;
  text-decoration: none;
}
</style>