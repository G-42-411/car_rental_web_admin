<template>
    <div class="box">
        <div class="user-left">
            <div class="options-list" ref="optionsList">
                <span @click="selectOpt(0)">订单</span>
                <span @click="selectOpt(1)">我的信息</span>
                <span @click="selectOpt(2)">账户安全</span>
            </div>
        </div>
        <div class="user-right">
<!--            <div class="order-content disable" :class="[contentIndex === 0 ? 'order-content' : 'disable']">-->
            <div :class="[contentIndex === 0 ? 'order-content' : 'disable']">
                <div class="tips">
                    <p>
                        <a-icon type="info-circle" :style="{color: '#56A2ED', fontSize: '12px'}"/>
                        <span style="font-size: 12px; margin-left: 5px">您可以在线查看近一年订单，如需查找更久之前的订单，请致电63501</span>
                    </p>
                    <p class="download-file">
                        <img src="../../assets/img/文件下载.png" style="width: 15px;">
                        <span style="font-size: 12px; margin-left: 5px; color: #1D74E7">下载全部列表</span>
                    </p>
                </div>
                <div class="ul-list">
                    <div class="selective" ref="selective">
                        <a href="###" @click="changeSelect(0)" class="selective-active">全部订单</a>
                        <a href="###" @click="changeSelect(1)">未出行</a>
                        <a href="###" @click="changeSelect(2)">待支付</a>
                        <a href="###" @click="changeSelect(3)">待点评</a>
                    </div>
                </div>
                <div class="selected-options">
                    <div class="input-len">
                        <label for="orderId">订单号</label>
                        <a-input id="orderId" style="width: 120px"></a-input>
                    </div>
                    <div class="input-len">
                        <label for="user">旅客</label>
                        <a-input id="user" style="width: 120px"></a-input>
                    </div>
                    <div class="input-len">
                        <label for="orderTime">开始时间</label>
                        <a-range-picker id="orderTime" @change="" style="width: 210px"/>
                    </div>
                    <div class="input-len">
                        <a-select default-value="lucy" style="width: 100px" @change="">
                            <a-select-option value="jack">
                                Jack
                            </a-select-option>
                            <a-select-option value="lucy">
                                Lucy
                            </a-select-option>
                            <a-select-option value="disabled" disabled>
                                Disabled
                            </a-select-option>
                            <a-select-option value="Yiminghe">
                                yiminghe
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="input-len">
                        <a-button type="primary">查询</a-button>
                    </div>
                    <div class="input-len">
                        <span class="clear-info">清空查询条件</span>
                    </div>
                </div>
                <div class="order-details-list">
                    <div class="list-item">
                        <div class="item-top">
                            <a-checkbox @change="" style="margin: 2px 3px 0 0">
                            </a-checkbox>
                            <p>
                                订单号:&nbsp;<span>14635602241</span>
                            </p>
                            <p>
                                预定日期:&nbsp;2021-03-23
                            </p>
                            <p class="blue-a">
                                删除订单
                            </p>
                        </div>
                        <div class="item-bottom">
                            <div class="item-bottom-left">
                                <span style="font-size: 16px; font-weight: 700; line-height: 20px">兰博基尼 Urus</span>
                                <span>取车地点: 2021-03-29 17 Montgomerie Rd,Mangere, Auckland 2022</span>
                                <span>还车地点: 2021-04-05 17 Montgomerie Rd,Mangere, Auckland 2022</span>
                                <span>车型: SUV</span>
                            </div>
                            <div class="item-bottom-right">
                                <p>
                                    <span class="item-price">￥829</span>
                                    <span style="color: #666">已取消</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="all-select">
                        <label for="select" style="margin: 0 20px 0 10px">
                            <a-checkbox @change="" id="select">
                            </a-checkbox>
                            全选
                        </label>
                        <p class="download-file">
                            <img src="../../assets/img/文件下载.png" style="width: 15px;">
                            <span style="font-size: 12px; margin-left: 5px; color: #1D74E7">下载</span>
                        </p>
                    </div>
                    <div class="pagination">
                        <a-pagination size="small" :total="50" show-less-items/>
                    </div>
                </div>
            </div>

            <div :class="[contentIndex === 1 ? 'userInfo-content' : 'disable']">
                <div class="setUserInfo">
                    <div class="userInfo-top">
                        <span>个人信息设置</span>
                        <p>
                            收起
                            <img src="../../assets/img/收起.png">
                        </p>
                    </div>
                    <div class="userInfo-top-two disable">
                        <span>个人信息设置</span>
                        <p>
                            编辑
                            <img src="../../assets/img/打开.png">
                        </p>
                    </div>
                    <div class="userInfo-body">
                        <div class="body-left">
                            <div class="input-len">
                                <p>姓名</p>
                                <a-input style="width: 200px"/>
                            </div>
                            <div class="input-len">
                                <p>性别</p>
                                <div style="width: 200px; text-align: left">
                                    <a-radio-group @change="">
                                        <a-radio :value="1">
                                            男
                                        </a-radio>
                                        <a-radio :value="2">
                                            女
                                        </a-radio>
                                    </a-radio-group>
                                </div>
                            </div>
                            <div class="input-len">
                                <p>年龄</p>
                                <a-input style="width: 200px"/>
                            </div>

                            <div class="input-len">
                                <p>手机</p>
                                <a-input style="width: 200px"/>
                            </div>
                            <div class="input-len">
                                <p>邮箱</p>
                                <a-input style="width: 200px"/>
                            </div>
                            <div class="input-len">
                                <p>地址</p>
                                <a-input style="width: 200px"/>
                            </div>
                            <div class="input-len">
                                <p>身份证号码 </p>
                                <a-input style="width: 200px"/>
                            </div>


                        </div>
                        <div class="body-right">

                            <div class="body-right-content">
                                <p class="right-tips" style="margin-top: 8px">
                                    <span style="padding-right: 20px">头像</span>
                                    <a-button style="width: 87px">上传图片</a-button>
                                </p>

                                <div class="pre-show-img" style="margin: 10px 0 0 44px">
                                    <img src="//pic.c-ctrip.com/platform/online/my/user/upload_bg.jpg">
                                </div>
                                <span style="display:inline-block;margin: 5px 0 0 44px">仅支持jpg,gif,png格式图片，且文件小于2M。</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="security-content":class="[contentIndex === 2 ? 'security-content' : 'disable']" >
                <div class="safety-box">
                    <div class="safety-item safety-item_title">
                        <img src="../../assets/img/对勾.png" style="width: 24px">登录密码
                    </div>
                    <div class="safety-item safety-item_info">
                        建议定期更换 <!--<span class="icon-safe-m">中</span>--><!-- <span class="icon-safe-h">高</span><span class="icon-safe-l">低</span> -->
                    </div>
                    <div class="safety-item safety-item_desc">
                        <p>安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并且长度超过8位以上的密码。</p>
                    </div>
                    <div class="safety-item safety-item_oper">
                        <p class="safety-item_oper-list"><a class="btn btn-link blue-a">修改</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                userInfoShow: false,
                contentIndex: 0
            }
        },
        methods: {
            changeSelect(index) {
                let temp = this.$refs.selective.childNodes;
                temp.forEach(s => {
                    s.classList.remove('selective-active')
                });
                this.$refs.selective.children.item(index).classList.add('selective-active');
            },
            selectOpt(index) {
                this.contentIndex = index;
                let temp = this.$refs.optionsList.childNodes;
                temp.forEach(s => {
                    s.classList.remove('left-border')
                });
                this.$refs.optionsList.children.item(index).classList.add('left-border');
                if (index === 0){

                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 1100px;
        margin: auto;
        display: flex;
    }

    .user-left {
        width: 150px;
        margin-right: 20px;
        box-sizing: border-box;
    }

    .user-right {
        width: 930px;
        box-sizing: border-box;
        margin-top: 10px;
    }

    .tips {
        height: 41px;
        padding: 10px;
        margin: 0 0 20px;
        border: 1px solid #ccc;
        text-align: left;
        display: flex;
        justify-content: space-between;
    }

    .download-file {
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .selective {
        display: flex;
    }

    .ul-list {
        border-bottom: 2px solid #2577e3;
        box-sizing: border-box;
        height: 39px;
        margin-top: -2px;
        z-index: 10;
    }

    .selective > a {
        width: 142px;
        height: 39px;
        line-height: 39px;
        text-align: center;
        font-size: 18px;
        border: 2px solid #ccc;
        border-bottom: 2px solid #2577e3;
        margin-right: 5px;
        z-index: 20;
        display: inline-block;
        color: #666;
        /*margin-top: 2px;*/
    }

    .selective-active {
        border: 2px solid #2577e3 !important;
        border-bottom: 2px solid #ffffff !important;
        z-index: 20 !important;
    }

    .selected-options {
        height: 50px;
        padding: 10px 12px;
        background-color: #F6F6F6;
        display: flex;
    }

    .input-len {
        display: flex;
        align-items: center;
        margin-right: 16px;
    }

    .input-len:nth-last-child(1) {
        margin-right: 0;
    }

    .input-len > label {
        font-size: 12px;
        margin-right: 5px;
    }

    .clear-info {
        font-size: 13px;
        color: #1D74E7;
        cursor: pointer;
    }

    .order-details-list {
        margin-top: 10px;
    }

    .list-item {
        height: 150px;
        border: 1px solid #d9d9d9;
        margin-bottom: 10px;
    }

    .item-top {
        height: 34px;
        background-color: #F6F6F6;
        display: flex;
        font-size: 12px;
        align-items: center;
        padding-left: 10px;
    }

    .item-top > p {
        margin-right: 20px;
    }

    .blue-a {
        color: #1D74E7;
    }

    .blue-a:hover {
        text-decoration: underline;
    }

    .item-bottom {
        display: flex;
        padding: 10px 12px 10px 28px;
    }

    .item-bottom-left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        flex: 7;
    }

    .item-bottom-left > span {
        display: inline-block;
        margin-bottom: 6px;
        font-size: 12px;
        line-height: 16px;
    }

    .item-bottom-right {
        flex: 3;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .item-price {
        color: #FF6913;
        font-weight: 700;
        display: inline-block;
        padding-right: 7px;
        margin-right: 7px;
        border-right: 1px solid #d8d8d8;
    }

    .all-select {
        display: flex;
        font-size: 12px;
    }

    .pagination {
        display: flex;
        justify-content: flex-end;
    }

    .options-list {
        border: 1px solid #BED3EE;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .options-list > span {
        display: inline-block;
        height: 40px;
        padding: 13px 10px 13px 12px;
        font-size: 14px;
        background-color: #F7FBFF;
    }

    .options-list > span:hover {
        background-color: white;
    }

    .left-border {
        border-left: solid 5px #1D74E7;
        background-color: white !important;
    }

    .userInfo-top {
        height: 36px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #EAF5FF;
        border-top: solid 2px #155EBD;
        box-sizing: border-box;
    }

    .disable {
        display: none !important;
    }

    .userInfo-top > span {
        font-size: 14px;
        font-weight: 700;
    }

    .userInfo-top > p {
        font-size: 12px;
        color: #1D74E7;
        display: flex;
        align-items: center;
    }

    .userInfo-top > p > img {
        width: 15px;
        margin: 0 10px 0 5px;
    }
    .userInfo-top-two{
        height: 36px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F6F6F6;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    .userInfo-top-two > span {
        font-size: 14px;
        font-weight: 700;
    }

    .userInfo-top-two > p {
        font-size: 12px;
        color: #1D74E7;
        display: flex;
        align-items: center;
    }

    .userInfo-top-two > p > img {
        width: 15px;
        margin: 0 10px 0 5px;
    }
    .userInfo-body{
        height: 300px;
        padding: 20px 10px;
        border: 1px solid #ccc;
        font-size: 12px;
        display: flex;

    }
    .input-len{
        margin-bottom: 15px;
    }
    .input-len>p{
        display: inline-block;
        padding-right: 20px;
        width: 80px;
        text-align: right;
    }
    .body-left{
        display: flex;
        flex-wrap: wrap;
        width: 600px;
    }
    .body-right{
        display: flex;
        flex-direction: column;
    }
    .right-tips{
        text-align: left;
    }
    .pre-show-img{
        width: 150px;
        height: 150px;
        margin-bottom: 5px;
        border: 1px dashed #b8cadd;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F6FBFF;
    }
.safety-box{
    font: 12px/1.5 'Microsoft yahei',arial,Simsun,sans-serif;
    color: #333;
    list-style: none;
    padding: 0;
    width: 99%;
    height: 104px;
    margin-bottom: 20px;
    background: #FFF;
    border: 1px solid #CCC;
    display: flex;
}
.safety-item{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
    .safety-item_title{
        width: 180px;
        font-size: 18px;
    }
.safety-item_info{
    font-size: 14px;
    width: 180px;
}
    .safety-item_desc{
        width: 459px;
    }
    .safety-item_oper{
        width: 179px;
    }
    .btn-link{

    }

</style>
