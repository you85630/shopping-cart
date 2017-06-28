<template>
  <div class="topnav">
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-link to="/page3">page3</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.topnav {
  background: #00bcd4;
  text-align: center;
  a {
    line-height: 40px;
    display: inline-block;
    color: #fff;
    margin: 0 10px;
    font-size: 16px;
  }
  .router-link-exact-active,
  .router-link-active {
    color: #000000;
  }
}
</style>
