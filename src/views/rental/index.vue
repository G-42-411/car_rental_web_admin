<template>
    <div class="box">
        <div class="rental-container">
            <div class="option-time">
                <div class="option-time-item">
                    <div class="item-top" style="text-align: left">
                        取车地点
                    </div>
                    <div class="item-bottom">
                        <a-select style="width: 80px;margin-right: 5px" @change="takeCityChange"
                                  v-model="selectOptions.takeCity">
                            <a-select-option v-for="(item, index) in storefrontInfoList" :key="index">
                                {{ item.name }}
                            </a-select-option>
                        </a-select>
                        <a-select v-model="defaultTakeAddress" style="width: 170px" @change="takeAddressChange">
                            <a-select-option v-for="(city, index) in takeStoreName" :key="index">
                                {{ city.name }}
                            </a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="option-time-item">
                    <div class="item-top" style="text-align: left">
                        还车地点
                    </div>
                    <div class="item-bottom">
                        <a-select style="width: 80px;margin-right: 5px" @change="returnCityChange"
                                  v-model="selectOptions.returnCity">
                            <a-select-option v-for="(item, index) in storefrontInfoList" :key="index">
                                {{ item.name }}
                            </a-select-option>
                        </a-select>
                        <a-select v-model="defaultReturnAddress" style="width: 170px" @change="returnAddressChange">
                            <a-select-option v-for="(city, index) in returnStoreName" :key="index">
                                {{ city.name }}
                            </a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="option-time-item">
                    <div class="item-top" style="display: flex; justify-content: space-around">
                        <span>取车时间</span>
                        <span>还车时间</span>
                    </div>
                    <div class="item-bottom">
                        <a-range-picker @change="" format="YYYY-MM-DD hh:mm" :value="selectDate"/>
                    </div>
                </div>
                <div class="option-time-item">
                    <div class="item-bottom" style="position: absolute; bottom: 0">
                        <a-button type="primary" style="width: 100px" @click="loadCarList">搜索</a-button>
                    </div>

                </div>
            </div>
            <div class="brand-box">
                <p class="type-left">汽车类型</p>
                <div class="type-right">
                    <a-checkbox-group @change="carChanged" style="width: 100%" :default-value="['']">
                        <a-row type="flex" justify="start" :gutter="[0,7]">
                            <a-col :span="3">
                                <a-checkbox value="">
                                    不限
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="奥迪">
                                    奥迪
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="宝马">
                                    宝马
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="宝骏">
                                    宝骏
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="保时捷">
                                    保时捷
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="奔腾">
                                    奔腾
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="比亚迪">
                                    比亚迪
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="奔驰">
                                    奔驰
                                </a-checkbox>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="start" :gutter="[0,7]">
                            <a-col :span="3">
                                <a-checkbox value="本田">
                                    本田
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="标志">
                                    标志
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="别克">
                                    别克
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="长城">
                                    长城
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="长安">
                                    长安
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="东风">
                                    东风
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="大众">
                                    大众
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="丰田">
                                    丰田
                                </a-checkbox>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="start" :gutter="[0,7]">
                            <a-col :span="3">
                                <a-checkbox value="福特">
                                    福特
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="海马">
                                    海马
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="红旗">
                                    红旗
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="吉利">
                                    吉利
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="捷豹">
                                    捷豹
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="凯迪拉克">
                                    凯迪拉克
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="铃木">
                                    铃木
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="马自达">
                                    马自达
                                </a-checkbox>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="start" :gutter="[0,7]">
                            <a-col :span="3">
                                <a-checkbox value="起亚">
                                    起亚
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="斯柯达">
                                    斯柯达
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="雪铁龙">
                                    雪铁龙
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="雪佛兰">
                                    雪佛兰
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="兰博基尼">
                                    兰博基尼
                                </a-checkbox>
                            </a-col>
                            <a-col :span="3">
                                <a-checkbox value="日产">
                                    日产
                                </a-checkbox>
                            </a-col>

                        </a-row>
                    </a-checkbox-group>

                </div>
            </div>
            <div class="price brand-box">
                <div class="price-left type-left">
                    价格区间
                </div>
                <div class="price-right type-right toCenter">
                    <a-checkbox :checked="allPrice" @click="cleanPrice" @change="a_priceChange">
                        不限
                    </a-checkbox>
                    <a-input-number v-model="minPrice" :min="0" :max="10000" @change="minPriceChange"
                                    size="small" step="100" style="margin-left: 64px"/>
                    <span style="display: inline-block; margin: 0 10px">到</span>
                    <a-input-number v-model="maxPrice" :min="0" :max="10000" @change="maxPriceChange"
                                    size="small" step="100"/>
                    <span style="display: inline-block; margin: 0 10px">元</span>
                </div>
            </div>
            <div class="subjoin">
                <div class="subjoinContent" v-show="!showSubjoin">
                    <div class="price brand-box">
                        <div class="price-left type-left">
                            座位
                        </div>
                        <a-checkbox-group @change="changeSeat" style="width: 100%" :default-value="['']">
                            <a-row type="flex" justify="start" :gutter="[0,7]">
                                <a-col :span="3">
                                    <a-checkbox value=''>
                                        不限
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="2">
                                        两座
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="4">
                                        四座
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="5">
                                        五座
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="7">
                                        七座
                                    </a-checkbox>
                                </a-col>

                            </a-row>
                        </a-checkbox-group>
                    </div>
                    <div class="price brand-box">
                        <div class="price-left type-left">
                            变速箱
                        </div>
                        <a-checkbox-group @change="changeGear" style="width: 100%" :default-value="['']">
                            <a-row type="flex" justify="start" :gutter="[0,7]">
                                <a-col :span="3">
                                    <a-checkbox value=''>
                                        不限
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="1">
                                        自动
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="0">
                                        手动
                                    </a-checkbox>
                                </a-col>
                            </a-row>
                        </a-checkbox-group>
                    </div>
                    <div class="price brand-box">
                        <div class="price-left type-left">
                            门数
                        </div>
                        <a-checkbox-group @change="changeDoor" style="width: 100%" :default-value="['']">
                            <a-row type="flex" justify="start" :gutter="[0,7]">
                                <a-col :span="3">
                                    <a-checkbox value=''>
                                        不限
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="2">
                                        双开门
                                    </a-checkbox>
                                </a-col>
                                <a-col :span="3">
                                    <a-checkbox value="4">
                                        四开门
                                    </a-checkbox>
                                </a-col>
                            </a-row>
                        </a-checkbox-group>
                    </div>

                </div>
                <div class="showSubjoin">
                    <span v-if="showSubjoin" @click="changeSubjoin">展示更多筛选项 <img src="../../assets/img/double_down.png"
                                                                                 style="width: 12px"></span>
                    <span v-else @click="changeSubjoin">收起 <img src="../../assets/img/double_up.png"
                                                                style="width: 12px"></span>
                </div>
            </div>
        </div>
        <div class="founded">
            <div class="founded-info">
                <p style="margin-right: 10px">陕西省西安市分店:</p>
                <span><p style="color: #1D74E7; font-weight: normal">{{carList.length}}</p>车型</span>
            </div>
            <div class="founded-solt">
                <p>综合排序:</p>
                <a-select default-value="asc" style="width: 150px" @change="orderByPrice">
                    <a-select-option value="asc">
                        价格从低到高
                    </a-select-option>
                    <a-select-option value="desc">
                        价格从高到低
                    </a-select-option>

                </a-select>
            </div>
        </div>
        <div class="car-list">
            <div class="car-item">
                <div class="car-details">
                    <div class="details-left">
                        <img src="//pic.c-ctrip.com/car/osd/mobile/vehimg/white/Honda_Accord.jpg">
                        <span class="details-left-info">
                        <a href="">外观</a>
                        <span>|</span>
                        <a href="">空间</a>
                        <span>|</span>
                        <a href="">内饰</a>
                    </span>
                    </div>
                    <div class="details-middle">
                    <span class="details-middle-name">
                        兰博基尼&nbsp;Urus
                    </span>
                        <p class="details-middle-info">
                            <img src="../../assets/img/A.png">
                            <span>自动挡</span>
                            <img src="../../assets/img/座位安排.png">
                            <span>5座</span>
                            <img src="../../assets/img/车门.png">
                            <span>4门</span>
                        </p>
                        <p class="details-middle-description">
                            [中大型SUV] 空间类似大众帕萨特、丰田凯美瑞|后排空间较为宽敞，建议乘坐4人+2行李箱
                        </p>
                    </div>
                    <div class="details-right">
                        <p style="color: #FF6913; margin-bottom: 10px">
                            ￥<span style="font-weight: 700; font-size: 26px">116</span>/天起
                        </p>
                        <a-button v-if="!carDetailsShow" type="primary" @click="showChanged">展开
                            <a-icon type="down"/>
                        </a-button>
                        <a-button v-else @click="showChanged">收起
                            <a-icon type="up"/>
                        </a-button>
                    </div>
                </div>
                <div class="supplierInfo" v-show="carDetailsShow">
                    <div class="supplier-img">
                        <img src="//pic.c-ctrip.com/car/osd/ctrip/vendor_logo/top_20191125.png">
                        <span>直销</span>
                    </div>
                    <div class="supplier-content-box">
                        <div class="supplier-info">
                            <p style="display: flex; align-items: center">
                                <img src="../../assets/img/地点.png" style="width: 18px;">
                                西安市雁塔区分店
                            </p>
                            <p>
                                固定电话:&nbsp;13629183501
                            </p>
                            <p style="color: #50A700;">
                                免费取消
                                <span style="margin: 0 5px; color: #999999">|</span>
                                立即确认
                            </p>
                            <span></span>
                        </div>
                        <div class="supplier-evaluate">

                            <a-popover placement="leftTop">
                                <template slot="content">
                                    <div class="popover-box" style="width: 270px">
                                        <div class="popover-line">
                                            <span style="width: 100px;font-weight: 500;color: #333333">车辆硬件</span>
                                            <a-progress :percent="90" size="small" :show-info="false"
                                                        strokeColor="#2577E3"/>
                                            <span style="width: 70px;font-weight: 700; text-align: right">4.5分</span>
                                        </div>
                                        <div class="popover-line">
                                            <span style="width: 100px;font-weight: 500;color: #333333">车辆清洁</span>
                                            <a-progress :percent="90" size="small" :show-info="false"
                                                        strokeColor="#2577E3"/>
                                            <span style="width: 70px;font-weight: 700; text-align: right">4.5分</span>
                                        </div>
                                        <div class="popover-line">
                                            <span style="width: 100px;font-weight: 500;color: #333333">取还便捷</span>
                                            <a-progress :percent="76" size="small" :show-info="false"
                                                        strokeColor="#2577E3"/>
                                            <span style="width: 70px;font-weight: 700; text-align: right">3.8分</span>
                                        </div>
                                        <div class="popover-line">
                                            <span style="width: 100px;font-weight: 500;color: #333333">服务水平</span>
                                            <a-progress :percent="92" size="small" :show-info="false"
                                                        strokeColor="#2577E3"/>
                                            <span style="width: 70px;font-weight: 700; text-align: right">4.6分</span>
                                        </div>

                                    </div>
                                </template>
                                <p style="font-size: 16px;font-weight: 700; color: #2681FF; margin-bottom: 10px">4.3
                                    <span style="font-size: 13px">/5</span>
                                    好
                                </p>
                                <p @mouseenter="" class="evaluate">72条点评</p>
                            </a-popover>

                        </div>
                        <div class="supplier-price"
                        >
                            <p style="color: #FF6913; font-size: 12px; margin-top: 2px">
                                ￥<span style="font-size: 26px; font-weight: 700">145</span>/天
                            </p>
                            <a-button type="primary"
                                      style="width: 65px;"
                            >预定
                            </a-button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
        <div class="box-buttom">
            <div class="buttom-item">
                <img src="../../assets/img/安全.png">
                <div class="buttom-item-right">
                    <h3>退赔安心</h3>
                    <span>尊享取车保障</span>
                </div>
            </div>
            <div class="buttom-item">
                <img src="../../assets/img/电话.png">
                <div class="buttom-item-right">
                    <h3>7X24小时客服</h3>
                    <span>全程为您保驾护航</span>
                </div>
            </div>
            <div class="buttom-item">
                <img src="../../assets/img/清洁.png">
                <div class="buttom-item-right">
                    <h3>全车清洁</h3>
                    <span>全车消毒,保障您的健康</span>
                </div>
            </div>
            <div class="buttom-item">
                <img src="../../assets/img/金钱.png">
                <div class="buttom-item-right">
                    <h3>快捷支付</h3>
                    <span>支付宝支付更加方便快捷</span>
                </div>
            </div>
        </div>
        <div class="buttom-bar">
            <div class="buttom-bar-top">
                <span class="css26e0695ffb2316b" style="font-size: 36px; margin-right: 25px">Dream Car租车</span>
                <p style="text-align: left">
                    <span style="font-size: 24px; font-weight: 500; margin-bottom: 10px">无论前往世界的那个角落,&nbsp;我们时刻为您保驾护航</span><br>
                    <span style="font-size: 16px;font-weight: 500; color: #666666">Dream Car租车的客服团队7X24小时在线,&nbsp;只要您的一个电话,&nbsp;我们随时为您提供服务</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getStorefrontInfoList, queryBySelective} from '@/api/api'

    const OPTIONS = ['2座', '4座', '5座'];
    export default {
        name: "index",
        data() {
            return {
                carDetailsShow: false,
                storefrontInfoList: [],
                takeStoreName: [],
                returnStoreName: [],
                defaultTakeAddress: '',
                defaultReturnAddress: '',
                selectOptions: {
                    takeCity: '',
                    returnCity: '',
                    takeAddress: '',
                    returnAddress: '',
                    takeDate: '',
                    takeTime: '',
                    returnDate: '',
                    returnTime: '',
                    autoTake: false,
                    autoReturn: false
                },
                selectDate: [],
                queryOptions: {
                    storefrontName: '',
                    brands: [],
                    prices: {
                        minPrice: 0,
                        maxPrice: 10000
                    },
                    seats: [],
                    doors: [],
                    gears: [],
                    order: 'price',
                    orderType: 'asc'
                },
                showSubjoin: true,
                selectedItems: [],
                doorRadio: 4,
                gearRadio: 1,
                minPrice: 0,
                maxPrice: 0,
                allPrice: true,
                carList: []
            }
        },
        methods: {
            carChanged(value) {
                this.removeNull(value);
                this.queryOptions.brands = value

            },
            priceChanged(checkedValues) {
                console.log(checkedValues)
            },
            showChanged() {
                this.carDetailsShow = !this.carDetailsShow;
            },
            loadStorefrontInfoList() {
                getStorefrontInfoList().then(res => {
                    this.storefrontInfoList = res.data;
                    console.log(this.storefrontInfoList);
                })
            },
            takeCityChange(value) {
                console.log(value);
                this.takeStoreName = this.storefrontInfoList[value].addressList;
                this.defaultTakeAddress = this.storefrontInfoList[value].addressList[0].name
            },
            returnCityChange(value) {
                console.log(value);
                this.returnStoreName = this.storefrontInfoList[value].addressList;
                this.defaultReturnAddress = this.storefrontInfoList[value].addressList[0].name
            },
            initSelectOptions() {
                this.loadStorefrontInfoList();
                this.defaultTakeAddress = this.selectOptions.takeAddress;
                this.defaultReturnAddress = this.selectOptions.returnAddress;
                let startTime = this.selectOptions.takeDate + ' ' + this.selectOptions.takeTime;
                let endTime = this.selectOptions.returnDate + ' ' + this.selectOptions.returnTime;
                this.selectDate.push(startTime);
                this.selectDate.push(endTime);
                this.queryOptions.storefrontName = this.selectOptions.takeAddress;

            },
            changeSubjoin() {
                this.showSubjoin = !this.showSubjoin
            },
            changeSeat(value) {
                this.removeNull(value);
                this.queryOptions.seats = value
            },
            changeDoor(value) {
                console.log(value)
                this.removeNull(value);
                this.queryOptions.doors = value

            },
            changeGear(value) {
                this.removeNull(value);
                this.queryOptions.gears = value

            },
            minPriceChange(value) {
                this.queryOptions.prices.minPrice = value;
                this.allPrice = false;
            },
            maxPriceChange(value) {
                this.queryOptions.prices.maxPrice = value;
                this.allPrice = false
            },
            cleanPrice() {
                this.minPrice = 0;
                this.maxPrice = 0;
                this.queryOptions.prices.minPrice = 0;
                this.queryOptions.prices.maxPrice = 10000
            },
            a_priceChange(e) {
                this.allPrice = e.target.checked;
            },
            removeNull(list) {
                list.forEach(s => {
                    if (s === '') {
                        list.remove(s)
                    }
                })
            },
            loadCarList() {
                console.log(this.queryOptions);
                queryBySelective(this.queryOptions).then(res => {
                    this.carList = res.data
                })
            },
            returnAddressChange(value){
                // this.queryOptions.storefrontName = this.takeStoreName[value].name;
            },
            takeAddressChange(value) {
                console.log(value);
                this.queryOptions.storefrontName = this.takeStoreName[value].name;
            },
            initStoreName() {
                let takeIndex = this.judgeAddressIndex(this.selectOptions.takeCity);
                console.log(this.selectOptions.takeCity, takeIndex);
                this.takeStoreName = this.storefrontInfoList[takeIndex].addressList;
                let returnIndex = this.judgeAddressIndex(this.selectOptions.returnCity);
                this.returnStoreName = this.storefrontInfoList[returnIndex].addressList;
            },
            judgeAddressIndex(value) {
                for (let i = 0; i < this.storefrontInfoList.length; i++) {
                    if (this.storefrontInfoList[i].name === value) {
                        return i
                    }
                }
            },
            orderByPrice(value){
                this.queryOptions.orderType = value
                this.loadCarList()
            }
        },
        computed: {
            filteredOptions() {
                return OPTIONS.filter(o => !this.selectedItems.includes(o));
            },
        },
        watch: {
            storefrontInfoList(newData, oldData) {
                this.initStoreName()
            }
        },
        mounted() {
            this.selectOptions = this.$route.query;
            this.initSelectOptions();
        }
    }
</script>

<style scoped>
    .box {
        font-size: 14px;
    }

    .top-content-box {
        width: 1100px;
        height: 37px;
        border: solid 1px #2577E3;
        border-top: none;
        margin: auto;
        font-size: 14px;
        line-height: 37px;
        position: relative;
    }

    .top-content-box > a {
        display: inline-block;
        position: absolute;
        right: 15px;
    }

    .rental-container {
        width: 1100px;
        margin: 20px auto 0 auto;
    }

    .option-time {
        padding: 15px;
        background-color: #EEF5FF;
        display: flex;

    }

    .option-time-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;

    }

    .item-top {
        position: relative;
        font-size: 14px;
        color: #666666;
        margin-bottom: 5px;
    }

    .brand-box {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px #ececec dashed;
    }

    .type-left {
        display: inline-block;
        width: 85px;
        height: 15px;
        line-height: 15px;
        margin: 3px 0;
        text-align: left;
    }

    .type-right {
        width: 100%;
    }

    .ant-col {
        text-align: left;
    }

    .founded {
        width: 1100px;
        margin: 20px auto 0 auto;
        display: flex;
        align-items: center;
    }

    .founded-info {
        width: 100%;
        text-align: left;
    }

    .founded-info > span, .founded-info p {
        font-size: 15px;
        display: inline-block;
        font-weight: 700;
    }

    .founded-solt {
        display: flex;
        width: 280px;
        align-items: center;
        justify-content: space-between;
    }

    .founded-solt > p {
        font-size: 15px;
        display: inline-block;
        font-weight: 700;
    }

    .car-list {
        width: 1100px;
        margin: 20px auto 0 auto;
        display: flex;
        flex-direction: column;
    }

    .car-details {
        width: 900px;
        height: 185px;
        display: flex;
    }

    .details-left {
        width: 210px;
        display: flex;
        flex-direction: column;
    }

    .details-left > img {
        width: 210px;
        height: 140px;
    }

    .details-left > span {
        display: inline-block;
        text-align: center;
        color: #999999;
    }

    .details-left > span > span {
        width: 1px;
        height: 14px;
        color: #999999;
        margin: 0 5px;
    }

    .details-left-info {
        margin: -10px 0 0 0;
    }

    .details-middle {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .details-middle-name {
        display: inline-block;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
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

    .details-middle-description {
        margin-bottom: 21px;
    }

    .details-right {
        display: flex;
        flex-direction: column;
        width: 130px;
        justify-content: center;
        padding: 0 15px;
    }

    .car-item {
        border-bottom: solid 1px #E0E0E0;
    }

    .car-item:nth-child(1) {
        border-top: solid 1px #E0E0E0;
    }

    /*.car-details{*/
    /*    border-bottom: solid 1px #E0E0E0;*/
    /*    padding-bottom: 30px;*/
    /*}*/
    /*.car-details:nth-child(1){*/
    /*    border-top: solid 1px #E0E0E0;*/
    /*}*/
    .supplierInfo {
        padding: 16px 10px 4px 57px;
        width: 900px;
        height: 94px;
        display: flex;

    }

    .supplier-content-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .supplier-img {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #ccc;
        margin-right: 25px;
    }

    .supplier-img > img {
        width: 60px;
        height: 37px;
        margin-bottom: 10px;
    }

    .supplier-info {
        width: 300px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .supplier-info > p {
        display: inline-block;
        margin-bottom: 10px;
    }

    .supplier-price {
        display: flex;
        justify-content: space-between;
        width: 170px;
    }

    .supplier-price > .ant-btn-primary {
        background-color: #FF6913;
        border-color: #FF6913;
    }

    .supplier-evaluate {
        margin-right: 50px;
    }

    .evaluate:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .box-buttom {
        display: flex;
        width: 1100px;
        margin: 70px auto 35px auto;
        justify-content: space-between;
    }

    .buttom-item {
        display: flex;
        align-items: center;
    }

    .buttom-item > img {
        width: 40px;
        margin-right: 10px;
    }

    .buttom-item-right {
        text-align: left;
    }

    .buttom-item-right > h3 {
        font-weight: 700;
        margin-bottom: 10px;
    }

    .buttom-bar {
        padding: 40px 285px;
        width: 100%;
        height: 345px;
        background-color: #34353A;
        display: flex;
        flex-direction: column;
    }

    .buttom-bar-top {
        color: white;
        display: flex;
        align-items: center;
        border-bottom: solid 1px #FFFFFF66;
        padding-bottom: 35px;
    }

    .buttom-bar-top > p > span:nth-child(1) {
        display: inline-block;
        margin-bottom: 10px;
    }

    .popover-box {
        display: flex;
        flex-direction: column;
    }

    .popover-line {
        display: flex;
    }

    .popover-line:nth-child(-n+3) {
        margin-bottom: 5px;
    }

    .ant-progress-inner {
        background-color: #E2E4EC !important;
    }

    .subjoin {
        display: flex;
        flex-direction: column;
        position: relative;

    }

    .subjoinContent {
        display: flex;
        flex-direction: column;
        /*padding: 15px 0;*/
        /*align-items: center;*/
        /*border-bottom: 1px #ececec dashed;*/
        /*transition: all 1s ease-in-out;*/
    }

    .showSubjoin > span {
        position: relative;
        margin: 0 auto;
        padding: 0 15px;
        line-height: 27px;
        color: #415F8C;
        border: 1px solid #E0E0E0;
        border-radius: 0 0 8px 8px;
        border-top: none;
        background-color: #F6F9FE;
        display: inline-block;
    }

    .subjoinSelective {
        display: flex;
        width: 100%;
    }

    .selectiveLen {
        display: flex;
        align-items: center;
        margin-right: 50px;
    }

    .flex-line {
        display: flex;
    }

    .toCenter {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>
