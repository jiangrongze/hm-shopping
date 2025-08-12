<template>
  <div class="prodetail">我是prodetail
    <van-nav-bar fixed title="商品详情页" left-arrow @click-left="$router.go(-1)" />
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.external_url" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }} / {{ images.length }}</div>
      </template>
    </van-swipe>

    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">${{ detail.goods_price_min }}</span>
          <span class="oldprice">${{ detail.goods_price_max }}</span>
        </div>
        <div class="sellcount">已售{{ detail.goods_sales }}件</div>
      </div>
      <div class="msg text-ellipsis-2">
        {{ detail.goods_name }}
      </div>
      <div class="service">
        <div class="left-words">
          <span><van-icon name="passed" />七天无理由退货</span>
          <span><van-icon name="passed" />48小时发货</span>
        </div>
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="comment-title">
        <div class="left">商品评价 （5条）</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="comment-list">
        <div class="comment-item" v-for="item in 3" :key="item">
          <div class="top">
            <img src=""/>
            <div class="name">神雕大侠</div>
            <van-rate :size="16" :value="5" color="#ffd21e" void-icon="star"></van-rate>
          </div>
          <div class="content">
            质量很不错，挺好
          </div>
          <div class="time">
            2023-03-21 15:01:35
          </div>
        </div>
      </div>
    </div>

    <div class="desc">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
    <div class="footer">
      <div class="icon-home">
        <van-icon name="wap-home-o" />
        <span>首页</span>
      </div>
      <div class="icon-cart">
        <van-icon name="shopping-cart-o" />
        <span>购物车</span>
      </div>
      <div class="btn-add">加入购物车</div>
      <div class="btn-buy">立刻购买</div>
    </div>
  </div>
</template>

<script>
import { getProDetail } from '@/api/product'

export default {
  name: 'ProdetailIndex',
  data () {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      current: 0,
      detail: {}
    }
  },
  computed: {
    goodsId () {
      // return 1
      return this.$route.params.id
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    onChange (index) {
      // console.log(index)
      this.current = index
    },
    async getDetail () {
      const { data: { detail } } = await getProDetail(this.goodsId)
      this.detail = detail
      this.images = detail.goods_images
      console.log(detail, '-----------------------------------')
    }
  }
}
</script>

<style lang="less" scoped>
aaaa {

  bbbb {

    .btn-add,
    .btn-buy {
      height: 36px;
      line-height: 36px;
      width: 120px;
      border-radius: 18px;
      background-color: #ffa900;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
    .btn-buy {
      background-color: #fe5630;
    }
  }
}
.tips {
  padding: 10px;
}
</style>
