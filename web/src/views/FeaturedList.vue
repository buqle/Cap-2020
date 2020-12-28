<template>
  <div style="padding-bottom: 50px;">
    <div class="img-head">
      <h4>{{$t('ins')}}</h4>
      <img src="../assets/ins.jpg" w-1/>
    </div>
    <div class="cont" auto c-383838>
      <h4 fz-28 h-b>{{localData.title}}</h4>
      <p fz-24 h-p v-html="localData.content">

      </p>

    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'


export default {
name: "FeaturedList",
  methods: {
    ...mapActions(['setContent']),
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    async getCont(){
      const news=await this.$api.list.getNews(this.$i18n.locale)
      if(news.code==0){
        this.localData=news.data[this.index]
      }
      let tit = this.localData.title
          .replace(/\=/g, "%3D")
          .replace(/\+/g, "=")
          .replace(/[\s]/g, "-")
          .replace(/\?/g, "")
          .replace(/\#/g, "?")
          .replace(/\&/g, "&");
      this. $router.push({name:'featuredList',params:{

          tit

        }})
    }
  },
  data(){
    return{
      localData:{}
    }
  },
  computed:{
    ...mapGetters(['content','index'])
  },
   created(){
     this.getCont()
  },
  watch:{
  '$i18n.locale'(){
    this.getCont()
  }

  }
}
</script>

<style scoped>
  .cont{width: 1152px;}
  .cont h4{padding: 100px 0 40px 0;font-family: HelveticaBold;}
  .cont p{line-height: 44px;font-size: 24px;margin-top: 20px;font-family: HelveticaLig;}
</style>