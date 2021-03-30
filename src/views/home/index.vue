<template>
    <div class="box">
        <div class="selective-box">
            <div class="selective">
                <div class="item">
                    <span>取车地点</span>
                    <a-select style="width: 170px; margin-right: 5px" placeholder="请选择取车地点" @change="takeCity">
                        <a-select-option v-for="(item, index) in this.storefrontList" :key="index+item.name" :value="item.name" @click="changeJie(index)">
                            {{item.name}}
                        </a-select-option>
                    </a-select>
                    <a-select style="width: 255px" @change="takeAddress" v-model="defaultTakeAddress">
                        <a-select-option v-for="(item, index) in this.storefrontList[this.jieIndex].addressList" :key="index+item.name" :value="item.name">
                            {{item.name}}
                        </a-select-option>
                    </a-select>
                </div>
                <div class="item">
                    <span>还车地点</span>
                    <a-select style="width: 170px; margin-right: 5px" placeholder="请选择还车地点" @change="returnCity">
                        <a-select-option v-for="(item, index) in this.storefrontList" :key="index+item.name" :value="item.name" @click="changeHuan(index)">
                            {{item.name}}
                        </a-select-option>
                    </a-select>
                    <a-select style="width: 255px" @change="returnAddress" v-model="defaultReturnAddress">
                        <a-select-option v-for="(item, index) in this.storefrontList[this.huanIndex].addressList" :key="index+item.name" :value="item.name">
                            {{item.name}}
                        </a-select-option>
                    </a-select>
                </div>
                <div class="item">
                    <span>取车时间</span>
                    <div class="dateSelect" style="width: 430px">
                        <a-date-picker @change="takeDate" style="width: 280px; padding-right: 5px;"/>
                        <a-time-picker format="hh:mm" :minute-step="10" use24-hours @change="takeTime" style="width: 150px"/>
                    </div>

                </div>
                <div class="item">
                    <span>还车时间</span>
                    <div class="dateSelect" style="width: 430px">
                        <a-date-picker @change="returnDate" style="width: 280px; padding-right: 5px;"/>
                        <a-time-picker format="hh:mm" :minute-step="10" use24-hours @change="returnTime" style="width: 150px"/>
                    </div>
                </div>
                <div class="item">
                    <a-checkbox @change="autoTakeChange">
                        送车上门
                    </a-checkbox>
                    <a-checkbox @change="autoRetuenChange">
                        上门取车
                    </a-checkbox>
                </div>
                <a-button @click="toReatal" class="toSelective-btn" type="primary" size="large" style="width: 150px">
                    去选车
                </a-button>
            </div>
        </div>


        <div class="rental-map" id="rental-map">
            <textLine>
                <template v-slot:title>
                    <span style="font-size: 26px;font-style: normal;">
                        热门&nbsp;·&nbsp;<p style="color: #0066cc;">国内租车城市</p>
                    </span>
                </template>
            </textLine>
            <div class="map">
                <div class="map-left">
                    <div class="chart" id="chart" ref="chart" style="width: 100%;height:600px;"/>
                </div>
                <div class="map-right">
                    <div class="map-right-content">
                        <div>陕西</div>
                        <div>山东</div>
                        <div>四川</div>
                        <div>桂林</div>
                        <div>广州</div>
                    </div>
                    <div class="map-right-info">
                        <span>以具体开通城市为准，地图仅供参考</span><br>
                        <span>咨询电话</span>
                        <span>境内：63501</span>
                        <span>境外：+ 86-21-3406-4888</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="comment-box" id="comment-box">
            <textLine>
                <template v-slot:title>
                    <span style="font-size: 26px;font-style: normal;">
                        用车点评
                    </span>
                </template>
            </textLine>

            <div class="comments">
                <div class="comment-item" v-for="(item,index) in commentList" v-if="index < 3">
                    <div class="user-icon">
                        <a-avatar shape="square" size="large" :src="item.avatar"/>
                    </div>
                    <div class="content">
                        <div class="top">
                            <span style="font-size: 16px;font-weight: bold;">国内租车</span>
                            <span>{{item.username}}</span>
                            <span> <a-icon type="clock-circle" :style="{color: '#F67F0D'}"/> {{$moment(item.createTime).format('YYYY-MM-DD')}}</span>
                        </div>
                        <div class="bottom">
                            <a-popover placement="bottomLeft">
                                <template slot="content">
                                    <div style="width: 300px; font-size: 13px">
                                        {{item.content}}
                                    </div>

                                </template>
                                <span>{{item.content}}</span>
                            </a-popover>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="about-me-box" id="about-me-box">
            <textLine>
                <template v-slot:title>
                    <span style="font-size: 26px;font-style: normal;">
                        关于我们
                    </span>
                </template>
            </textLine>
            <span style="display: inline-block; font-size: 13px; line-height: 150%; text-align: left; margin: 25px 0 0 0">Dream Car用车(car.dream.com)为您提供全球租车/专车价格查询及预订服务，用车业务涵盖了国内自驾租车、境外自驾租车、国内日租租车/包车，国内接送机专车、国内火车站专车接送、国内/境外自驾租车攻略，境外代驾专车，境外接送机。自驾租车共覆盖全球100多个国家，2000多个城市及9000个旅游目的地的上万款车型，提供一嗨/安飞士/至尊/Hertz/Alamo自驾租车比价服务，还提供易到/滴滴/uber/优步等专车供应商接驾服务。来Dream Car用车，享受优惠租车，让您尊享国际五星级出行服务。</span>

            <div class="content-box">
                <div class="top">
                    <div class="top-item">
                        <a-icon type="home"/>
                        <span>450+</span>
                        <span>城市开通服务</span>
                        <span>全国覆盖</span>
                    </div>
                    <div class="top-item">
                        <a-icon type="environment"/>
                        <span>6000+</span>
                        <span>网点取还车</span>
                        <span>快捷方便</span>
                    </div>
                    <div class="top-item">
                        <a-icon type="car"/>
                        <span>200+</span>
                        <span>高中低端车型</span>
                        <span>随心选择</span>
                    </div>
                    <div class="top-item">
                        <a-icon type="history"/>
                        <span>24H</span>
                        <span>24小时服务</span>
                        <span>全年无休</span>
                    </div>
                </div>
                <span style="display: inline-block; margin: 40px auto 10px auto; font-size: 26px; color: #1D74E7">
                    为您每天的放心出行，我们能做到
                </span>
                <div class="about-info">
                    <div class="info-item">
                        <div class="info-item-left">
                            <h3>免异地还车费</h3>
                            <span>支持异地还车</span>
                            <span>异地还车费用全免</span>
                        </div>
                        <div class="info-item-right">
                            <img src="../../assets/img/1.png" alt="">
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-item-left">
                            <h3>车型丰富</h3>
                            <span>200多种豪华</span><br>
                            <span>舒适、经济车型</span>
                            <span>SUV、MPV等，随心选择</span>
                        </div>
                        <div class="info-item-right">
                            <img src="../../assets/img/2.png" alt="">
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-item-left">
                            <h3>方便快捷</h3>
                            <span>最快下单后30分钟可取车</span>
                            <span>支持送车上门</span>
                        </div>
                        <div class="info-item-right">
                            <img src="../../assets/img/3.png" alt="">
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-item-left">
                            <h3>全车消毒</h3>
                            <span>每天进行全车消毒</span>
                            <span>自助取还、无接触</span><br>
                            <span>安全出行</span>
                        </div>
                        <div class="info-item-right">
                            <img src="../../assets/img/4.png" alt="">
                        </div>
                    </div>
                </div>
                <!--                <h4 style="font-size: 12px;font-weight: bold;color: #666; text-align: left; margin-bottom: 5px">Dream Car用车官网租车/专车服务</h4>-->
                <!--                <span style="display: inline-block; font-size: 13px; line-height: 150%; text-align: left">Dream Car用车(car.dream.com)为您提供全球租车/专车价格查询及预订服务，用车业务涵盖了国内自驾租车、境外自驾租车、国内日租租车/包车，国内接送机专车、国内火车站专车接送、国内/境外自驾租车攻略，境外代驾专车，境外接送机。自驾租车共覆盖全球100多个国家，2000多个城市及9000个旅游目的地的上万款车型，提供一嗨/安飞士/至尊/Hertz/Alamo自驾租车比价服务，还提供易到/滴滴/uber/优步等专车供应商接驾服务。来Dream Car用车，享受优惠租车，让您尊享国际五星级出行服务。</span>-->
            </div>
        </div>


    </div>
</template>

<script>

    import textLine from '../../components/textLine/index.vue'
    import china from '../../assets/json/china.json'
    import {getUserInfo, getCommentList, getStorefrontInfoList} from '@/api/api'

    export default {
        name: "index",
        data() {
            return {
                city: [],
                province: [],
                userInfo: {},
                commentList: [],
                storefrontList: [{
                    addressList:[{name:''}],
                    name:'',
                    count:0
                }],
                jieIndex:0,
                huanIndex:0,
                selectOptions:{
                    takeCity: '',
                    returnCity:'',
                    takeAddress: '',
                    returnAddress: '',
                    takeDate: '',
                    takeTime: '',
                    returnDate: '',
                    returnTime: '',
                    autoTake: false,
                    autoReturn: false
                },
                defaultTakeAddress: '',
                defaultReturnAddress: ''
            }
        },
        methods: {
            drawChart() {
                function randomData() {
                    return Math.round(Math.random() * 500);
                }

                this.$echarts.registerMap('china', china)
                let myChart = this.$echarts.init(this.$refs.chart);
                // 绘制图表
                let option = {
                    tooltip: {},
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['']
                    },
                    selectedMode: 'single',
                    series: [
                        {
                            name: '',
                            type: 'map',
                            mapType: 'china',
                            zoom: 1.1,
                            center: [115.97, 29.71],
                            layoutCenter: ['100%', '100%'],
                            itemStyle: {
                                normal: {
                                    areaColor: '#92B8E9',
                                    borderColor: '#2577E3'
                                },
                                emphasis: {
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 20,
                                    borderWidth: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            showLegendSymbol: true,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            data: this.province
                        }
                    ]
                };
                myChart.setOption(option)
            },
            toReatal() {
                if (this.selectOptions.takeAddress === ''){
                    this.selectOptions.takeAddress = this.defaultTakeAddress
                }
                if (this.selectOptions.returnAddress === ''){
                    this.selectOptions.returnAddress = this.defaultReturnAddress
                }
                this.$router.push({path: "/rental",query:this.selectOptions})
            },
            loadUserInfo() {
                getUserInfo().then(res => {
                    if (res.status === 200) {
                        this.$store.commit('setUserInfo', res.data);
                        this.userInfo = res.data;
                    }
                })
            },
            loadCommentList() {
                getCommentList().then(res => {
                    this.commentList = res.data;
                })
            },
            loadStorefrontList() {
                getStorefrontInfoList().then(res => {
                    this.storefrontList = res.data;
                    this.fromatProvince();
                    this.$nextTick(function () {
                        this.drawChart()
                    })
                    this.fromatCity();
                })
            },
            fromatProvince() {
                this.storefrontList.forEach(s => {
                    let flag = false;
                    let index = s.name.indexOf('省') + 1;
                    let city_name = s.name.substr(0, index);
                    console.log(city_name, this.province);
                    this.province.forEach(c => {
                        if (c.name === city_name) {
                            c.value += s.count;
                            flag = true
                        }
                    });
                    if (!flag) {
                        let obj = {
                            name: city_name,
                            value: s.count
                        };
                        this.province.push(obj)
                    }
                });
            },
            fromatCity() {
                this.storefrontList.forEach(s => {
                    let obj = {
                        value: s.name,
                    };
                    this.city.push(obj);
                })
            },
            changeJie(index){
                this.jieIndex = index;
                this.defaultTakeAddress = this.storefrontList[index].addressList[0].name

            },
            changeHuan(index){
                this.huanIndex = index;
                this.defaultReturnAddress = this.storefrontList[index].addressList[0].name
            },
            takeCity(value){
                this.selectOptions.takeCity = value
            },
            returnCity(value){
                this.selectOptions.returnCity = value
            },
            takeAddress(value){
                this.selectOptions.takeAddress = value
            },
            returnAddress(value){
                this.selectOptions.returnAddress = value
            },
            takeDate(date, dateString){
                this.selectOptions.takeDate = dateString
            },
            takeTime(time, timeString){
                this.selectOptions.takeTime = timeString
            },
            returnDate(date, dateString){
                this.selectOptions.returnDate = dateString
            },
            returnTime(time, timeString){
                this.selectOptions.returnTime = timeString
            },
            autoTakeChange(e){
                console.log(e.target.checked);
                this.selectOptions.autoTake = e.target.checked
            },
            autoRetuenChange(e){
                console.log(e.target.checked);
                this.selectOptions.autoReturn = e.target.checked
            }

        },
        components: {
            textLine
        },
        mounted() {
            this.loadCommentList();
            this.loadStorefrontList();
        }
    }
</script>

<style scoped>
    .box {
        /*width: 1100px;*/
        margin: auto;
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

    .selective-box {
        width: 1100px;
        margin: auto;
    }

    .selective {
        margin: 20px 20px 20px 0;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        background-color: white;
        padding: 25px 30px 15px 30px;
        width: 590px;
        height: 275px;
        position: relative;
    }

    .item {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
    }

    .item:nth-child(n + 2) {
        margin-top: 10px;
    }

    .item > span {
        display: inline-block;
        margin-right: 12px;
    }

    .toSelective-btn {
        position: absolute;
        right: 30px;
        bottom: 15px;
    }

    .rental-map {
        width: 100%;
        height: 650px;
        padding: 20px 200px;
        background: #f2f4f6 url(../../assets/img/internalBot.jpg) center bottom no-repeat;
    }

    .map {
        display: flex;
    }

    .map-left {
        flex: 5;
    }

    .map-right {
        padding-top: 100px;
        box-sizing: border-box;
        flex: 3;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

    }

    .map-right-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
    }

    .map-right-content > div {
        width: 85px;
        height: 35px;
        line-height: 35px;
        border-radius: 50px;
        margin: 10px 0 0 10px;
        background-color: white;
    }

    .map-right-info {
        padding-left: 25px;
        font-size: 13px;
        margin-bottom: 50px;
        text-align: left;
        line-height: 150%;
    }

    .map-right-info > span {
        display: inline-block;
        margin-right: 5px;
    }

    .comment-box {
        width: 1130px;
        margin: auto;
        padding: 20px 0;
    }

    .comments {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        font: 14px Microsoft Yahei;
    }

    .comment-item {
        width: 530px;
        display: flex;
        align-items: center;
        margin: 15px 20px 0 0;
    }

    .user-icon {
        margin-right: 15px;
    }

    .content {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .content > .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .content > .bottom {

    }

    .content > .bottom > span {
        display: inline-block;
        line-height: 150%;
        text-align: left;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .about-me-box {
        width: 100%;
        /*height: 650px;*/
        padding: 20px 200px;
    }

    .about-me-box > .content-box {
        margin: 20px 0;
    }

    .about-me-box > .content-box > .top {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .about-me-box > .content-box > .top > .top-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .about-me-box > .content-box > .top > .top-item > span:nth-child(n) {
        margin: 10px;
    }

    .about-info {
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
    }

    .info-item {
        width: 450px;
        height: 150px;
        display: flex;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        margin: 15px 40px;
    }

    .info-item-left {
        text-align: left;
        padding: 20px;
    }

    .info-item-left > h3 {
        color: #1D74E7;
        margin-bottom: 10px;
    }

    .info-item-left > span {
        display: inline-block;
        margin-top: 5px;
        font-size: 13px;
        color: #AEAFAE;
    }

    .info-item-right > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
