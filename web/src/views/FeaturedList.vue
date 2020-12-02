<template>
  <div style="padding-bottom: 50px;">
    <a-carousel :after-change="onChange">
      <img src="../assets/about.jpg" w-1/>
    </a-carousel>
    <div class="cont" auto c-383838>
      <h4 fz-28 h-b>{{$route.params.tit}}</h4>
      <p fz-24 h-p>
        After Pfizer's announcement that the vaccine was more than 90 percent effective, not only did the three major U.S. stock indexes respond spectacularly, but the reaction among individual stocks was fierce. Some stocks that rely on the economic cycle rose, while some technology stocks that have benefited from the epidemic took a hit. Even some argue that "U.S. stocks don't need tech stocks to set records".
      </p>
      <p fz-24 h-p>
        The Invesco QQQ Trust ETF, which tracks the Nasdaq 100, is dominated by technology stocks. The top 10 stocks include Apple, Microsoft, Amazon, Facebook, Alphabet, Tesla, Nvidia, Adobe and PayPal. In the third quarter, FANNG were widely reducing, although QQQ remained popular.
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "FeaturedList",
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
  watch:{
    '$route.params.tit'(val){
      console.log(val)
      this.tit=val
    }
  }
}
</script>

<style scoped>
  .cont{width: 1152px;}
  .cont h4{padding: 100px 0 40px 0;font-family: HelveticaBold;}
  .cont p{line-height: 44px;font-size: 24px;margin-top: 20px;font-family: HelveticaLig;}
</style>