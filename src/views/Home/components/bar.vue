<template>
  <div class="bar-box">
    <el-row :gutter="50" class="row">
      <el-col :span="6" class="avatar-box">
        <div class="avatar-outer">
          <div class="avatar-inner">
            <img src="@/assets/img/avatar.jpg" alt="">
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="component "></div>
      </el-col>
      <el-col :span="6">
        <div class="component "></div>
      </el-col>
      <el-col :span="6">
        <div class="component "></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="18" :offset="6">
        <div class="search">
          <div class="search-left">
            <span class="iconfont icon-baidu"></span>
            <span class="iconfont icon-jiantou"></span>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入要搜索的内容">
          </div>
          <div class="search-right">
            <span class="iconfont  icon-Magnifier"></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>

<style scoped lang='less'>
.bar-box {
  
  .avatar-box {
    display: flex;
    justify-content: flex-end;

    .avatar-outer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #e0e0e0;
      box-shadow:  10px 10px 20px #b3b3b3,
                  -10px -10px 20px #ffffff;
    
      .avatar-inner {
        width: 108px;
        height: 108px;
        border-radius: 50%;
    
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
  
  .search {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 60vw;
    min-width: 40vw;
    height: 40px;
    padding: 12px;
    border-radius: 12px;
    // border: 1.5px solid lightgrey;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    // box-shadow: 0px 0px 20px -18px;
    box-shadow:  10px 10px 20px #bebebe,
                -10px -10px 20px #ffffff;
  
    .search-left {
      min-width: 50px;
      line-height: 28px;
      font-size: 14px;
      color: @textFont;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  
      .icon-baidu {
        font-size: 18px;
        margin: 0 5px;
      }
  
      .icon-jiantou {
        font-size: 10px;
      }
    }
  
    .input {
      width: 100%;
  
      input {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border: 0;
        padding: 0;
        outline: none;
        font-size: 14px;
        color: @titleFont;
        background-color: @background;
      }
    }
  
    .search-right {
      min-width: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
  
      .iconfont {
        font-size: 20px;
        color: @textFont;
      }
    }
  }
  
  .search:active {
    transform: scale(0.97);
  }

  .row {
    margin-bottom: 60px;
  }

  .component {
    width: 200px;
    height: 100px;
    border-radius: 30px;
    background: @background;
    box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
  }
}
</style>