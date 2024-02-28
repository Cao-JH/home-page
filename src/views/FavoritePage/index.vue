<template>
  <div id="favorite-content">
    <draggable class="list-group" 
      :list="favoriteList"
      item-key="id"
      :animation="500"
      :forceFallback="true"
      @change="onMoveCallback"
      :move="getData"
      @start="isDragging = false"
      @end="isDragging = false">
      <template #item="{ element }">
        <div>
          <div class="favorite-boxs">
            <div class="favorite-title">
              <div class="title">{{ element.label }}</div>
              <div class="icon-bianji iconfont"></div>
            </div>
            <div class="favorites-box">
              <div class="favorite-box main-box" v-for="item in element.favorites" :key="item.id" @click="redirectTo(item)">
                <div class="avatar-box">
                  <img v-if="item.imgSrc !== ''" :src="item.imgSrc" alt="" />
                  <img v-else src="https://www.baidu.com/favicon.ico" alt="" />
                </div>
                <div class="text-box">
                  <div class="text-top">
                    <div class="text-top-right">{{item.title}}</div>
                    <div class="text-top-left">
                      <div class="point favorite" @click.stop="addFavorite(item)">
                        <span class="icon-shoucang iconfont"></span>
                      </div>
                      <div class="point edit" @click.stop="editFavorite(item)">
                        <span class="icon-bianji iconfont"></span>
                      </div>
                      <div class="point delete" @click.stop="deleteWeb(element.id, item.id)">
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
                <span class="icon-add iconfont" @click="showDialogHandle(element.id, 'add')"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
    <transition name="fade">
      <div class="dialog-content" v-if="showDialog">
        <div class="dialog-outer-box">
          <div class="dialog-title">{{ dialogOption.title }}</div>
          <div class="dialog-inner-box">
            <div class="dialog-top">
              <div class="d-avater">
                <img v-if="tempWebObj.imgSrc" :src="tempWebObj.imgSrc" />
                <span v-else></span>
              </div>
              <div class="d-info">
                <div class="info-url info">
                  <input placeholder="网站链接" v-model="tempWebObj.url" @change="getAvatarHandle" />
                </div>
                <div class="info-name info">
                  <input placeholder="网站名称" v-model="tempWebObj.title" />
                </div>
              </div>
            </div>
            <div class="dialog-bottom">
              <div class="d-desc">
                <textarea  placeholder="网站描述" v-model="tempWebObj.description" />
              </div>
              <div class="d-button">
                <button class="btn confirm" @click="confrimHandle">确认</button>
                <button class="btn cancel" @click="hiddenDialogHandle">取消</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable';

const favoriteList = ref([
  {
    index: 0,
    id: 'aaa',
    label: '这是标题1',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        url: 'www.baidu.com',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      },
      {
        id: 2,
        imgSrc: '',
        title: 'aaaa',
        description: 'vsdawdawd',
      },
      {
        id: 3,
        imgSrc: '',
        title: 'bbbb',
        description: 'adwa',
      },
      {
        id: 4,
        imgSrc: '',
        title: 'cccc',
        description: 'vsdawdawd',
      },
      {
        id: 5,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      },
      {
        id: 6,
        imgSrc: '',
        title: 'aaaa',
        description: 'vsdawdawd',
      },
      {
        id: 7,
        imgSrc: '',
        title: 'bbbb',
        description: 'adwa',
      },
      {
        id: 8,
        imgSrc: '',
        title: 'cccc',
        description: 'vsdawdawd',
      },
      {
        id: 9,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      },
      {
        id: 10,
        imgSrc: '',
        title: 'aaaa',
        description: 'vsdawdawd',
      },
      {
        id: 11,
        imgSrc: '',
        title: 'bbbb',
        description: 'adwa',
      },
      {
        id: 12,
        imgSrc: '',
        title: 'cccc',
        description: 'vsdawdawd',
      },
    ]
  },
  {
    index: 1,
    id: 'bbb',
    label: '这是标题2',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      }
    ]
  },
  {
    index: 2,
    id: 'ccc',
    label: '这是标题3',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      }
    ]
  },
  {
    index: 3,
    id: 'ccc',
    label: '这是标题4',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      }
    ]
  },
  {
    index: 4,
    id: 'ccc',
    label: '这是标题5',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      }
    ]
  },
  {
    index: 5,
    id: 'ccc',
    label: '这是标题6',
    favorites: [
      {
        id: 1,
        imgSrc: '',
        title: '最常222123213去',
        description: '记录卡恩SV老接口萨恩反馈拉我没拿到克拉妹那我蓝开拿饭卡里稳定卡位面',
      }
    ]
  },
])

const showDialog = ref(false);
const dialogOption = ref({
  title: '新增网站',
  type: 'add'
})

// 显示对话框
const showDialogHandle = (id, type) => {
  showDialog.value = true;
  tempWebObj.value.fatherId = id;
  if (type === 'add') {
    dialogOption.value.title = '新增网站';
  } else {
    dialogOption.value.title = '编辑网站';
  }
  dialogOption.value.type = type; // 修改对话框显示的内容
}
// 隐藏对话框
const hiddenDialogHandle = () => {
  showDialog.value = false;
  Object.assign(tempWebObj.value, webObj())
}

// 添加新的网站
const webObj = () => ({
  imgSrc: '',
  url: '',
  title: '',
  description: '',
  fatherId: '',
  id: '',
})
const tempWebObj = ref(webObj())
const confrimHandle = () => {
  // 校验内容
  if (!tempWebObj.value.url || !tempWebObj.value.title) return console.log("填写内容");
  if (dialogOption.value.type === 'add') {
    const index = favoriteList.value.findIndex(item => item.id === tempWebObj.value.fatherId);
    favoriteList.value[index].favorites.push(tempWebObj.value)
    hiddenDialogHandle();
  } else if (dialogOption.value.type === 'edit') {
    console.log('编辑了');
    hiddenDialogHandle();
  }
}

// 编辑网站
const editFavorite = (row) => {
  Object.assign(tempWebObj.value, row)
  showDialogHandle(row.id, 'edit')
}

// 获取网站图标
const getAvatarHandle = (event) => {
  const urlArr = event.target.value.split('.');
  if (urlArr[urlArr.length - 1] === 'com') {
    tempWebObj.value.imgSrc = 'http://' + event.target.value + '/favicon.ico';
  }
}

const test = () => {
  console.log(1111);
}

// 跳转页面
const redirectTo = (row) => {
  window.open(`https://${row.url}`);
}

// 收藏页面
const addFavorite = (row) => {
  console.log('添加收藏');
}

// 删除网站
const deleteWeb = (fatherId, sonId) => {
  console.log(fatherId, sonId);
  const index = favoriteList.value.findIndex(item => item.id === fatherId);
  console.log(index, 'index');
  console.log(favoriteList.value[index], 'favoriteList.value');
  if ( index === -1 ) return;
  favoriteList.value[index].favorites = favoriteList.value[index].favorites.filter(item => item.id !== sonId);
}

// 移动列表
const onMoveCallback = () => {
  const items = favoriteList.value;
  let index = 0;
  items.forEach(item => {
    item.index = index;
    index++;
  })
};

const getData = (val) => {
  // console.log(val);
};
</script>

<style scoped lang="less">
#favorite-content {
  padding: 20px 20px;
  height: 100%;
  width: 100%;
  overflow: auto;

  .favorite-boxs {
    margin: 0 0 20px;

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
        animation: bounce-out .7s ease-in-out;
    
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
  }

  .dialog-content {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

    .dialog-outer-box {
      border-radius: 25px;
      padding: 8px;
      background-color: @background;
      box-shadow: 5px 5px 10px #cacaca, -5px -5px 10px #f6f6f6;

      .dialog-title {
        height: 30px;
        font-size: 24px;
        font-family: 'MiaoZi';
        margin: 5px 20px 15px;
        font-weight: 600;
      }

      .dialog-inner-box {
        width: 40vh;
        min-width: 400px;
        height: 300px;
        background-color: @background;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .dialog-top {
          flex: 0.6;
          display: flex;
          border-radius: 20px;
          margin-bottom: 10px;
          justify-content: center;
          align-content: center;
          
          .d-avater {
            width: 108px;
            height: 108px;
            border-radius: 50%;
            margin-right: 10px;
            box-shadow: inset 5px 5px 10px #cacaca, inset -5px -5px 10px #f6f6f6;
            display: flex;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }

          .d-info {
            flex-grow: 1;
            height: 108px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;

            .info {
              width: 100%;
              height: 36px;
              
              input {
                border-radius: 8px;
                box-shadow: inset 5px 5px 20px #cacaca, inset -5px -5px 20px #f6f6f6;
                width: 100%;
                height: 36px;
                line-height: 36px;
                border: 0;
                padding: 0 14px;
                outline: none;
                font-size: 16px;
                color: @textFont;
                font-family: 'Miaozi';
                background-color: @background;
                transition: all 0.2s ease-in-out;

                &:focus {
                  box-shadow: inset 2px 2px 5px #cacaca, inset -2px -2px 5px #f6f6f6;
                }
              }
            }
          }
        }

        .dialog-bottom {
          padding: 1rem;
          flex: 1;
          border-radius: 20px;
          box-shadow: inset 5px 5px 10px #cacaca, inset -5px -5px 10px #f6f6f6;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease-in-out;
          
          button, textarea {
            border-radius: .5rem;
            border: 0;
            resize: none;
            outline: none;
            background-color: @background;
            transition: all 0.2s ease-in-out;
          }

          .d-desc {
            flex-grow: 1;

            textarea {
              width: 100% !important;
              height: 100% !important;
              font-size: 1rem;
              font-family: 'Miaozi';
            }
          }

          .d-button {
            width: 100%;
            height: 3rem;
            margin-top: .5rem;
            text-align: right;

            .btn {
              width: 4.5rem;
              height: 2.5rem;
              color: @titleFont;
              box-shadow: -5px -5px 20px #f6f6f6,  5px 5px 20px #cacaca;
              transition: all 0.2s ease-in-out;
              cursor: pointer;
              font-size: 1.1rem;
              margin-left: 1rem;
              font-family: 'ErZhiYuan';

              &:hover {
                box-shadow: -2px -2px 5px #f6f6f6, 2px 2px 5px #cacaca;
              }
              
              &:active {
                box-shadow: inset 1px 1px 2px #cacaca, inset -1px -1px 2px #f6f6f6;
              }
            }
          }
        }
      }
    }
  }

  /* 过渡动画 */
  .fade-enter-active {
    animation: bounce-out .3s ease-in-out;
  }
  .fade-leave-active {
    animation: bounce-out .3s reverse;
  }

  @keyframes bounce-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
