<template>
  <div class="page2">
    <table-list></table-list>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import tableList from 'components/common/tablelist'
export default {
  components: {
    tableList
  }
}
</script>

<style scoped lang="scss">

</style>
