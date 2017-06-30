<template>
  <div class="list">
    <img :src="commodity.cover" alt="">
    <dl>
      <dt>价格：</dt>
      <dd>￥
        <span v-text="commodity.price"></span>
      </dd>
    </dl>
    <dl>
      <dt>重量：</dt>
      <dd>
        <span v-text="commodity.weight"></span>kg</dd>
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
    <dl>
      <dd>
        <button>购买</button>
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
        weight: '200-300',
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
      isNow: 0
    }
  },
  methods: {
    activeSpecies (key) {
      this.isActive = key
    },
    activeSize (key) {
      this.isNow = key
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
