<template>
    <div>
        <img src="../assets/img2.jpg" w-1/>
        <div class="down-warp" auto>
            <div class="down-con">
                <h4>METATRADER4 (MT4)</h4>
                <p>
                    As a most popular trading platform, Metatrader4(MT4) offers an intuitive user interface, powerful customizable space and all practical features.
                </p>
                <p>
                    Download MT4 to your Windows PC or Mac. Install the mobile app or tablet version. And trade anywhere, anytime you want.
                </p>
            </div>
            <dl class="down-o" v-for="(item,index) in arr1" :key="index">
                <dt flex align-center>
                    <span></span>
                    <h4>{{item.tit}}</h4>
                </dt>
                <dd>
                    <pre style="color: #454545;">{{item.cont}}</pre>
                </dd>
            </dl>

            <div class="down-con down-con-o">
                <h4>MT4 ON DESKTOP</h4>
                <pre style="color: #454545;line-height: 26px;">MT4 offers a comprehensive package of professional tools for traders to work with. Which gives an ultimate trading experience for both experienced traders and beginners as well.</pre>
            </div>

            <dl flex  class="down-t">
                <dt>
                    <p flex  align-center v-for="(item,index) in arr2" :key="index">
                        <span></span>
                        {{item}}
                    </p>
                    <div flex class="down-but">
                        <router-link target="_blank" :to="{path:'/'}">
                            <b class="button">Windows</b>
                        </router-link>
                        <router-link target="_blank" :to="{path:'/'}">
                            <b class="button">Mac</b>
                        </router-link>
                    </div>
                </dt>
                <dd>
                    <img src="../assets/mt4.jpg" w-1 height="240" />
                </dd>
            </dl>

            <div class="down-con down-con-o">
                <h4>MT4 ON MOBILE</h4>
                <pre style="color: #454545;line-height: 26px;">Take your favorite trading platform with you! Place and monitor your trades anywhere and at any time you want, with access to all the core functions.</pre>
            </div>

            <dl flex  class="down-t">
                <dt>
                    <p flex  align-center v-for="(item,index) in arr3" :key="index">
                        <span></span>
                        {{item}}
                    </p>
                    <div flex class="down-but">
                        <router-link target="_blank" :to="{path:'/'}">
                            <b class="button">Android</b>
                        </router-link>
                        <router-link target="_blank" :to="{path:'/'}">
                            <b class="button">ios</b>
                        </router-link>
                    </div>
                </dt>
                <dd style="display: flex;
    justify-content: flex-end;height: 220px;">
                    <img src="../assets/mt4-2.jpg" width="280" height="190" />
                </dd>
            </dl>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DownView",
        data(){
            return{
                arr1:[
                    {
                        tit:'INDUSTRY STANDARD',
                        cont:'Millions of traders choose to trade with'
                    },
                    {
                        tit:'PRACTICAL FEATURES',
                        cont:'A comprehensive package of professional tools'
                    },
                    {
                        tit:'EXPERT ADVISORS',
                        cont:'Analyze the market and automate your trade'
                    },
                ],
                arr2:[
                    'A highly customizable interface',
                    'Support Expert Advisors (EA)',
                    'Advanced technical analysis'
                ],
                arr3:[
                    'Simple & portable',
                    'Efficient and smooth design',
                    'Customizable and adaptable'
                ]
            }
        }
    }
</script>

<style scoped>
.down-warp{width: 700px;font-size: 16px;color: #454545;padding-top: 20px;}
    .down-con p{margin-top: 20px;line-height: 26px;}
    .down-con{margin-bottom: 30px;}
    .down-warp .down-o span,.down-t dt p span{width:8px;height: 8px;background: #1a1a1a;margin-right:6px;}
    .down-warp .down-o{padding-bottom: 24px;}
    .down-warp pre{font-size: 16px;}
    .down-warp .down-o dd{padding-top: 10px;}
    .down-con-o h4{margin-bottom: 14px;}
    .down-t p{padding-bottom: 20px;}
.down-t{padding-bottom: 40px;}
    .down-t dt{flex: 1 1 0;align-self: flex-end;}
    .down-t dt p span{border-radius: 50%;width: 6px;height: 6px;}
    .down-t dd{flex:0 0 300px;width: 300px;}
    .down-but{justify-content: space-between;margin-top: 20px;}
    .down-but b{width: 140px;height: 40px;line-height: 40px;display: block;font-style: normal;border-radius: 8px;}
</style>
