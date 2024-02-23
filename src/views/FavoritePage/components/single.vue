<template>
  <div>
    <div class="favorite-title">
      <div class="title">{{ favoriteList.label }}</div>
      <div class="icon-bianji iconfont"></div>
    </div>
    <div class="favorites-box">
      <div class="favorite-box main-box" v-for="item in favoriteList.favorites" :key="item.id">
        <div class="avatar-box">
          <img src="https://www.baidu.com/favicon.ico" alt="" />
        </div>
        <div class="text-box">
          <div class="text-top">
            <div class="text-top-right">{{item.title}}</div>
            <div class="text-top-left">
              <div class="point favorite">
                <span class="icon-shoucang iconfont"></span>
              </div>
              <div class="point edit">
                <span class="icon-bianji iconfont"></span>
              </div>
              <div class="point delete">
                <span class="icon-shanchu iconfont"></span>
              </div>
            </div>
          </div>
          <div class="text-bottom">
            <div class="text-direction">
              {{item.description}}
            </div>
          </div>
        </div>
      </div>
      <div class="favorite-box add-box">
        <span class="icon-add iconfont"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineProps(["favoriteList"]);

</script>

<style lang="less" scoped>

.favorite-title {
  width: 100%;
  min-width: 100px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  
  .title {
    font-size: 18px;
    font-family: 'ErZhiYuan', sans-serif;
    font-style: italic;
    color: @titleFont;
    margin-right: 10px;
  }

  .icon-bianji {
    opacity: 0;
    font-size: 14px;
    transition: opacity 0.7s ease, transform 0.5s ease;

    &:hover {
      font-weight: 600;
      color: @edit;
      transform: scale(1.2);
    }
  }

  &:hover {

    .icon-bianji {
      opacity: 1;
    }
  }
}

.favorites-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  .favorite-box {
    width: 210px;
    height: 80px;
    padding: 10px;
    margin: 10px 15px;
    border-radius: 10px;
    background: @background;
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar-box {
      width: 50px;
      height: 50px;
      margin-right: 10px;

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    .text-box {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .text-top {
        width: 130px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text-top-right {
          width: 80px;
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .text-top-left {
          width: 50px;
          display: flex;
          flex-direction: row;

          .point {
            width: 12px;
            height: 12px;
            margin-left: 4px;
            border-radius: 50%;
            text-align: center;
            transition: transform 0.5s ease;

            .iconfont {
              opacity: 0;
              font-size: 9px !important;
              line-height: 12px;
              display: flex;
              justify-content: center;
              align-content: center;
              transition: opacity 0.5s ease;
            }

            &:hover {
              transform: scale(1.6);

              .iconfont {
                opacity: 1;
              }
            }
          }

          .delete {
            background-color: @delete;
          }

          .favorite {
            background-color: @favorite;
          }

          .edit {
            background-color: @edit;
          }
        }
      }

      .text-bottom {
        width: 120px;
        height: 40px;
        padding: 5px 0;
        color: @textFont;

        .text-direction {
          font-size: 11px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .main-box {
    transition: transform 0.7s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  .add-box {
    opacity: 0;
    box-shadow: none;
    margin: auto 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: box-shadow 0.7s ease, opacity 0.7s ease;
    display: flex;
    justify-content: center;
    align-content: center;

    &:hover {
      box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
      
      .icon-add {
        opacity: 1;
      }
    }

    .icon-add {
      opacity: 0.3;
      font-size: 26px;
      transition: opacity 0.7s ease;
    }
  }

  &:hover {

    .add-box {
      opacity: 1;
    }
  }
}
</style>