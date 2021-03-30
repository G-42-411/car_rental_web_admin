<template>
    <div class="box">
        <div class="pay-top-bar">
            <div class="top-bar-content">
                <span class="css26e0695ffb2316b title">Dream Car租车</span>
                <p class="tips">
                    <img src="../../assets/img/铃铛.png" style="width: 12px; margin-right: 4px">
                    <span style="font-size: 12px; color: #1D74E7">温馨提示</span>
                </p>
            </div>
        </div>
        <div class="pay-middle">
            <div class="pay-content">
                <div class="pay-content-left">
                    <div class="price_area">
                        订单金额
                        <p style="font-size: 32px; color: #FF8C18; margin: 0 0 -4px 4px">
                            <span style="font-size: 14px">￥</span><span style="font-style: italic">829.00</span>
                        </p>
                    </div>
                </div>
                <div class="pay-content-right"></div>
                <span class="semicircle"></span>
            </div>

            <div class="pay-content-info">
                <p class="info-img"></p>
                <span style="font-size: 14px">点击“去支付”后，将跳转到支付宝页面进行付款</span><br>
                <button class="to-pay">
                    <p style="font-size: 20px">
                        <span style="font-size: 14px">￥</span><span style="font-style: italic">829.00，</span>去支付
                    </p>
                </button>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .box {
        height: 100vh;
        background: url(//pic.c-ctrip.com/picaresonline/fncpaymentonline/cnres/img/bg_img.ae384499.png) left top repeat-x #F4F8FB;
    }

    .pay-top-bar {
        background-color: #ffffff;
        border-bottom: solid 3px #1270B7;
    }

    .top-bar-content {
        height: 78px;
        width: 980px;
        margin: auto;
        display: flex;
        position: relative;
        align-items: center;
    }

    .top-bar-content > p {
        display: flex;
        align-items: center;
    }

    .title {
        color: #1D74E7;
        font-size: 32px;
    }

    .tips {
        position: absolute;
        right: 0;
        top: 55%;
        cursor: pointer;
    }

    .pay-middle {
        width: 980px;
        margin: 10px auto 0 auto;
        display: flex;
        flex-direction: column;
    }

    .pay-content {
        width: 100%;
        display: flex;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 1px 2px 20px rgb(106 158 209 / 34%);
    }

    .pay-content-left {
        height: 110px;
        flex: 1;
        background-color: #F4F7FE;
    }

    .pay-content-right {
        height: 110px;
        flex: 2;
        background-color: #F9FDFF;
    }

    .semicircle{
        width: 11px;
        height: 5px;
        background-color: #DBE4F0;
        border-radius: 0 0 11px 11px;
        position: absolute;
        top: 0;
        left: 32.7%;
    }
    .pay-content-info{
        width: 100%;
        padding: 0 40px 40px;
        background-color: #FFFFFF;
        margin-top: 10px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 1px 2px 20px rgb(106 158 209 / 34%);
    }
    .info-img{
        height: 250px;
        background: url(//pic.c-ctrip.com/picaresonline/fncpaymentonline/cnres/img/alipay.c8df5497.png) center bottom no-repeat;
    }
    .to-pay{
        margin-top: 65px;
        width: 360px;
        height: 48px;
        border: none;
        outline:none;
        background-color: #FFA535;
        color: #ffffff;
        background-image: linear-gradient(
                89deg
                , #FFA839 0%, #FF8C18 100%);
        box-shadow: 0 5px 10px 0 rgb(255 141 25 / 38%);
        border-radius: 4px;
        overflow: hidden;
    }
    .price_area{
        height: 67px;
        padding: 22px 20px 20px 20px;
        display: flex;
        align-items: flex-end;
        font-size: 14px;
        color: #333333;
    }
</style>
