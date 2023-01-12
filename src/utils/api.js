import axios from "axios";
import { ElMessage } from "element-plus";

axios.defaults.withCredentials = true; // 证书
axios.defaults.crossDomain = true; // 跨域
axios.defaults.timeout = 10000; // 请求10s超时

axios.interceptors.request.use(
    (req) => {
        /**
         * 请求拦截器
         * 有token 为 Bearer xxxxxxx
         * 无token 为 Bearer null
         */
        let token = `Bearer ${localStorage.getItem("token")}`;
        req.headers["Authorization"] = token;
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);
axios.interceptors.response.use(
    (res) => {
        /**
         * 响应拦截器
         * 响应状态码为401 跳转登陆
         */
        if (res.data.code === 401) {
            ElMessage({
                message: "请登录",
                type: "error",
            });
            window.location.href = "/#/login";
        }
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

class api {
    constructor() {
            this.hostUrl = "http://192.168.1.114";
        }
        //
        //登录验证
    postUser(username, password) {
        return axios.post(`${this.hostUrl}/login`, {
            username: username,
            password: password,
        });
    }

    //获取实体
    getReality(token, status = null) {
        return axios.get(`${this.hostUrl}/user/newents`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                status: status,
            },
        });
    }

    //撤销删除实体
    deleteReality(token, realityId) {
        return axios.delete(`${this.hostUrl}/user/newent`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                newentity_id: realityId,
            },
        });
    }

    //查看实体详细信息
    getRealityDetail(token, realityId) {
        return axios.get(`${this.hostUrl}/user/newent`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                newentity_id: realityId,
            },
        });
    }

    //注册
    userRegister(username, password, name, unit, email, phone = null) {
        return axios.post(`${this.hostUrl}/register`, {
            username: username,
            password: password,
            name: name,
            phone: phone,
            email: email, // unit:unit
        });
    }

    //修改密码
    changePassword(oldPassword, newPassword, token) {
        return axios.post(
            `${this.hostUrl}/userinfo`, {
                password: newPassword,
                old_password: oldPassword,
                phone: "",
                name: "",
            }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
    }

    // 上传新实体 need bearer token
    postReality(data) {
        return axios.post(`${this.hostUrl}/user/newent`, data);
    }

    // searchExistReality(token, nodeName) {
    //     return axios.get(
    //         "http://192.168.1.114/node", {
    //             node_name: nodeName,
    //         }, {
    //             headers: {
    //                 Authorization: "Bearer " + token,
    //             },
    //         }
    //     );
    // }
    searchExistReality(token, nodeName) {
        return axios.get(`${this.hostUrl}/node`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                node_name: nodeName,
            },
        });
    }

    getUserInfor(token, page){
        return axios.get(`${this.hostUrl}/userinfo`, {
            header: {
                Authorization: "Bearer " + token
            },
            params: {
                page:page
            }
        })
    }

    getPDF(){
        return axios.get(`${this.hostUrl}/protocol`)
    }
}
export default new api();