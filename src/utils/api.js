import axios from "axios";

class api {
    constructor() {
            this.hostUrl = "http://192.168.1.114";
        }
        //
        //登录验证
    postUser(username, password) {
        return axios.post("http://192.168.1.114/login", {
            username: username,
            password: password,
        });
    }

    //获取实体
    getReality(token, status) {
        return axios.get("http://192.168.1.114/user/newents", {
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
        return axios.delete("http://192.168.1.114/user/newent", {
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
        return axios.get("http://192.168.1.114/user/newent", {
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
        return axios.post("http://192.168.1.114/register", {
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
            "http://192.168.1.114/userinfo", {
                password: newPassword,
                old_password: oldPassword,
                phone: "",
                name: "",
            }, { headers: { Authorization: "Bearer " + token } }
        );
    }

    // 上传新实体 need bearer token
    postReality(data) {
        return axios.post(`${this.hostUrl}/user/newent`, data);
    }
}

export default new api();