<template>
  <div>
    <div class="img-head">
      <h4>
       <p flex flex-column>
        <span>{{$t('product1')}}</span>
         <span>{{$t('product2')}}</span>
       </p>
      </h4>
      <img src="../assets/pro.jpg" w-1/>
    </div>
    <div  class="press">
      <dl auto flex>
        <dt>
          <img :src="press1" w-1 h-1>
        </dt>
        <dd fz-28 c-383838 flex-column flex>
          <h4 h-b>{{$t('proCont.tit')}}</h4>
          <div class="cont" >
            <p h-p>{{$t('proCont.cont')}}</p>
            <p h-p>{{$t('proCont.cont2')}}</p>
          </div>
        </dd>
      </dl>
    </div>
    <h4 fz-28 c-383838 style="padding-bottom:50px;text-align: center;">Why Choose Them?</h4>
    <div class="card" w1200 flex>

      <dl v-for="(item,index) in $t('proviewArr')" :key="index" flex c-383838>
        <dt>
          {{item.tit}}
        </dt>
        <dd v-html="item.cont"></dd>
      </dl>
    </div>

    <div class="card-list">
      
    </div>

  </div>

</template>

<script>
import press1 from "@/assets/pro-img1.jpg";
import press2 from "@/assets/press2.jpg";
export default {
name: "PressView",
  data(){
    return{
      press1

    }
  }
}
</script>

<style scoped>
.press{padding-bottom: 90px;}
  .press dl{width: 1180px;padding-top: 100px;justify-content: space-between;}
  .press dt{width: 436px;height: 344px;flex: 0 0 436px;}
  .press dd{    width: 692px;}
  .press dd h4{line-height: 24px;margin-bottom: 10px;}
  .press dd p{font-size: 20px;line-height: 38px;padding-top:6px;}
  .press .zh dd p{line-height: 70px;}
  .press .other dd h4{font-size: 26px;}
  .press .other dd p{font-size: 24px;}
  .press dd .cont{flex: 1 1 0;align-items: flex-end;}
  dl:nth-of-type(even){flex-direction: row-reverse;}
.card{font-size: 19px;padding-bottom: 80px;}
  .card dt{text-align: center;}
  .card dl{width: 260px;border: 1px solid #070002;border-radius: 8px;padding: 32px 16px 32px 12px;flex-direction: column;line-height: 34px;margin-right: 28px;font-family: HelveticaLig;}
</style>