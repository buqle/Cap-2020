<template>
   <div>
       <div class="head-bar" flex align-center auto c-p v-if="$route.path!='/about'">
           <router-link target="_blank" :to="{path:'/'}">
               <img src="../assets/logo.png">
           </router-link>

       </div>

       <div class="head-bar" flex align-center auto c-p v-else>
           <router-link target="_blank" :to="{path:'/'}">
               <img src="../assets/logo.png">
           </router-link>
          <p flex>
              <span>FEATURED INSIGHTS</span>
              <span>PRESS RELEASE</span>
              <span>CAREERS</span>
              <a-dropdown placement="bottomCenter">
              <span>ABOUT</span>
                  <div slot="overlay" c-383838 class="overlay">
                    <span c-p>Overview</span>
                    <span c-p>Contact</span>
                  </div>
              </a-dropdown>
          </p>
       </div>

   </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
.overlay{font-size: 21px;background: #fff;padding: 20px 40px 100px 30px;}
    .overlay span{display: block;margin-top: 20px;}
</style>
