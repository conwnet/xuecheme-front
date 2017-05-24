<template>
  <div class="container">
    <div style="text-align: center; font-size: 2rem; margin-top: 3rem;">暂无习题</div>
  </div>
</template>

<script>
  export default {
    name: 'Exercise',
    data () {
      return {
        id: this.$route.params.id,
        name: '银河驾校（沈阳航空航天大学）',
        price: 2888,
        package: null,
        packages: [
          { id: 1, name: '2888 平民套餐', price: 2888, desc: '2888 全套包过 2888 全套包过 2888 全套包过 2888 全套包过 2888 全套包过' },
          { id: 2, name: '3288 平民套餐', price: 3288, desc: '3288 全套包过' }
        ],
        comments: [
          {
            user_id: '1',
            nickname: '凌乱',
            headimgurl: 'http://img5.imgtn.bdimg.com/it/u=3259089416,3550554823&fm=23&gp=0.jpg',
            star: 5,
            content: '商品性价比高，效果也不错家里有个双开门的2000多也是海尔的声音比这个响多了，制冷效果不错，购机回来静止了3个小时才开始插电的，包装完整内外都有保护膜，客服露娜服务也不错，售后也还行，总体来说对比下来这款机子还是不错的，希望耐用，家里冰箱都是海尔的都还不错',
            time: 1494350249139
          },
          {
            user_id: '2',
            nickname: '欢乐多',
            headimgurl: 'http://img5.imgtn.bdimg.com/it/u=3259089416,3550554823&fm=23&gp=0.jpg',
            star: 4,
            content: '商品性价比高，效果也不错家里有个双开门的2000多也是海尔的声音比这个响多了，制冷效果不错，购机回来静止了3个小时才开始插电的，包装完整内外都有保护膜，客服露娜服务也不错，售后也还行，总体来说对比下来这款机子还是不错的，希望耐用，家里冰箱都是海尔的都还不错',
            time: 1494350249139
          }
        ],
        url: 'https://img.alicdn.com/bao/uploaded/i1/TB186F0RXXXXXX8XpXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg'
      }
    },
    computed: {
    },
    methods: {
      choosePackage: function (item) {
        this.package = item
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
  }

  .slider {
    height: 15rem;
    margin-top: 0.5rem;
  }

  .slider img {
    width: 100%;
    height: 100%;
  }

  .name {
    margin-top: 1rem;
    color: #333;
    font-size: 1.4rem;
  }

  .price {
    margin-top: 0.5rem;
    font-size: 2rem;
    color: #333;
  }

  .price .price_rmb {
    font-size: 1.6rem;
  }

  .price .tag {
    font-size: 1rem;
    color: #fff;
    background: #fb6878;
  }

  .highlight {
    color: #dd2727;
  }

  .line {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px #ccc solid;
  }

  .package button {
    background: #fff;
    height: 3rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    border-width: 1px;
    border-style: solid;
    width: 5.5rem;
    border-radius: 5px;
  }

  .package .title {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .package .desc {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    text-indent: 2rem;
  }

  .comment .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .comment_box {
    margin-top: 1rem;
  }

  .comment .headimg {
    height: 2.5rem;
    width: 2.5rem;
    vertical-align: middle;
    border-radius: 1rem;
  }

  .comment .nick {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }

  .comment .detail {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    text-indent: 2rem;
  }

  .comment .time {
    margin-top: 0.5rem;
    color: #777;
  }

  .blank {
    height: 3rem;
  }

  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 4.5rem;
    width: 100%;
    background: #eee;
    display: flex;
    border-top: 1px #ccc solid;
  }

  .tab .package {
    flex: 3;
    font-weight: bold;
    font-size: 1.7rem;
  }

  .tab .contact {
    flex: 2;
    color: #fff;
    font-size: 1.7rem;
    background: #FF9500;
  }

  .tab .buy {
    flex: 2;
    color: #fff;
    font-size: 1.7rem;
    background: #DD2727;
  }

</style>
