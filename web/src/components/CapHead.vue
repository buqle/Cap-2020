<template>
   <div>


       <div class="head-bar" flex align-center auto c-p>
           <router-link :to="{path:'/'}">
               <img src="../assets/logo.png">
           </router-link>
          <p flex>

            <router-link
                tag="span"
                v-for="(item,index) in nav"
                :key="index"
                :to="index!=3?item.path:{ name: 'about', params: { tit: 'overview' }}"
                :class="{active:$route.path==item.path}"
                cursor-p
            >
              <template v-if="index==3">
                <a-dropdown placement="bottomCenter">
                  <i>About</i>
                  <div slot="overlay" c-383838 class="overlay">
                    <span c-p v-for="(ii,inde) in item.child" :key="inde" c-p @click="goView(item.path,ii.tit)">{{ii.title}}</span>
                  </div>
                </a-dropdown>
              </template>
              <template v-else>
                {{item.title}}
              </template>
            </router-link>

          </p>
       </div>

   </div>
</template>

<script>
    export default {
        name: "Top",
      data(){
          return{
            nav:[
              {
                title:'Featured Insights',
                path:'/featured-insights',
              },
              {
                title:'Press Release',
                path:'/press-release',
              },
              {
                title:'Careers',
                path: '/careers',
              },
              {
                title:'About',
                path: '/',
                child:[
                  {
                    title:'Overview',
                    tit: 'overview'
                  },{
                    title:'Contact',
                    tit:'contact'
                  }
                ]
              },
            ]
          }
      },
      methods:{
          goView(path,query){
            //this.nav[3].path==r
            this.$router.push({name:'about',params:{tit:query}})
          }
      }
    }
</script>

<style scoped>
.overlay{font-size: 21px;background: #fff;padding: 20px 40px 100px 30px;}
    .overlay span{display: block;margin-top: 20px;}
</style>
