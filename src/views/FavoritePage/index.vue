<template>
  <div id="favorite-content">
    <div class="favorite-box">
      <div class="avatar-box">
        <img src="@/assets/img/avatar.jpg" alt="" />
      </div>
      <div class="text-box">
        <div class="text-top">
          <div class="text-top-right">最常222123213去</div>
          <div class="text-top-left">
            <div class="point favorite"></div>
            <div class="point edit"></div>
            <div class="point delete"></div>
          </div>
        </div>
        <div class="text-bottom">
          <div class="text-direction">
            记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style scoped lang="less">
#favorite-content {
  padding: 20px;

  .favorite-box {
    width: 200px;
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    background: @background;
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
    display: flex;
    align-items: center;

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
        width: 120px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text-top-right {
          max-width: 80px;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .text-top-left {
          width: 40px;
          display: flex;
          flex-direction: row;

          .point {
            width: 9px;
            height: 9px;
            margin-left: 4px;
            border-radius: 50%;
            background-color: #000;
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
          font-size: 12px;
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
}
</style>
