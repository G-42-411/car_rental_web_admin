<template>
    <div class="box">
        <div class="top">
            <div class="logo">
                让旅行更幸福
            </div>
            <div class="options" style="font-size: 14px">
                <a @click="toHome">首页</a>
                <a href="#rental-map">营业门店</a>
                <a href="#comment-box">用户体验</a>
                <a href="#about-me-box">关于我们</a>
            </div>

            <div v-if="false" class="sign">
                <span>您好,请登录</span>
                <span>&nbsp|&nbsp</span>
                <span>免费注册</span>
            </div>
            <div v-else class="sign">
                <span>欢迎,{{userInfo.user.name}}</span>
                <span>&nbsp|&nbsp</span>
                <span>个人中心</span>
                <span>&nbsp|&nbsp</span>
                <span>退出</span>
            </div>
        </div>
        <div class="buttom">
            <span>欢迎使用Dream Car租车平台，祝您用车愉快！</span>
            <a><a-icon type="car" :style="{ fontSize: '16px', color: '#B9D8FF' }"/>&nbsp;&nbsp;用车订单&nbsp;></a>
        </div>
    </div>
</template>

<script>
    import {getUserInfo} from '@/api/api'
    export default {
        name: "index",
        data() {
            return {
                userInfo:{
                    user:{
                        name:''
                    }
                }
            }
        },
        methods: {
            loadUserInfo(){
                getUserInfo().then(res => {
                    if (res.status === 200){
                        this.$store.commit('setUserInfo', res.data);
                        this.userInfo = res.data
                    }
                })
            },
            toHome(){
                this.$router.push({path:'/home'})
            }
        },
        mounted() {
            this.loadUserInfo()
        }
    }
</script>

<style scoped>


    .top {
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2577E3;
        color: white;
        font-size: 13px;
    }

    .logo{
        margin-left: 20px;
    }

    .options a{
        display: inline-block;
        margin: 0 10px;
        color: white;
        font-size: 14px;
    }

    .sign{
        margin-right: 20px;
    }
    .buttom {
        background-color: white;
        width: 1100px;
        height: 37px;
        border: solid 1px #2577E3;
        border-top: none;
        margin: auto;
        font-size: 14px;
        line-height: 37px;
        position: relative;
    }

    .buttom > a {
        display: inline-block;
        position: absolute;
        right: 15px;
    }

</style>
