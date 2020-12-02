<template>
  <div>
    <a-carousel>
      <img src="../assets/a1.jpg" w-1/>
    </a-carousel>
    <div class="about-warp" auto>
      <template v-if="$route.params.tit=='overview'">
        <div class="over-view">
          <p fz-26 c-383838 h-p>
            ACQUACAP is one of the world’s leading global investment business. We serve institutional investors around the world. We strive to create great value for our investors through our diversified solutions. Our efforts have supported the development of hundreds of enterprises and local economies.
          </p>

          <dl flex>
            <dt>
              <img src="../assets/a2.jpg" alt="" w-1 h-1>
            </dt>
            <dd c-383838 flex-column flex>
              <h4 h-b>What We Do</h4>
              <div class="cont" flex>
                <p h-p fz-26>
                  We invest various alternative asset classes on behalf of large institutions and pension funds. Our mission is to create great value for our investors by carefully managing their capital.
                </p>
              </div>
            </dd>
          </dl>


        </div>
        <div class="over-view2">
          <h4 h-b fz-28>Investing Globally</h4>
          <p h-p fz-24>The classes in which we invest include private equity, growth equity, hedge funds, debt, real estate and other alternative assets.
          </p>
        </div>
        <div class="over-view2">
          <h4 h-b fz-28>Tailored Solutions</h4>
          <p h-p fz-24>We are constantly innovating into new strategies and solutions to provide better tailored services for our investors.
          </p>
        </div>
        <div class="over-view2">
          <h4 h-b fz-28>Better Performance</h4>
          <p h-p fz-24>We have always been seeking superior returns across an expanding range of asset classes and through all types of economic conditions.

          </p>
        </div>


        <div class="over-view3">
          <h4 h-b fz-50 c-383838 center>Principles</h4>
          <dl>
            <dt center c-f9b705 fz-30>Excellence · Integrity · Meticulosity · Innovation · Collaboration</dt>
            <dd flex align-center>
              <p fz-26>
                They are the core of ACQUACAP and a fundamental strength of our business. They define our culture and everything we do is guided by these principles.
              </p>
              <img src="../assets/a3.jpg" alt="">
            </dd>
          </dl>
        </div>

        <dl class="over-view4" flex>
          <dt c-383838>
            <h4 h-b fz-50 center w-1>Social Responsibility</h4>
            <p fz-24 h-p>ACQUACAP seek to make positive impact while serving our investors. We believe it is imperative to do good while doing well. </p>
          </dt>
          <dd>
            <img src="../assets/a4.jpg" alt="" w-1 h-1>
          </dd>
        </dl>

        <div class="over-view2">
          <h4 h-b fz-28>Empowering Hundreds of Enterprises</h4>
          <p h-p fz-24>With our excellent talent and flexible capital, we help companies solve numerous problems. In the meanwhile, we also provide resources that empower entrepreneurs to make a lasting economic impact.
          </p>
        </div>
        <div class="over-view2">
          <h4 h-b fz-28>Participating in community work</h4>
          <p h-p fz-24>Caring for the communities in which our people live and work is a long-term commitment that we take seriously. So we continue to contribute to the community through innovative projects and partnerships.
          </p>
        </div>
        <div class="over-view2">
          <h4 h-b fz-28>Reducing Environmental Impact</h4>
          <p h-p fz-24>We have a responsibility to leave a better planet for future generations. In our daily operations, we are committed to sustainable development. We strive to reduce carbon emissions and reduce office energy consumption through paperless offices and energy efficiency interventions.
          </p>
        </div>

      </template>
      <template v-else>
        <dl class="over-view5" c-383838>
          <dt h-b>Contact</dt>
          <dd>
            <p h-b fz-24>We are committed to creating value through customer oriented. Our global team is always ready to provide our investors with the highest quality multilingual support. If you have any questions, please don’t hesitate to tell us.</p>
            <h4 h-b fz-28>Email: info@acquacap.com</h4>
          </dd>
        </dl>
      </template>
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
  console.log(this.$route)
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
.about-warp{width: 1120px;padding-bottom: 90px;}
.over-view{line-height: 40px;padding-top: 40px;}
.over-view dl{padding-top: 60px;}
.over-view dt{flex:0 0 434px;width: 434px;height: 264px;margin-right: 30px;}
.over-view dd h4{font-size: 50px;}
.over-view dd p{line-height: 50px;}
.over-view dd .cont{flex: 1 1 0;align-items: flex-end;}
.over-view2{padding-top: 46px;}
.over-view2 h4{color: #f9b705;}
.over-view2 p{line-height: 44px;}
.over-view3{padding: 80px 0;}
.over-view3 dl{justify-content: space-between;}
.over-view3 dl dt{padding:50px 0;}
.over-view3 dl dd p{
  margin-right: 60px;line-height: 66px;
}
.over-view dl dd img{width: 522px;height: 282px;flex:0 0 584px;}
.over-view4{}
.over-view4 dt{margin-right: 40px;}
.over-view4 dt h4{padding-bottom: 50px;line-height: 40px;}
.over-view4 dt p{line-height: 50px;}
.over-view4 dd{width: 430px;height: 274px;flex: 0 0 430px;}
.over-view5{padding: 100px 20px;}
.over-view5 dt{padding-bottom: 30px;font-size: 38px;}
.over-view5 dd p{line-height: 46px;padding-bottom: 50px;}
</style>