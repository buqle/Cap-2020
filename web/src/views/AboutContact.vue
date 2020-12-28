<template>
  <div>
    <div class="img-head">
      <h4>{{$t('overviewTit2')}}</h4>
      <img src="../assets/a1.jpg" w-1/>
    </div>
    <div class="about-warp" auto>
      <dl class="over-view5" c-383838>
        <dt h-b>{{$t('contact.tit')}}</dt>
        <dd>
          <p h-b fz-24>{{$t('contact.con1')}}</p>
          <h4 h-b fz-28>Email: info@acquacap.com</h4>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
name: "AboutContact"
}
</script>

<style scoped>
.over-view5{padding: 100px 20px;}
.over-view5 dt{padding-bottom: 30px;font-size: 38px;}
.over-view5 dd p{line-height: 46px;padding-bottom: 50px;}
</style>