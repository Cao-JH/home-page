<template>
  <div id="main-content">
    <div id="top-box">
      
    </div>
    <div id="search">
      <Bar />
    </div>
    <div id="body-box">
      <Content />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Bar from './components/bar.vue'
import Content from './components/content.vue'

</script>

<style scoped lang='less'>
#main-content {
  background: @background;
  padding: 40px 0;
  
  // #top-box {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   height: 40px;
  //   width: 100%;
  //   padding: 0 20px;

  //   .left-box {
  //     border: 1px solid #000;
  //     height: 5vh;
  //     width: 50px;
  //   }

  //   .right-box {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;

  //     #person-info {
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;

  //       .avatar {
  //         width: 40px;
  //         height: 40px;
          
  //         img {
  //           width: 100%;
  //           height: 100%;
  //         }
  //       }
  
  //       .username {
  //         border: 1px solid #000;
  //       }
  //     }
  //   }
  
  // }

  #search {
    width: 100%;
  }

  #body-box {
    width: 100%;
  }
}
</style>