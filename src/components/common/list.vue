<template>
  <div class="list">
    <dl v-for="items in list" :key="items">
      <dt>{{items.name}}</dt>
      <dd v-for="li in items.subs" :key="li" v-if="li.li">{{li.li}}</dd>
      <dd v-else>{{items.msg}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '123',
          subs: [{

          }]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  border: 1px solid #ccc;
  padding: 0 10px;
}
</style>
