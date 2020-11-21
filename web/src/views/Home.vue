<template>
  <div>
    <div class="banner">
      <img src="../assets/banner.jpg" w-1/>
    </div>
    <div flex class="borders" w-1></div>

    <div class="h-img">
      <div w1200 style="padding-top: 120px;">
        <div class="pre-l">
          <pre>ACQUACAP offers all popular instruments, competitive prices, and ultra-fast market execution for you to excel the market. You may get access to the best investment opportunities all over the world just with a click of your finger. Furthermore, no matter what problems you may encounter during the trading, our professional multilingual support team is available 24/5 to assist you.</pre>
          <strong>Ready to get in the market?</strong>

          <div class="button btt">
            <router-link target="_blank" :to="{path:'/down'}">
              <b>DOWNLOAD THE PLATFORM</b>
            </router-link>

          </div>
        </div>
      </div>
    </div>

    <div class="power-warp">
      <p  text-center ><b>POWERFUL PARTNERSHIP PROGRAMMES</b></p>
      <div w1200>
        <img src="../assets/pic.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
