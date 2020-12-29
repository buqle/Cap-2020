<template>
   <div>

       <div class="head-bar" flex align-center auto c-p>
           <router-link :to="{path:'/'}">
               <img src="../assets/logo.png">
           </router-link>
          <p flex style="margin-top: 10px">

            <router-link
                tag="span"
                v-for="(item,index) in $t('nav')"
                :key="index"
                :to="index!=3?item.path:{ name: 'about'}"
                :class="{active:$route.path==item.path}"
                cursor-p
            >
              <template v-if="index==3">
                <a-dropdown placement="bottomCenter">
                  <i>{{item.title}}</i>
                  <div slot="overlay" c-383838 class="overlay">
                    <span c-p v-for="(ii,inde) in item.child" :key="inde" c-p @click="goView( ii.path)">{{ii.title}}</span>
                  </div>
                </a-dropdown>
              </template>
              <template v-else>
                {{item.title}}
              </template>
            </router-link>

          </p>

<!--         <div class="lang" style="background: #fff;">
           <a-dropdown placement="bottomCenter">
             <span>{{language}}</span>

             <div slot="overlay" c-383838 class="overlay-warp">
               <p v-for="(lang,indexs) in lang" @click="changeLang(lang)" :key="indexs" c-p>
                 {{lang.title}}
               </p>
&lt;!&ndash;               <button @click="ch">中文</button>
               <button @click="en">English</button>
               <button @click="other">English</button>&ndash;&gt;
             </div>

           </a-dropdown>
         </div>-->

       </div>

   </div>
</template>

<script>
    export default {
        name: "Top",
      data(){
          return{
            lang:[
              {
                title:'English',
                lang:'en'
              },
              {
                title:'简体中文',
                lang:'zh'
              },
              {
                title:'Malay',
                lang:'my'
              }
            ],
            language:'English'
          }
      },
      methods:{
          goView(path){
            //this.nav[3].path==r
            console.log(path)
            this.$router.push({path})
          },
        changeLang(item){
            console.log(item.lang)
          this.$i18n.locale = item.lang
          this.language=item.title
        },
      },
      watch:{
          '$i18n.locale'(val){
              this.language=val=='zh'?'简体中文':val=='en'?'English':'Malay'
          }
      }
    }
</script>

<style scoped>
    .overlay{padding: 20px 40px 100px 30px;font-size: 21px;}
    .overlay-warp,.overlay{background: #fff;margin-top: 20px;}
    .lang{border: 1px solid #383838;
      width: 100px;
      height: 30px;
      border-radius: 19px;
      display: flex;
      justify-content: center;
      align-items: center;font-size: 16px;}
    .overlay-warp{padding: 20px 20px 20px 20px;font-size: 18px;}
    .overlay-warp p{margin-top: 8px;}
    .overlay span{display: block;margin-top: 20px;}
</style>
