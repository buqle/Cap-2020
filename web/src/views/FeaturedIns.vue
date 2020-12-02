<template>
  <div style="margin-bottom: 50px;">

    <a-carousel :after-change="onChange">
      <img src="../assets/ins.jpg" w-1/>
    </a-carousel>

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
            <template v-if="value.title&&value.title.length>=50">
              <a-tooltip placement="top">
                <template slot="title">
                  {{value.title}}
                </template>
                <div>{{value.title|readMore(50,'...')}}</div>
              </a-tooltip>

            </template>
            <template v-else>
              {{value.title}}
            </template>
          </h4>


          <template v-if="value.brief&&value.brief.length>=150">
            <p v-html="value.brief|readMore(150,'...')">
            </p>
          </template>
          <template v-else>
            <p v-html="value.brief"></p>
          </template>
          <span bold fz-26 c-p @click="goList(value.title)"> <i>Read More</i></span>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";

export default {
  name: "FeaturedIns",
  data() {
    return{
      arr:[
        {
          tit:'How to Deal with Presidential Transition?',
          cont:'As the new administration prepares to take office, what should investors be prepared for the coming uncertain time?',
          img:about1
        },
        {
          tit:'Are Tech Stocks Being Dumped?',
          cont:'Some technology stocks that have risen on the back of the epidemic took a hit after Pfizer announced the vaccine was more than 90 per cent effective.',
          img:about2
        },
        {
          tit:'Energy Market Under the Process of De-Carbonization',
          cont:'Despite the coVID-19 outbreak in 2020, shareholder participation on climate change issues reached a new high, especially in Europe.',
          img:about3
        }
      ],
      newsList:[],
      mapkey:[10,20,30],
      banner:[],
      loading:true
    }
  },
  async created(){
    this.loading=true
    const news=await this.$api.list.getNews()
    if(news.code==0){
      const result = new Map()
      let i=0;
      for(const key in news.data){
        result.set(this.mapkey[i],news.data[key])
        i++
      }
      this.newsList=result
      this.loading=false
    }
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    goList(tit){
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
    }
  },
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