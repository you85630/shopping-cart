<template>
  <div class="cart-list">
    <dl v-for="(li,index) in cart" :key="li">
      <dd>
        <img :src="li.cover">
      </dd>
      <dd>{{li.name}}</dd>
      <dd>{{li.size}}</dd>
      <dd>{{li.num}}</dd>
      <dd>{{li.price}}</dd>
      <dt @click='remove(index)'>删除</dt>
    </dl>
    <div class="total" v-if="total!==0">
      总计：{{total}}
    </div>
    <div class="cart-none" v-if="cart==''">
      <p>购物车里啥都没有~~!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cart',
      'total'
    ])
  },
  methods: {
    ...mapActions([
      'remove'
    ])
  }
}
</script>

<style scoped lang="scss">
.cart-list {
  border: 1px solid #ccc;
  padding: 0 10px;
  dl {
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom: none;
    }
    dt,
    dd {
      display: inline-block;
      text-align: center;
    }
    dd {
      width: 100px;
      img {
        width: 100%;
        border: none;
        vertical-align: middle;
      }
      input {
        width: 20px;
        text-align: center;
      }
      button {
        width: 20px;
      }
    }
    dt {
      width: 100px;
      cursor: pointer;
      color: #fff;
      padding: 4px 0;
      background-color: #00bcd4;
    }
  }
  .total {
    text-align: right;
    line-height: 30px;
  }
  .cart-none {
    text-align: center;
    padding: 50px 0;
    color: #f44336;
  }
}
</style>
