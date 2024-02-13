<template>
  <div id="main-content">
    <header>

    </header>
    <body>
      <div id="top-box">
        <div class="left-box">
          菜单
        </div>
        <div class="right-box">
          <div id="person-info">
            <div class="avatar">
              <img src="@/assets/img/avatar.jpg" alt="">
            </div>
            <div class="username">
              名字
            </div>
          </div>
          <div id="control-bar">
            控制栏
          </div>
        </div>
      </div>
      <div>
        <div id="search">
          <div class="search">
            <input type="text" class="input">
          </div>
        </div>
      </div>
      <div id="body-box">
        这里是页面内容主体
      </div>
    </body>
    <footer></footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

</script>

<style scoped lang='less'>
#main-content {
  background-color: @background;
  position: relative;

  #top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 0 20px;
    border: 2px solid #000;

    .left-box {
      border: 1px solid #000;
      height: 5vh;
      width: 50px;
    }

    .right-box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      #person-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .avatar {
          width: 40px;
          height: 40px;
          
          img {
            width: 100%;
            height: 100%;
          }
        }
  
        .username {
          border: 1px solid #000;
        }
      }
    }
  
  }

  #search {
    position: fixed;
    top: 80px;
    width: 100%;
    margin-bottom: 10px;
    z-index: 0;
    display: flex;
    justify-content: center;
    


    border: 2px solid #000;
    background-color: skyblue;

    .search {
      display: flex;
      line-height: 28px;
      align-items: center;
      position: relative;
      max-width: 30vw;
      height: 40px;

      .input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;
      }
  
      .input::placeholder {
        color: #9e9ea7;
      }
  
      .input:focus, input:hover {
        outline: none;
        border-color: rgba(234,76,137,0.4);
        background-color: #fff;
        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
      }
  
      .icon {
        position: absolute;
        left: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  #body-box {
    width: 90%;
    height: 1000px;
    margin: 0 auto;
    z-index: 1;
    position: absolute;
    top: 200px;
    left: 5%;


    
    border: 2px solid #000;
    background-color: aqua;
  }
}
</style>