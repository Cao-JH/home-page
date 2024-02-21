<template>
  <div id="favorite-content">
    <draggable class="list-group" 
      :move="onMoveCallback"
      v-bind="dragOptions"
      @change="log"
      @start="isDragging = true"
      @end="isDragging = false">
      <template #item="{dragOptions}">
        <div>
          <div class="favorite-boxs">
            <div class="favorite-title">
              <span class="title">这是标题</span>
              <div></div>
            </div>
            <div class="favorite-box">
              <div class="avatar-box">
                <img src="@/assets/img/avatar.jpg" alt="" />
              </div>
              <div class="text-box">
                <div class="text-top">
                  <div class="text-top-right">最常222123213去</div>
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
                    记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="favorite-boxs">
            <div class="favorite-title">
              <span class="title">这是标题</span>
              <div></div>
            </div>
            <div class="favorite-box">
              <div class="avatar-box">
                <img src="@/assets/img/avatar.jpg" alt="" />
              </div>
              <div class="text-box">
                <div class="text-top">
                  <div class="text-top-right">最常222123213去</div>
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
                    记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import draggable from 'vuedraggable';

const dragOptions = computed(() => { // 拖拽动画效果
  return {
    animation: 0,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost',
  }
})

const log = function(evt) {
  window.console.log(evt);
}
const onMoveCallback = (evt, originalEvent) => {
  console.log(evt)
  // this.currentTask = evt.draggedContext.element
  // this.current = +evt.to.dataset.index
}

</script>

<style scoped lang="less">
#favorite-content {
  padding: 20px 30px;

  .favorite-boxs {
    margin: 0 0 20px;

    .favorite-title {
      width: 100%;
      height: 24px;
      margin-bottom: 10px;
      font-size: 18px;
      font-family: 'ErZhiYuan', sans-serif;
      font-style: italic;
      color: @titleFont;
    }
  
    .favorite-box {
      width: 210px;
      height: 80px;
      padding: 10px;
      border-radius: 10px;
      background: @background;
      box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
      display: flex;
      align-items: center;
      transition: transform 0.5s ease;
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
  
      &:hover {
        transform: scale(1.03);
      }
    }
  }
}
</style>
