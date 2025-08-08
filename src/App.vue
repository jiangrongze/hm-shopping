<template>
  <div id="app">
    <!-- <div class="box"></div>
    <van-button type="primary">主按扭</van-button><br />
     <van-button type="info">信息按扭</van-button><br />
    <van-switch v-model="checked">开关</van-switch> -->

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/layout">layout</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/search">search</router-link> |
      <router-link to="/searchlist">searchlist</router-link> |
      <router-link to="/pay">pay</router-link> |
      <router-link to="/prodetail/:id">prodetail</router-link> |
      <router-link to="/myorder">myorder</router-link> |
      <router-link to="/about">Abou</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box {
  width: 375px;
  height: 200px;
  background-color: rgb(245, 4, 44);
}
</style>
