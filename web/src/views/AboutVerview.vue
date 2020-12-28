<template>
  <div>
    <div class="img-head">
      <h4>{{$t('overviewTit')}}</h4>
      <img src="../assets/a1.jpg" w-1/>
    </div>
    <div class="about-warp" auto>
      <div class="over-view">
        <p fz-26 c-383838 h-p>
          {{$t('overview.tit1')}}
        </p>

        <dl flex>
          <dt>
            <img src="../assets/a2.jpg" alt="" w-1 h-1>
          </dt>
          <dd c-383838 flex-column flex>
            <h4 h-b> {{$t('overview.tit2')}}</h4>
            <div class="cont" flex>
              <p h-p fz-26>
                {{$t('overview.tit3')}}
              </p>
            </div>
          </dd>
        </dl>


      </div>
      <div class="over-view2" v-for="(items,indexs) in  $t('overviewArr')" :key="indexs + '-only'">
        <h4 h-b fz-28>{{items.tit}}</h4>
        <p h-p fz-24>{{items.cont}}
        </p>
      </div>



      <div class="over-view3">
        <h4 h-b fz-50 c-383838 center>{{$t('overview.tit4')}}</h4>
        <dl>
          <dt center c-f9b705 fz-30>{{$t('overview.tit5')}}</dt>
          <dd flex align-center>
            <p fz-26>
              {{$t('overview.tit6')}}
            </p>
            <img src="../assets/a3.jpg" alt="">
          </dd>
        </dl>
      </div>

      <dl class="over-view4" flex>
        <dt c-383838>
          <h4 h-b fz-50 center w-1>{{$t('overview.tit7')}}</h4>
          <p fz-24 h-p>{{$t('overview.tit8')}}</p>
        </dt>
        <dd>
          <img src="../assets/a4.jpg" alt="" w-1 h-1>
        </dd>
      </dl>

      <div class="over-view2" v-for="(item,index) in  $t('overviewArr2')" :key="index">
        <h4 h-b fz-28>{{item.tit}}</h4>
        <p h-p fz-24>{{item.cont}}
        </p>
      </div>

    </div>
  </div>

</template>

<script>
export default {
name: "AboutVerview",
  data(){
    return{
      show:false,
      tit:''
    }
  },
  created(){
  console.log(this.$t('overviewArr2'))
  },
  watch:{
    '$route.params.tit'(val){
      console.log(val)
      this.tit=val
    }
  }
}
</script>

<style>


</style>