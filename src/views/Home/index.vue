<template>
  <div id="main-content">
    <div id="top-box"></div>
    <div id="info-box" ref="infoBox">
      <Bar />
    </div>
    <div id="body-box" ref="bodyBox">
      <Content />
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import Bar from "./components/bar.vue";
import Content from "./components/content.vue";

onMounted(() => {
  changeHeight();
});

// 动态修改页面内容高度
const infoBox = ref();
const bodyBox = ref();
const changeHeight = () => {
  const currentInfoHeight = infoBox.value.clientHeight;
  const windowHeight = document.documentElement.clientHeight;
  const bodyHeight = windowHeight - currentInfoHeight - 120;
  bodyBox.value.style.height = bodyHeight + "px";
};
</script>

<style lang="less">
body {
  background: @background;
}

#main-content {
  padding: 40px 80px;
  min-height: 100%;

  #info-box {
    width: 100%;
    margin-bottom: 40px;
  }

  #body-box {
    width: 100%;
  }
}
</style>
