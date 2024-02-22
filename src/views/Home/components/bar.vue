<template>
  <div class="bar-box">
    <div class="bar-left-box">
      <div class="left-box-content">
        <div class="top-left-box inner-box"></div>
        <div class="top-right-box inner-box">
          <div class="avatar-box">
            <div class="avatar-outer">
              <div class="avatar-inner">
                <img src="@/assets/img/avatar.jpg" alt="" />
              </div>
            </div>
          </div>
  
        </div>
        <div class="bottom-left-box inner-box"></div>
        <div class="bottom-right-box inner-box"></div>
      </div>
    </div>
    <div class="bar-center-box">
      <div class="center-top-box">
        <div class="component"></div>
        <div class="component"></div>
        <div class="component"></div>
      </div>
      <div class="center-bottom-box">
        <div class="search">
          <el-dropdown>
            <div class="search-left">
              <img class="iconfont" :src="engineIcon" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="engine in searchEngine"
                  @click="selectEngine(engine)"
                >
                  <img class="icon" :src="engine.path" alt="" />
                  <span>
                    {{ engine.label }}
                  </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="input">
            <input
              type="text"
              placeholder="请输入要搜索的内容"
              v-model="searchValue.result"
              @keyup.enter="openSearch"
            />
          </div>
          <div class="search-right">
            <span class="iconfont icon-Magnifier"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-right-box">
      <div class="right-inner-box"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 搜索内容
const searchValue = ref({
  engine: "baidu",
  result: "",
});
// 搜索引擎
const searchEngine = ref([
  { label: "百度", value: "baidu", path: "src/assets/img/baidu.png" },
  { label: "谷歌", value: "guge", path: "src/assets/img/guge.png" },
  { label: "必应", value: "biying", path: "src/assets/img/biying.png" },
]);
// 选择引擎
const selectEngine = (engine) => {
  searchValue.value.engine = engine.value;
};
// 图片路径
const engineIcon = computed(() => {
  return `src/assets/img/${searchValue.value.engine}.png`;
});
// 打开网页
const openSearch = () => {
  const searchResult = searchValue.value.result;
  switch (searchValue.value.engine) {
    case "baidu":
      window.open(`https://www.baidu.com/s?wd=${searchResult}`);
      break;
    case "guge":
      window.open(`https://www.google.com/search?q=${searchResult}`);
      break;
    case "biying":
      window.open(`https://www.bing.com/search?q=${searchResult}`);
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="less">
.bar-box {
  height: 100%;
  width: 100%;
  min-width: 566px;
  display: flex;

  .bar-left-box {
    height: 300px;
    width: 260px;
    min-width: 260px;
    padding: 10px;
    border-radius: 40px;
    border-top-right-radius: 60px;
    border-top-left-radius: 120px;
    box-shadow: 8px 8px 12px #bebebe, -8px -8px 12px #ffffff;
    position: relative;

    .left-box-content {
      // box-shadow: inset 5px 3px 15px #bcbcbc, inset -5px -5px 10px #fefefe;

      .inner-box {
        width: 140px;
        height: 140px;
        position: absolute;
      }

      .top-left-box {
        top: 10px;
        left: 10px;
      }

      .top-right-box {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        .avatar-box {
    
          .avatar-outer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #e0e0e0;
            box-shadow: 10px 10px 15px #bebebe, -10px -10px 15px #ffffff;
      
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
      }

      .bottom-left-box {
        bottom: 10px;
        left: 10px;
      }

      .bottom-right-box {
        bottom: 10px;
        right: 10px;
      }
    }

  }

  .bar-center-box {
    margin: 0 10px;

    .center-top-box {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 30px;

      .component {
        width: 200px;
        height: 160px;
        margin: 0 20px;
        border-radius: 30px;
        background: @background;
        box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
      }
    }

    .center-bottom-box {
      margin: 0 20px;
      
      .search {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        width: 100%;
        height: 40px;
        padding: 12px;
        border-radius: 12px;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    
        .search-left {
          width: 34px;
          line-height: 28px;
          font-size: 14px;
          color: @textFont;
          display: flex;
          align-items: center;
    
          .iconfont {
            width: 24px;
            height: 24px;
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
        transform: scale(0.99);
      }
    }

  
  
    
  }
  .bar-right-box {
    width: 100%;
    min-width: 260px;
    padding: 10px;
    border-radius: 30px 120px 40px 30px;
    box-shadow: 5px 3px 15px #bcbcbc, -5px -5px 15px #fefefe;

    .right-inner-box {
      width: 100%;
      height: 100%;
      border-radius: 20px 110px 30px 20px;
      box-shadow: inset 5px 3px 15px #bcbcbc, inset -6px -8px 20px #fefefe;
    }
  }

}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
</style>
