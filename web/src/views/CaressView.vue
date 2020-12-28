<template>
  <div c-383838>
    <div class="img-head">
      <h4>{{$t('join.bantit')}}</h4>
      <img src="../assets/careers.jpg" w-1/>
    </div>
    <dl auto>
      <dt h-p fz-24 class="caress-p1">
        {{$t('join.tit1')}}
      </dt>
      <dd fz-24>
        <h4 h-b style="font-size: 36px;">{{$t('join.tit2')}}</h4>
        <p>{{$t('join.tit3')}}</p>
        <p>{{$t('join.tit4')}}
        </p>
        <p>
          {{$t('join.tit5')}}
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
name: "CaressView"
}
</script>

<style scoped>
  .caress-p1{line-height: 52px;}
  dl{width: 1130px;padding-bottom: 100px;}
  dt{margin: 60px 0 70px 0;}
  dd{}
  dd p{line-height: 40px;padding-top: 40px;}
</style>