<template>
    <div class="box">
        <div class="hd-cont">
            <span class="css26e0695ffb2316b title">Dream Car租车</span>
            <p class="tips" style="font-size: 12px;">
                <span style="color: #1D74E7;display: inline-block;padding-right: 10px; margin-right: 10px; border-right: solid 1px #bbb">尊敬的会员</span>
                客服中心
            </p>
        </div>
        <div class="pwd-body">
            <div class="input-len">
                <p>当前密码</p>
                <a-input-password class="input-ant" placeholder="当前登录密码"/>
            </div>
            <div class="input-len">
                <p>新密码</p>
                <a-input-password class="input-ant" placeholder="8-20位字母、数字和符号"/>
                <ul class="box_pas_safety">
                    <li>强</li>
                    <li>中</li>
                    <li>弱</li>
                </ul>
            </div>
            <div class="input-len">
                <p>确认新密码</p>
                <a-input-password class="input-ant" placeholder="再次输入新密码"/>
            </div>
            <a-button class="finish" type="primary">完成</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

    .title{
        color: #1D74E7;
        font-size: 32px;
        border-right: solid 1px #bbb;
        padding-right: 10px;
    }

    .hd-cont{
        height: 59px;
        width: 1024px;
        margin: 0 auto;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
    }
    .pwd-body{
        width: 1020px;
        padding: 70px 10px 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
    }
    .input-len{
        display: flex;
        margin: 7px 0;
        align-items: center;
    }
    .input-len > p{
        display: inline-block;
        width: 130px;
        text-align: right;
        height: 36px;
        line-height: 36px;
        margin-right: 10px;
    }
    .input-ant{
        width: 310px;
    }
    .box_pas_safety{
        display: flex;
    }
    .box_pas_safety>li{
        width: 45px;
        height: 26px;
        line-height: 26px;
        color: white;
        background-color: #F1D0B9;
        text-align: center;
        font-size: 12px;
        margin-left: 1px;
    }
    .box_pas_safety>li:nth-child(1){
        margin-left: 10px;
    }

    .finish{
        width: 220px;
        height: 42px;
        margin:8px 0 0 140px;
    }
</style>
