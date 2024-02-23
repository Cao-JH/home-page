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
            <Single :favoriteList="element" />
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable';
import Single from './components/single.vue'

const favoriteList = ref([
  {
    index: 0,
    id: 'aaa',
    label: '这是标题1',
    favorites: [
      {
        id: 1,
        imgSrc: '',
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
  // console.log(favoriteList.value, 'favoriteList');
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

  }
}
</style>
