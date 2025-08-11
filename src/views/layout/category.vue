<template>
  <div class="category">**********************
    <van-nav-bar title="全部分类" fixed />
    <van-search
    readonly
    shape="round"
    background="#f1f1f1"
    placeholder="请输入搜索关键词"
    @click="$router.push('/search')" />

    <div class="list-box">

      <div class="left">
        <ul>
          <li v-for="(item, index) in list" :key="item.category_id">
            <a :class="{active: index === activeIndex }" @click="activeIndex = index" href="javascript:;">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="right">
        <div
        @click="$router.push(`/searchlist?categoryId=${item.category_id}`)"
        v-for="item in list[5]?.children" :key="item.category_id"
        class="cate-goods">
          <img :src="item.image?.external_url" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { getCategoryData } from '@/api/category'
export default {
  name: 'CategoryIndex',
  data () {
    return {
      list: []
    }
  },
  async created () {
    const { data: { list } } = await getCategoryData()
    console.log(list)
    this.list = list.data
  }

}
</script>

<style lang="less" scoped>
.category {
  padding-top: 100px;
  padding-bottom: 50px;
}
.right {
  flex: 1;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 0;
  overflow: auto;

  .cate-goods {
    width: 33.3%;
    margin-bottom: 10px;
    img {
      width: 70px;
      height:70px;
      display: block;
      margin: 5px auto;
    }
    p {
      text-align: center;
      font-size: 12px;
    }
  }
}

.van-nav-bar {
  z-index:999;
}
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}
</style>
