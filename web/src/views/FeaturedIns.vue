<template>
  <div style="margin-bottom: 50px;">
    <div class="img-head">
      <h4>{{$t('ins')}}</h4>
      <img src="../assets/ins.jpg" w-1/>
    </div>


    <div class="feat" w1200 v-for="[label, value] in newsList" :key="label">
      <a-skeleton active v-if="loading"/>
      <dl flex
          auto
        v-else
      >
        <dt>
          <img :src="value.img" alt="">
        </dt>
        <dd fz-26 c-383838 flex>
          <h4 c-383838 bold>
            {{value.title}}
          </h4>


          <p v-html="value.brief"></p>
          <span bold fz-26 c-p @click="goList(value.title,value.content,label)"> <i>{{$t('content.btn')}}</i></span>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "FeaturedIns",
  data() {
    return{
      newsList:{},
      mapkey:[10,20,30],
      banner:[],
      loading:true
    }
  },
  async created(){
    console.log(this.$i18n.locale)
    this.getList()
    const data=await this.$api.list.getBanner()
    if(data.code==0){
      this.banner=data.data
      this.loading=false
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
.ant-carousel >>> .slick-slide {
  height: auto;
}

.feat{border-bottom: 1px solid #626262;}
.feat dl{width: 1140px;padding-top: 70px;padding-bottom: 40px;}
.feat dt img{width: 342px;height:202px; }
.feat dd{margin-left: 28px;flex-direction: column;}
.feat dd h4{line-height: 70px;font-family: HelveticaBold;}
.feat dd p{line-height: 36px;font-family: HelveticaLig;}
.feat dd span{    flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: flex-end;}
.feat dd span i{border-bottom: 1px solid transparent;padding: 0 4px;}
.feat dd span i:hover{color: #ffb900;border-bottom: 1px solid #ffb900;}
</style>