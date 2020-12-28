<template>
  <div class="about">
    <a-carousel>
      <div class="img-head" w-1 v-for="(item,index) in banner" :key="index">
        <h4>{{$t('banner')}}</h4>
        <img  :src="item"  w-1/>
      </div>
    </a-carousel>
    <div class="about-warp" w-1136>
      <dl flex
          v-for="[label, value] in newsList" :key="label"
      >
        <dt flex>
          <p class="tit" fz-26>
            {{value.title}}
          </p>
          <p v-html="value.brief" style="line-height: 44px;">
        </p>
          <h4 fz-26 flex>
            <span c-p align-center @click="goList(value.title,value.content,label)">{{$t('content.btn')}}</span>
          </h4>
        </dt>
        <dd>
          <!--<img src="../assets/about1.jpg" width="100%" height="100%"/>-->
          <!--<img src="`../assets/about${index+1}.jpg`" width="100%" height="100%"/>-->
          <img :src="value.img" width="100%" height="100%"/>
        </dd>
      </dl>
    </div>

    <img src="../assets/about4.jpg" w-1/>

    <div class="about-warp_c" w-1136>
      <h4 center fz-28 center bold>{{$t('content.title')}}</h4>
      <pre>{{$t('content.cont')}}</pre>
    </div>

    <div class="about-warp_card" flex>
     <div w-1136 style="align-self: flex-end;">
       <dl>
         <dt fz-26>
           <h4 fz-30>
             {{$t('career.tit1')}}
           </h4>
           <p>{{$t('career.tit2')}}</p>
           <p style="padding-top: 0">{{$t('career.tit3')}}</p>
         </dt>
         <dd>
           <h5 fz-26 c-p @click="$router.push({path:'careers'})">
             {{$t('career.btn1')}}
           </h5>
           <br>
           <h5 fz-28 c-p @click="$router.push({name: 'about', params: {tit: 'overview' }})">
             {{$t('career.btn2')}}
           </h5>
         </dd>
       </dl>
     </div>
    </div>

   <!-- <div class="about-warp_bottom" w-1>
      <dl flex align-center>
        <dt fz-28 c-fff bold>Stay up to date with our latest insights</dt>
        <dd flex>
          <input type="text"  placeholder="E-mail Address">
          <p center c-fff fz-28 bold c-p>Subscribe</p>
        </dd>
    </div>-->


  </div>
</template>
<script>
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";
import {mapActions} from 'vuex'
export default {
  name: "abou",
  data() {
    return{
      newsList:{},
      mapkey:[10,20,30],
      banner:[],
      show:true
    }
  },
  async created(){
    console.log(this.$i18n.locale)
    this.getList()
    const data=await this.$api.list.getBanner()
    if(data.code==0){
      this.banner=data.data
      this.show=false
    }else {
      this.$message.warning('加载失败');
    }

  },
  methods: {
    ...mapActions(['setContent']),
    onChange(a, b, c) {
      console.log(a, b, c);
    },

    goList(tit,content,index){
      tit = tit
              .replace(/\=/g, "%3D")
              .replace(/\+/g, "=")
              .replace(/[\s]/g, "-")
              .replace(/\?/g, "")
              .replace(/\#/g, "?")
              .replace(/\&/g, "&");
      this. $router.push({name:'featuredList',params:{

          tit

        }})
      this.setContent({
        index,
        language:this.$i18n.locale
      })
    },
    async getList(){
      const news=await this.$api.list.getNews(this.$i18n.locale)
      if(news.code==0){
        const result = new Map()
        let i=0;
        for(const key in news.data){
          result.set(this.mapkey[i],news.data[key])
          i++
        }
        this.newsList=result
        console.log(this.newsList)
      }else {
        this.$message.warning('加载失败');
      }
    }
  },
  watch:{
    '$i18n.locale'(val){
      this.getList()
    }
  }
}
</script>
<style scoped>

  body{
    font-family: HELVETI1-1
  }
  .about-warp{padding-top: 50px;}
  .about-warp dl{-moz-box-shadow:0px 5px 10px #acb3b5; -webkit-box-shadow:0px 5px 10px #acb3b5; box-shadow:0px 5px 10px #acb3b5;margin-bottom: 50px;}
  .about-warp dt{flex: 1 1 0;padding: 0 40px 0px 20px;color: #383838;    flex-direction: column;}

  .about-warp dt p,.about-warp_c pre{font-size: 24px;}
  .about-warp dt p.tit{     padding: 44px 0 30px 0;font-weight: 600;font-size: 26px;}
  .about-warp dt h4{flex:1;    align-self: flex-end;align-items: flex-end;padding-bottom: 34px;}
  .about-warp dt h4 span{border-bottom: 1px solid #383838;padding: 4px 0;text-align: center;height: 40px;}
  .about-warp dt h4 span:hover,.about-warp_card dl dd h5:hover{color: #ffb900;border-bottom: 1px solid #ffb900;}
  .about-warp dd{width: 384px;}
  .about-warp dl:nth-of-type(even){flex-direction: row-reverse;}
  .about-warp_c{}
  .about-warp_c h4{padding: 66px 0px 36px 0;font-size: 36px;}
  .about-warp_c pre{color: #383838;line-height: 50px;}
  .about-warp_card{background: url("../assets/about5.jpg") no-repeat top center;width: 100%;height: 912px;margin: 60px auto 80px auto;}
  .about-warp_card dl{background: #fff;width: 730px;padding: 20px 0 20px 30px;color: #3e3e3e;margin-left: 10px;}
  .about-warp_card dl dt h4,.about-warp_c h4{color: #f9b705;}
  .about-warp_card dl dt p{padding: 24px 0;}
  .about-warp_card dl dd h5{border-bottom: 1px solid #1a1a1a;padding:0px  8px 4px 0;margin-bottom: 16px;display: inline-block;}
  .about-warp_bottom{background: #383838;padding:50px 0 40px 0;}
  .about-warp_bottom dl{width: 1158px;margin: 0 auto;justify-content: space-between; }
  .about-warp_bottom dd{}
  .about-warp_bottom dd input{outline: none;width: 340px;height:50px;border: 0;font-size: 20px;text-indent: 30px;}
  .about-warp_bottom dd p{width: 200px;height: 50px;line-height: 50px;background: #efd650;border-radius: 2px;margin-left: 26px;}
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ccc;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ccc;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ccc;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ccc;
  }
  .img-head h4{align-items: start;margin-top: 130px;}
</style>
