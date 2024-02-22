<template>
  <div class="content-box">
    <Tab :tabs="tabs" />
    <div class="content-main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tab from "./indexTab.vue";

const tabs = ref([
  {
    label: "收藏夹",
    value: "favorites",
    isChecked: true,
  },
  {
    label: "小工具",
    value: "tools",
    isChecked: false,
  },
]);
</script>

<style scoped lang="less">
.content-box {
  width: 100%;
  height: 100%;
  min-width: 566px;
  min-height: 263px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: @background;
  box-shadow: 10px 10px 15px #bebebe, -10px -10px 15px #ffffff;

  .content-main {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 60px);
    border-radius: 10px;
    background: @background;
    box-shadow: inset 5px 3px 20px #bcbcbc, inset -10px -10px 25px #fefefe;
  }
}
</style>
