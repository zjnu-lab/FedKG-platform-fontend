import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: () =>
                import ("@/views/home/home.vue"),
        },
        // 用户相关
        {
            path: "/login",
            name: "login",
            component: () =>
                import ("@/views/login/login.vue"),
        },
        {
            path: "/signUp",
            name: "signUp",
            component: () =>
                import ("@/views/user/signUp.vue"),
        },
        {
            path: "/changePassword",
            name: "changePassword",
            component: () =>
                import ("@/views/user/changePassword.vue"),
        },

        // 知识图谱
        {
            path: "/knowledgeMapAdd",
            name: "knowledgeMapAdd",
            component: () =>
                import ("@/views/knowledgeMap/add.vue"),
        },
        {
            path: "/knowledgeMapSearch",
            name: "knowledgeMapSearch",
            component: () =>
                import ("@/views/knowledgeMap/search.vue"),
        },
        {
            path: "/knowledgeMapShow",
            name: "knowledgeMapShow",
            component: () =>
                import ("@/views/knowledgeMap/show.vue"),
        },

        // 实体添加
        {
            path: "/realityAdminList",
            name: "realityAdminList",
            component: () =>
                import ("@/views/reality/adminList.vue"),
        },
        {
            path: "/realityUserList",
            name: "realityUserList",
            component: () =>
                import ("@/views/reality/userList.vue"),
        },
        {
            path: "/realityPassList",
            name: "realityPassList",
            component: () =>
                import ("@/views/reality/passList.vue"),
        },
        {
            path: "/realityWaitSyncList",
            name: "realityWaitSyncList",
            component: () =>
                import ("@/views/reality/waitSyncList.vue"),
        },
        {
            path: "/realityModify",
            name: "realityModify",
            component: () =>
                import ("@/views/reality/modify.vue"),
        },
        {
            path: "/integral",
            name: "integral",
            component: () =>
                import ("@/views/integral/integral.vue"),
        },
    ],
});

// 鉴权函数
function validToken() {
    let loginToken = localStorage.getItem("token");
    // 一小时的登陆token
    return loginToken && loginToken + 3600 * 1000 > Date.now();
}

// 鉴权思路 ，不用鉴权可以把这段注释掉
// router.beforeEach((to, from) => {
//     if (!validToken() && to.name !== "login") {
//         alert("请先登录");
//         return { name: "login" };
//     }
// });

export default router;