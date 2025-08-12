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
        <div class="left">商品评价 {{ total }} 条</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="comment-list">
        <div class="comment-item" v-for="item in commentList" :key="item.comment_id">
          <div class="top">
            <img :src="item.avatar_url || defaultImg" alt=""/>
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate :size="16" :value="item.score / 2" color="#ffd21e" void-icon="star-o"></van-rate>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="time">
            {{ item.create_time }}
          </div>
        </div>
      </div>
    </div>

    <div class="desc" v-html="detail.content">

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
      <div @click="addFn" class="btn-add">加入购物车</div>
      <div @click="buyFn" class="btn-buy">立刻购买</div>
    </div>

    <!-- 弹层显示 -->
    <van-action-sheet v-model="showPannel" title="mode === 'cart' ? '加入购物车' : '立即购买'">
      <div class="product">
        <div class="product-title">
          <div class="left">
            <img :src="detail.goods_image" alt="">
          </div>
          <div class="right">
            <div class="price">
              <span>$</span>
              <span class="nowprice">{{ detail.goods_price_min }}</span>
            </div>
            <div class="count">
              <span>库存</span>
              <span>{{ detail.stock_total }}</span>
            </div>
          </div>
        </div>
        <div class="num-box">
          <span>数量</span>
          数字占位
        </div>

        <div class="showbtn" v-if="detail.stock_total > 0">
          <div class="btn" v-if="mode === 'cart'">加入购物车</div>
          <div class="btn now" v-else>立刻购买</div>
        </div>
        <div class="btn-none" v-else>该商品已抢完</div>
      </div>
    </van-action-sheet>

  </div>
</template>

<script>
import { getProComments, getProDetail } from '@/api/product'
import defaultImg from '@/assets/default-avatar.png'
export default {
  name: 'ProdetailIndex',
  data () {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      current: 0,
      detail: {},
      total: 0, // 评价总数
      commentList: [], // 评价内容
      defaultImg,
      showPannel: false,
      mode: 'cart'
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
    this.getComments()
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
    },
    async getComments () {
      const { data: { list, total } } = await getProComments(this.goodsId, 3)
      this.commentList = list
      console.log(list)
      this.total = total
    },
    addFn () {
      this.mode = 'cart'
      this.showPannel = true
    },
    buyFn () {
      this.mode = 'buyNow'
      this.showPannel = true
    }
  }
}
</script>

<style lang="less" scoped>
。prodetail {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  img {
    display: block;
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 5px 10px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);

  }

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

.num-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.btn, .btn-none, .btn-add, .btn-buy {
  height: 40px;
  line-height: 40px;
  margin: 20px;
  border-radius: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 148, 2);
}
.btn.now {
  background-color: #fe5630;
}
.btn-none {
  background-color: #cccccc;
}

</style>
