<template>
    <div class="box">
        <div class="content-container">
            <div class="left">
                <div class="booking-item">
                    <div class="img-box">
                        <img src="//pic.c-ctrip.com/car/osd/mobile/vehimg/vehcrn/Honda-Accord.jpg">
                    </div>
                    <div class="item-content">
                        <p class="details-middle-info">
                            <img src="../../assets/img/A.png">
                            <span>自动挡</span>
                            <img src="../../assets/img/座位安排.png">
                            <span>5座</span>
                            <img src="../../assets/img/车门.png">
                            <span>4门</span>
                        </p>
                        <span style="margin-bottom: 18px">
                            后排空间较为宽敞，建议乘坐4人+2行李箱
                        </span>
                        <div class="get-car">
                            <img src="../../assets/img/取.png" style="width: 22px;height: 22px; margin-right: 10px">
                            <div class="address">
                                <p style="margin-bottom: 5px">
                                    <span>2021-3-10</span>
                                    <span>星期一</span>
                                    <span>10:00</span>
                                </p>
                                <span style="font-size: 12px">
                                    陕西省.咸阳市.长武县.昭仁镇.新都会
                                </span>
                            </div>
                            <p class="booking-order-edit">修改</p>
                        </div>
                        <div class="get-car">
                            <img src="../../assets/img/还.png" style="width: 22px;height: 22px; margin-right: 10px">
                            <div class="address">
                                <p style="margin-bottom: 5px">
                                    <span>2021-3-10</span>
                                    <span>星期一</span>
                                    <span>10:00</span>
                                </p>
                                <span style="font-size: 12px">
                                    陕西省.西安市.高新区.南窑头分店
                                </span>
                            </div>
                        </div>
                        <div class="order-demand">
                            <div class="storefront-top">
                                <img src="//pic.c-ctrip.com/car/osd/ctrip/vendor_logo/nzirental.png"
                                     style="width: 60px; height: 36px">
                                <span class="img-description">当地连锁</span>
                                <span style="font-size: 18px; color: #ff4646">很好&nbsp;4.3&nbsp;分</span>
                                <span class="watch-comment a-to">查看点评</span>
                            </div>
                            <div class="get-car-info">
                                <h3 style="font-weight: 700">还取车信息</h3>
                                <span class="a-to">门店详情</span>
                            </div>
                            <div class="get-car-info-two">
                                <span class="cus-box">取还车</span>
                                <p style="margin-left: 10px">
                                    <span style="margin-bottom: 5px">抵达后联系工作人员前来接送</span>
                                    <span>营业时间: &nbsp;&nbsp;7:00-22:00</span>
                                </p>
                            </div>
                            <h3 style="font-weight: 700; margin-bottom: 11px">证件要求</h3>
                            <span>请携带本人身份证和驾驶证</span>
                            <span style="font-size: 12px; color: #999999; margin-top: 10px">*严禁未成年人租车</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h1 style="margin-bottom: 20px">兰博基尼&nbsp;Urus</h1>

                <div class="user-info-item">
                    <span class="black-font total-price" style="flex: 0 0 64px;">人员信息</span>
                    <div class="user-info-content">
                        <div class="user-info-top">
                            <p><a-icon type="exclamation-circle" style="margin-right: 7px"/>驾驶员姓名需和护照保持一致，驾龄至少满1年。</p>
                        </div>
                        <div class="user-info-input">
                            <div class="user-info-input-len">
                                <div class="input-box">
                                    <input type="text" required>
                                    <span>姓名</span>
                                </div>
                                <div class="input-box">
                                    <input type="text" required>
                                    <span>性别</span>
                                </div>
                                <div class="input-box">
                                    <input type="text" required>
                                    <span>年龄</span>
                                </div>
                                <div class="input-box">
                                    <input type="text" required>
                                    <span>联系电话</span>
                                </div>
                                <div class="input-box" style="width: 220px;">
                                    <input type="text" required style="width: 220px">
                                    <span>Emain</span>
                                </div>
                            </div>
                            <span class="a-to cus-user-info">使用个人身份信息</span>
                        </div>
                    </div>
                </div>

                <div class="select-price">
                    <span class="black-font total-price">附加产品</span>
                    <ul>
                        <a-popover placement="right">
                            <template slot="content">
                                <p style="font-size: 12px;color: #333333">租期内没有公里数限制</p>
                            </template>
                            <li class="augmented-product">不限里程</li>
                        </a-popover>

                    </ul>
                </div>
                <div class="select-price">
                    <span class="black-font total-price">支付方式</span>
                    <ul>
                        <li class="augmented-product">在线付全额</li>
                    </ul>
                </div>
                <div class="select-price-item">
                    <div class="select-price price-item">
                        <span class="black-font total-price">燃油说明</span>
                        <a-popover placement="right">
                            <template slot="content">
                                <p style="font-size: 12px;display: inline-block; width: 200px; color: #333333">取车时油箱已满，还车时也得把油箱加满，否则租车公司将会收取未加满部分的燃油费用以及工作人员去加油的工时费。在某些特殊情况下您取车时的油箱可能是不满的，您还车时只要保证油量和取车时—致即可。请保留最后一次加油时的单据以及取还车时显示的车辆总里程和油量表的照片以备用。</p>
                            </template>
                            <span style="border-bottom: dashed 1px #666; padding-bottom: 1px; color: #666">满油取还</span>
                        </a-popover>
                    </div>
                    <div class="select-price price-item">
                        <span class="black-font total-price">里程说明</span>
                        <a-popover placement="right">
                            <template slot="content">
                                <p style="font-size: 12px;display: inline-block; width: 200px; color: #333333">租期内内有公里数限制</p>
                            </template>
                            <span style="border-bottom: dashed 1px #666; padding-bottom: 1px; color: #666">不限里程</span>
                        </a-popover>
                    </div>
                    <div class="select-price price-item">
                        <span class="black-font total-price">取消规则</span>
                        <a-popover placement="right">
                            <template slot="content">
                                <p style="font-size: 12px;display: inline-block; width: 200px; color: #333333">取车时间前24小时可免费取消</p>
                            </template>
                            <span style="border-bottom: dashed 1px #666; padding-bottom: 1px; color: #666">限时取消</span>
                        </a-popover>
                    </div>
                    <div class="select-price price-item">
                        <span class="black-font total-price">确认规则</span>
                        <a-popover placement="right">
                            <template slot="content">
                                <p style="font-size: 12px;display: inline-block; width: 200px; color: #333333">预定此产品后将立即确认订单并在取车时间为您安排好车辆</p>
                            </template>
                            <span style="border-bottom: dashed 1px #666; padding-bottom: 1px; color: #666">立即确认</span>
                        </a-popover>
                    </div>
                </div>

                <div class="select-price" style="margin-top: 10px">
                    <span class="black-font total-price" style="padding-top: 5px">总价</span>
                    <p style="color: #FF6913">
                        ￥<span style="font-size: 28px;margin-right: 10px">812</span>
                        <span style="color: black">(7日租金,&nbsp;日均￥116)</span>
                    </p>
                </div>
                <div class="pay-order">
                        <a-checkbox @change="" style="margin-right: 20px">
                            已阅读并同意<a class="a-to">订单预定须知</a>条款
                        </a-checkbox>
                    <a-button type="primary">提交订单</a-button>
                </div>
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
        width: 100%;
        font-size: 14px;
    }

    .content-container {
        display: flex;
        width: 1100px;
        margin: 30px auto 20px auto;
    }

    .left {
        display: flex;
        flex-direction: column;
        width: 365px;
        /*border: solid 1px red;*/
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .right {
        padding: 30px 30px 20px 30px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        width: 725px;
        /*border: solid 1px blue;*/
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        text-align: left;
    }

    .img-box > img {
        width: 100%;
    }

    .item-content {
        padding: 18px 30px 20px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .details-middle-info {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        height: 14px;
    }

    .details-middle-info > span {
        margin-right: 10px;
        line-height: 14px;
    }

    .details-middle-info img {
        width: 17px;
        margin-right: 5px;
    }

    .get-car {
        display: flex;
        position: relative;
        margin-bottom: 15px;
    }

    .booking-order-edit {
        position: absolute;
        top: 0;
        right: 0;
        color: #1D74E7;
    }

    .booking-order-edit:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .order-demand {
        margin-top: 13px;
        padding: 28px 0 1px;
        display: flex;
        flex-direction: column;
        border-top: solid 1px #e6e6e6;
    }

    .storefront-top {
        display: flex;
        align-items: center;
        position: relative;
    }

    .img-description {
        height: 36px;
        padding: 0 8px;
        background-color: #F5F6F8;
        color: #7f8aa4;
        line-height: 36px;
        margin-right: 10px;
    }

    .a-to{
        color: #1D74E7;
    }

    .a-to:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    .watch-comment {
        position: absolute;
        right: 0;
        top: 50%;
        transform:translate(0%,-50%);
    }
    .get-car-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0 10px;
    }
    .get-car-info-two{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 0 10px;
        margin-bottom: 10px;
    }
    .get-car-info-two span{
        display: inline-block;
    }

    .cus-box{
        font-size: 12px;
        padding: 3px 2px 3px 3px;
        color: #7f8aa4;
        border: 1px solid #7f8aa4;
        border-radius: 2px;
        box-sizing: border-box;
        width: 53px;
    }
    .select-price{
        display: flex;
        align-items: center;
        /*margin: 14px 0;*/
        margin-bottom: 10px;
    }
    .black-font{
        font-size: 16px;
        font-weight: 700;
    }
    .total-price{
        display: inline-block;
        width: 65px;
        text-align: right;
        margin-right: 20px;
    }
    .augmented-product{
        display: inline-block;
        width: 145px;
        height: 36px;
        line-height: 34px;
        text-align: center;
        border: solid 2px #1D74E7;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OURCNzhENzE5NDRFMTFFN0EwNTQ5MDk2Qzg1MTQ2RDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OURCNzhENzI5NDRFMTFFN0EwNTQ5MDk2Qzg1MTQ2RDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5REI3OEQ2Rjk0NEUxMUU3QTA1NDkwOTZDODUxNDZEMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5REI3OEQ3MDk0NEUxMUU3QTA1NDkwOTZDODUxNDZEMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PszWIQ4AAAFVSURBVHjaYlQtf8xAQ+DBQkPD64HYkYmGhjeAGEy0NJwWFqAYTm0LMAynpgVYDaeWBTgNp4YFeA2n1AKChlNiAVGGk2sB0YaTYwFJhpNqAdGGT4oWYrjaKgNms1Db8N4IIQYPXS6GxLmvifYBiuEKorjd1B4qyOBjwMWQtfgtw9HbP4myoAHZcFZmRoZdxRIM/oZcGAobAwQYgoy4GYqXv2PYc/U7UXHQAHU9HPz++59h4u5PDN3hQgyWyuxw8WpffoYIcx6G6rXvGbZc/IZiCAuxhsPA1L2fGGSEWBjmJYswBE99BQxvToZYK16Gls0fGNae/YqhnoUUw2GgcvU7BjE+EYYVGWIMbCyMDH07PjIsPf6F4f9/wsmUoOEwkDrvDcOZBz8ZJu/5xDDn0GeGf/+xq2Mhx3AQABmYNPcN0RmNJMNJASAfOAGxBRDvpIH5lwECDAAY115g4C1yggAAAABJRU5ErkJggg==);
        background-size: 24px;
        background-position: right bottom;
        background-repeat: no-repeat;
    }
    .user-info-item{
        display: flex;
        margin-bottom: 10px;
    }
    .user-info-content{
        border: 1px solid #e6e6e6;
    }
    .user-info-top{
        font-size: 12px;
        padding: 7px 30px ;
        border-bottom: solid 1px #e6e6e6;
    }
    .user-info-input{
        padding: 10px 30px 0 30px;
        position: relative;
    }
    .input-box{
        position: relative;
        width: 140px;
        cursor: pointer;
        margin-right: 15px;
        margin-bottom: 15px;
    }
    .input-box > input{
        border-bottom: solid 1px #e6e6e6;
        padding: 11px 0 5px;
        width: 140px;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        font-weight: 700;
    }

    .input-box> input:focus{
        border-bottom: solid 1px #1D74E7;
    }
    .input-box> input:focus ~ span,
    .input-box> input:valid ~ span{
        transform: translate(0,0);
        top: -5px;
        left: 0;
        font-size: 13px;
        color: #999999;
    }
    .input-box > span{
        display: block;
        position: absolute;
        color: #ccc;
        font-size: 16px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .user-info-input-len{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
    }
    .cus-user-info{
        position: absolute;
        bottom: 15px;
        right: 30px;
    }
    .pay-order{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .select-price-item{
        display: flex;
        flex-wrap: wrap;
    }
    .price-item{
        flex: 0 0 48%;
        box-sizing: border-box;

        margin: 10px 0;
    }
    .price-item:nth-child(2n-1){
        border-right: 1px solid #e6e6e6;
        margin-right: 10px;
    }
</style>
