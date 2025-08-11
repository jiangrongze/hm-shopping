<template>
  <div class="prodetail">我是prodetail
    <van-nav-bar fixed title="商品详情页" left-arrow @click-left="$router.go(-1)" />
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }} / {{ images.length }}</div>
      </template>
    </van-swipe>

    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">$ 0.01</span>
          <span class="oldprice">$6699.00</span>
        </div>
        <div class="sellcount">已售1001件</div>
      </div>
      <div class="msg text-ellipsis-2">
        三星手机 samsung galaxy s23 8gb-256gb 超视觉夜拍系统
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdetailIndex'
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
