<template>
  <div class="list">
    <img :src="commodity.cover" alt="">
    <dl>
      <dt>单价：</dt>
      <dd>￥
        <span v-text="commodity.price"></span>
      </dd>
    </dl>
    <dl>
      <dt>选择品种：</dt>
      <dd>
        <ul>
          <li v-for="(li,key) in commodity.species" :key="li" @click='activeSpecies(key)' :class='{active:isActive===key}'>
            <span v-text="key"></span>
          </li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>选择大小：</dt>
      <dd>
        <ul>
          <li v-for="(li,key) in commodity.size" :key="li" @click='activeSize(key)' :class='{active:isNow===key}'>
            <span v-text="key"></span>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="counter">
      <dt>数量：</dt>
      <dd>
        <button @click='del'>-</button>
        <input type="text" :value="count">
        <button @click='add'>+</button>
      </dd>
    </dl>
    <dl>
      <dd>
        <button @click='buy'>购买</button>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commodity: {
        price: '50-200',
        cover: 'http://osc94pt0z.bkt.clouddn.com/1.jpg',
        species: {
          '豹子': 'http://osc94pt0z.bkt.clouddn.com/1.jpg',
          '狗狗': 'http://osc94pt0z.bkt.clouddn.com/3.jpg',
          '猫咪': 'http://osc94pt0z.bkt.clouddn.com/5.jpg',
          '大熊猫': 'http://osc94pt0z.bkt.clouddn.com/7.jpg'
        },
        size: {
          '大号': '200',
          '中号': '100',
          '小号': '50'
        }
      },
      isActive: 0,
      isNow: 0,
      count: 0,
      cart: []
    }
  },
  methods: {
    activeSpecies (key) {
      this.isActive = key
      this.commodity.cover = this.commodity.species[key]
    },
    activeSize (key) {
      this.isNow = key
      this.commodity.price = this.commodity.size[key]
    },
    add () {
      this.count++
    },
    del () {
      this.count--
    },
    buy () {
      this.cart.push({
        name: this.isActive,
        size: this.isNow,
        num: this.count,
        price: this.commodity.price
      })
      this.count = 0
      console.log(this.cart)
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  border: 1px solid #ccc;
  padding: 0 10px;
  position: relative;
  img {
    position: absolute;
    left: 1%;
    top: 10px;
    width: 30%;
  }
  dl {
    margin-left: 32%;
    font-size: 0;
    line-height: 40px;
    dt,
    dd {
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
    }
    dd {
      li {
        display: inline-block;
        border: 1px dashed #999;
        margin-right: 10px;
        line-height: 1;
        padding: 4px 6px;
        cursor: pointer;
        &:hover {
          border-color: #00bcd4;
        }
      }
      .active {
        color: #fff;
        border: 1px solid #00bcd4;
        background-color: #00bcd4;
      }
      .over {
        cursor: not-allowed;
        border-color: #ccc;
        &:hover {
          border-color: #ccc;
        }
      }
    }
  }
  .counter {
    dd {
      button {
        width: 20px;
        padding: 0;
        line-height: 20px;
        background-color: #ccc;
      }
      input {
        text-align: center;
        width: 20px;
        line-height: 16px;
      }
    }
  }
  button {
    font-size: 14px;
    border: none;
    background-color: #00bcd4;
    color: #fff;
    padding: 6px 20px;
    line-height: 1;
  }
}
</style>
