<template>
  <div>
    <div class="tabs">
      <div v-for="tab in tabs" :key="tab.value">
        <label class="radio" @click="changeTab(tab)">
          <input type="radio" name="radio" :checked="tab.isChecked" />
          <span class="name">{{ tab.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps(["tabs"]);

// 路由
const router = useRouter();

const changeTab = (tab) => {
  router.push(`/home/${tab.value}`);
};
</script>

<style scoped lang="less">
.tabs {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 4px;
  font-size: 14px;
  font-family: 'MiaoZi', sans-serif;

  .radio {
    text-align: center;

    input {
      display: none;
    }

    .name {
      width: 100px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0.5rem 0;
      margin-right: 10px;
      color: rgba(51, 65, 85, 1);
      transition: all 0.15s ease-in-out;
      border-radius: 8px;
      background: @background;
      box-shadow: inset 5px 5px 10px #cacaca, inset -5px -5px 10px #f6f6f6;

      &:hover {
        background-color: lighten(@background, 10%);
      }
    }

    input:checked + .name {
      background-color: #fff;
      font-weight: 600;
    }
  }
}
</style>
