<template>
  <div class="press">
    <div class="img-head">
      <h4>{{$t('press')}}</h4>
      <img src="../assets/press_release.jpg" w-1/>
    </div>

    <dl auto v-for="(item,index) in $t('arr')" :key="index" flex :class="$t('className')">
      <dt>
        <img :src="imgArr[index]" w-1 h-1>
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
      imgArr:[press1,press2],

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
  .press .zh dd p{line-height: 70px;}
  .press .other dd h4{font-size: 26px;}
  .press .other dd p{font-size: 24px;}
  .press dd .cont{flex: 1 1 0;align-items: flex-end;}
  dl:nth-of-type(even){flex-direction: row-reverse;}
</style>