<template>
  <div id="app">
    <header-nav></header-nav>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import headerNav from 'components/common/headernav'
export default {
  components: {
    headerNav
  }
}
</script>
