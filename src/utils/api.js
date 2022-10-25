import axios from "axios"

class api {
    //登录验证
    postUser(username, password){
        return axios.post("http://192.168.1.114/login", {
            username: username,
            password: password
        })
    }
    //获取已通过实体信息
    getPassReality() {
        return axios.get("http://localhost:3000/passRealities")
    }

    //获取用户添加实体
    getUserReality(userId){
        return axios.get()
    }


}

export default new api();