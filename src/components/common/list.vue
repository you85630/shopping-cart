<template>
  <div class="list">
    <img src="./../../assets/imgs/1.jpg" alt="">
    <dl v-for="item in list" :key="item">
      <dt>{{item.name}}：</dt>
      <dd class="subs" v-for="(name,index) in item.subs" :key="name" @click="getsub(name)" :class='{active:isActive===name}'>{{name}}</dd>
      <dd>{{item.msg}}</dd>
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
      list: [
        {
          name: '价格',
          msg: '￥1234'
        }, {
          name: '重量',
          msg: '60.3kg'
        }, {
          name: '选择品种',
          subs: ['豹子', '狗狗', '猫咪', '大熊猫']
        }, {
          name: '选择大小',
          subs: ['大号', '中号', '小号']
        }
      ],
      isActive: 0
    }
  },
  methods: {
    getsub (name) {
      this.isActive = name
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
    .subs {
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
