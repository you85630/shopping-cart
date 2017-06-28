<template>
  <div class="page1">
    <top-list></top-list>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import topList from 'components/common/toplist'
export default {
  components: {
    topList
  }
}
</script>

<style scoped lang="scss">

</style>
