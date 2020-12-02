<template>
  <div class="press">
    <a-carousel>
      <img src="../assets/press_release.jpg" w-1/>
    </a-carousel>

    <dl auto v-for="(item,index) in arr" :key="index" flex>
      <dt>
        <img :src="item.img" w-1 h-1>
      </dt>
      <dd fz-28 c-383838 flex-column flex>
        <h4 h-b>{{item.tit}}</h4>
        <div class="cont" flex>
          <p h-p>{{item.cont}}</p>
        </div>
      </dd>
    </dl>

  </div>

</template>

<script>
import press1 from "@/assets/press1.jpg";
import press2 from "@/assets/press2.jpg";
export default {
name: "PressView",
  data(){
    return{
      arr:[
        {
          tit:'Change the Future of Our Children',
          cont:'We worked with child welfare agencies to design innovative solutions using our expertise in data analysis and marketing. At the same time, we enlisted innovators from other fields to work with us on ways to safely reduce the number of homeless children.',
          img:press1
        },
        {
          tit:'Business Will Never Be the Same as Before',
          cont:'While uncertainty from the COVID-19 crisis continues to circulate around the world, one thing has become clear: business has forever changed. Is it too late to change? ACQUACAP recently discussed with the media the long-term impact of the COVID-19 on the company\'s operations.',
          img:press2
        }
      ]
    }
  }
}
</script>

<style scoped>
.press{padding-bottom: 90px;}
  .press dl{width: 1160px;padding-top: 100px;}
  .press dt{width: 486px;height: 352px;flex: 0 0 486px;}
  .press dd{margin-left: 36px;}
  .press dd h4{line-height: 24px;}
  .press dd p{font-size: 26px;line-height: 50px;}
  .press dd .cont{flex: 1 1 0;align-items: flex-end;}
  dl:nth-of-type(even){flex-direction: row-reverse;}
</style>