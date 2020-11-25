<template>
  <div class="about">
    <img src="../assets/about.jpg" w-1/>

    <div class="about-warp" w-1136>
      <dl flex
        v-for="(item,index) in arr" :key="index"
      >
        <dt>
          <p class="tit" fz-26>
            {{item.tit}}
          </p>
          <p style="line-height: 44px;">{{item.cont}}</p>
          <h4>
            <span c-p>Read More</span>
          </h4>
        </dt>
        <dd>
          <!--<img src="../assets/about1.jpg" width="100%" height="100%"/>-->
          <!--<img src="`../assets/about${index+1}.jpg`" width="100%" height="100%"/>-->
          <img :src="item.img" width="100%" height="100%"/>
        </dd>
      </dl>
    </div>

    <img src="../assets/about4.jpg" w-1/>

    <div class="about-warp_c" w-1136>
      <h4 center fz-28 center bold>What We Do</h4>
      <pre>ACQUACAP is a leading global investment business investing capital on behalf of large institutions and pension funds. We strive to create great value for our investors by carefully managing their capital. The classes in which we invest include private equity, hedge funds, real estate and other alternative assets. Our efforts have won the recognition of investors and, more importantly, have supported the development of hundreds of enterprises.</pre>
    </div>

    <div class="about-warp_card" flex>
     <div w-1136 style="align-self: flex-end;">
       <dl>
         <dt fz-26>
           <h4 fz-30>
             Join ACQUACAP
           </h4>
           <p>Come to ACQUACAP,</p>
           <p style="padding-top: 0">truly be your personal best with our best team.</p>
         </dt>
         <dd>
           <h5 fz-26 c-p>
             Apply
           </h5>
           <br>
           <h5 fz-28 c-p>
             Discover ACQUACAP
           </h5>
         </dd>
       </dl>
     </div>
    </div>

   <!-- <div class="about-warp_bottom" w-1>
      <dl flex align-center>
        <dt fz-28 c-fff bold>Stay up to date with our latest insights</dt>
        <dd flex>
          <input type="text"  placeholder="E-mail Address">
          <p center c-fff fz-28 bold c-p>Subscribe</p>
        </dd>
    </div>-->
    <div style="background: #3e3e3e;height: 30px;"></div>

  </div>
</template>
<script>
  import about1 from '../assets/about1.jpg'
  import about2 from '../assets/about2.jpg'
  import about3 from '../assets/about3.jpg'
  export default{
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
        ]
      }
    }
  }
</script>
<style scoped>

  body{
    font-family: HELVETI1-1
  }
  .about-warp{padding-top: 150px;}
  .about-warp dl{-moz-box-shadow:0px 5px 10px #acb3b5; -webkit-box-shadow:0px 5px 10px #acb3b5; box-shadow:0px 5px 10px #acb3b5;margin-bottom: 60px;}
  .about-warp dt{flex: 1 1 0;padding: 0 40px 34px 20px;align-self: flex-end;color: #383838;}
  .about-warp dt h4{font-size: 28px;}
  .about-warp dt p,.about-warp_c h4{font-size: 30px;}
  .about-warp dt p.tit{     padding: 44px 0 30px 0;font-weight: 600;font-size: 26px;}
  .about-warp dt h4{text-align: right;}
  .about-warp dt h4 span{border-bottom: 1px solid #383838;padding: 4px;}
  .about-warp dt h4 span:hover,.about-warp_card dl dd h5:hover{color: #ffb900;border-bottom: 1px solid #ffb900;}
  .about-warp dd{width: 384px;}
  .about-warp dl:nth-of-type(even){flex-direction: row-reverse;}
  .about-warp_c{}
  .about-warp_c h4{padding: 26px 0px 16px 0;}
  .about-warp_c pre{color: #383838;font-size: 24px;line-height: 48px;}
  .about-warp_card{background: url("../assets/about5.jpg") no-repeat top center;width: 100%;height: 912px;margin: 60px auto 80px auto;}
  .about-warp_card dl{background: #fff;width: 730px;padding: 20px 0 20px 30px;color: #3e3e3e;margin-left: 10px;}
  .about-warp_card dl dt h4,.about-warp_c h4{color: #f9b705;}
  .about-warp_card dl dt p{padding: 24px 0;}
  .about-warp_card dl dd h5{border-bottom: 1px solid #1a1a1a;padding:0px  8px 4px 0;margin-bottom: 16px;display: inline-block;}
  .about-warp_bottom{background: #383838;padding:50px 0 40px 0;}
  .about-warp_bottom dl{width: 1158px;margin: 0 auto;justify-content: space-between; }
  .about-warp_bottom dd{}
  .about-warp_bottom dd input{outline: none;width: 340px;height:50px;border: 0;font-size: 20px;text-indent: 30px;}
  .about-warp_bottom dd p{width: 200px;height: 50px;line-height: 50px;background: #efd650;border-radius: 2px;margin-left: 26px;}
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ccc;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ccc;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ccc;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ccc;
  }
</style>
