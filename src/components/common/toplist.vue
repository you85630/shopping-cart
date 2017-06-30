<template>
  <div class="toplist">
    <router-link v-for="li in list" :key="li" :to="li.to">{{li.name}}</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { index: 2, to: '/page1/list', name: '商品列表' },
        { index: 3, to: '/page1/shopping', name: '购物车' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.toplist {
  background-color: #eee;
  a {
    line-height: 32px;
    margin: 0 10px;
    display: inline-block;
    font-size: 14px;
  }
  .router-link-exact-active,
  .router-link-active {
    color: #00bcd4;
    font-weight: bold;
  }
}
</style>
