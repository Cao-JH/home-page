<template>
  <div class="bar-box">
    <el-row :gutter="50" class="row">
      <el-col :span="6" class="avatar-box">
        <div class="avatar-outer">
          <div class="avatar-inner">
            <img src="@/assets/img/avatar.jpg" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="component"></div>
      </el-col>
      <el-col :span="6">
        <div class="component"></div>
      </el-col>
      <el-col :span="6">
        <div class="component"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="18" :offset="6">
        <div class="search">
          <el-dropdown>
            <div class="search-left">
              <!-- <span class="iconfont"></span> -->
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
      </el-col>
    </el-row>
    <div class="back-block"></div>
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
  padding: 0 30px;
  position: relative;

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
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;

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

  .row {
    margin-bottom: 20px;
    z-index: 9;
  }

  .component {
    width: 200px;
    height: 100px;
    border-radius: 30px;
    background: @background;
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
  }

  .back-block {
    position: absolute;
    left: 0;
    top: -40px;
    z-index: 3;
    width: 380px;
    height: 210px;
    border-bottom-right-radius: 150px;
    background: @background;
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
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
