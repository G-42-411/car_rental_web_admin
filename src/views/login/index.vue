<template>
    <div class="container">
        <span class="title css26e0695ffb2316b">
            Dream Car 租车
        </span>
        <div class="tips-security">
            <a-icon type="info-circle" :style="{color: '#FFAF26', fontSize: '13px'}"/>
            依据《网络安全法》，为保障您相关功能的正常使用，账号需绑定手机，如您未绑定则登陆后会引导您操作绑定。新版《隐私政策》已上线，感谢您的支持。
        </div>
        <div class="bg-img">
            <div class="login-box">
                <h3 style="text-align: left; margin-bottom: 20px; font-size: 18px">DreamCar账号登录</h3>

                <div class="login-item">
                    <a-input class="login-input" placeholder="登录账号" v-model="loginInfo.username"/>
                </div>
                <div class="login-item">
                    <input class="login-input input-pwd" type="password" maxlength="20" placeholder="登录密码" v-model="loginInfo.password"/>
                    <span class="password-span">忘记密码</span>
                </div>
                <div class="check-box">
                    <a-checkbox @change="" style="font-size: 12px;" name="rememberMe" v-model="loginInfo.rememberMe">
                        30天内自动登录
                    </a-checkbox>
                </div>

                <a-button type="primary" style="width: 100%; height: 42px" @click="toLogin">登录</a-button>
                <p style="display: inline-block; color: #999;font-size: 12px; margin: 15px 0;">
                    登录即代表您同意我们的 &nbsp;
                    <a>服务协议</a>
                    &nbsp;和&nbsp;
                    <a>隐私政策</a>
                </p><br>
                <div class="sign-up">
                    <span>以下登录方式暂未开放</span>
                    <a>免费注册</a>
                </div>
                <div class="login-mode">
                    <a-icon type="alipay-circle" :style="{ fontSize: '27px', color: '#46C1F3' }"/>
                    <a-icon type="qq" :style="{ fontSize: '27px', color: '#72B5F7' }"/>
                    <a-icon type="weibo-circle" :style="{ fontSize: '27px', color: '#EF717F' }"/>
                    <a-icon type="wechat" :style="{ fontSize: '27px', color: '#57C35E' }"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import utils from "@/utils/utils";
    import {login} from '@/api/api';
    import Cookie from 'js-cookie'
    export default {
        name: "index",
        data(){
            return{
                loginInfo:{
                    username: '',
                    password: '',
                    rememberMe: true
                }
            }
        },
        methods:{
            toLogin(){
                let qs = require('qs');
                let params = qs.stringify(this.loginInfo);
                const inFifteenMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);
                login(params).then(res => {
                    if (res.status === 200){
                        let token = res.data.token;
                        Cookie.set('token', token, {expires: inFifteenMinutes});
                        this.$router.push({path: '/home'})
                    }
                })
            }
        },

    }
</script>

<style scoped>
    .container {
        height: 100vh;
    }

    .title {
        /*font-family: 'SourceHanSerif-26e05c869d2316b';*/
        width: 100%;
        padding: 30px 0 30px 250px;
        font-size: 30px;
        color: #1D74E7;
        display: inline-block;
        text-align: left;
        font-weight: 900;
    }
    .bg-img{
        width: 100%;
        height: 540px;
        background-image: url("../../assets/img/login_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
    }

    .login-box{
        position: absolute;
        width: 380px;
        height: 420px;
        top: 50px;
        right: 370px;
        background: #fff;
        padding: 30px 30px 20px;
        min-height: 370px;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0 0 0 0.1);
    }
    .login-item{
        /*padding: 5px 5px 5px 13px;*/
        /*padding: 8px 0;*/
        box-sizing: border-box;
        height: 38px;
        width: 100%;
        font-size: 14px;
        margin-top: 15px;
        position: relative;
    }
    .login-item> input,
    .login-item> span > input
    {
        height: 38px;
        width: 100%;
        padding: 5px 5px 5px 13px;
    }
    .password-span{
        font-size: 13px;
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .check-box{
        margin: 15px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .sign-up{
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: right;
        font-size: 12px;
        margin: 40px 0 20px 0;
    }
    .sign-up > a{
        color: #1D74E7;
    }
    .sign-up > a:hover{
        text-decoration: underline;
    }

    .login-mode{
        display: flex;
        justify-content: flex-start;
    }
    .login-mode > *{
        margin-right: 15px;
    }

    .tips-security{
        width: 100%;
        padding: 7px 0;
        margin-top: -10px;
        line-height: 16px;
        background: #FFFCD8;
        font-family: 'Microsoft yahei';
        font-size: 12px;
        color: #666;
        text-align: center;
        vertical-align: middle;
    }
    .input-pwd{
        box-sizing: border-box;
        margin: 0;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        display: inline-block;
        width: 100%;
        height: 38px;
        padding: 4px 11px;
        color: rgba(0,0,0,.65);
        font-size: 14px;
        line-height: 1.5;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all .3s;
        outline: none;
    }
    .input-pwd::-webkit-input-placeholder {
        color: #BFBFBF;
    }

</style>
