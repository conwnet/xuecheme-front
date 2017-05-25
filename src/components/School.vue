<template>
  <div class="container">
    <div class="slider">
      <img :src="url">
    </div>
    <div class="content">
      <div class="name"><h3>{{ school.name }}</h3></div>
      <div class="price">
        <span class="highlight">
          <span>¥ </span>
          <span class="price_rmb">{{ pack && pack.price / 100 || '?' }}</span>
        </span>
        <span class="tag">活动返现</span>
      </div>

      <div class="line" />

      <div class="package">
        <button :style="{ borderColor: pack && item.id === pack.id ? '#f00' : '#bbb' }" v-for="(item, index) in packs" key="'pack_' + index" @click="choosePack(item)">
          套餐 {{ index + 1 }}
        </button>

        <div class="desc">
          <div class="line" />
          {{ pack && pack.remark || '' }}
        </div>
      </div>

      <div class="line" />


      <a class="weui-btn weui-btn_warn" @click="confirmEnrol">立即报名</a>
      <div class="line" />

      <div class="comment">
        <p><span class="title">评价</span> ({{ comments.length }})</p>
        <div class="comment_box" v-for="(item, index) in comments" key="'com_' + index">
          <div>
            <img class="headimg" :src="item.headimgurl" />
            <span class="nick">{{ item.nickname }}</span>
            <span class="highlight" v-for="item in new Array(item.star)">★</span>
          </div>
          <div class="detail">{{ item.content }}</div>
          <div class="time">{{ (new Date(item.time)).toLocaleDateString() }}</div>
        </div>
      </div>

      <div class="blank"></div>
    </div>

  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'School',
    data () {
      return {
        comments: [
        ],
        url: 'https://img.alicdn.com/bao/uploaded/i1/TB186F0RXXXXXX8XpXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg'
      }
    },
    computed: {
      ...mapState({
        school: 'school',
        pack: 'pack',
        packs: 'packs'
      })
    },
    watch: {
      school () {
        this.$store.dispatch('getPacks')
      }
    },
    methods: {
      choosePack (item) {
        this.$store.state.pack = item
      },
      confirmEnrol () {
        if (this.pack.id) {
          this.$router.push('/enroll/' + this.pack.id)
        }
      }
    },
    created () {
      this.school.id = this.$route.params.id
      this.$store.dispatch('getSchool')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
    color: #333;
  }

  .slider {
    height: 12rem;
  }

  .slider img {
    width: 100%;
    height: 100%;
  }

  .content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .name {
    margin-top: 0.5rem;
    color: #333;
    font-size: 1.1rem;
  }

  .price {
    font-size: 1rem;
    color: #333;
  }

  .price .price_rmb {
    font-size: 1.2rem;
  }

  .price .tag {
    font-size: 0.8rem;
    color: #fff;
    background: #fb6878;
  }

  .highlight {
    color: #dd2727;
  }

  .line {
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px #ccc solid;
  }

  .package button {
    background: #fff;
    height: 2.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    border-width: 1px;
    border-style: solid;
    width: 5.5rem;
    border-radius: 5px;
  }

  .package .title {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .package .desc {
    margin-top: 0.5rem;
    font-size: 1rem;
    text-indent: 2rem;
  }

  .comment .title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .comment_box {
    margin-top: 1rem;
  }

  .comment .headimg {
    height: 2rem;
    width: 2rem;
    vertical-align: middle;
    border-radius: 1rem;
  }

  .comment .nick {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
  }

  .comment .detail {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    text-indent: 2rem;
  }

  .comment .time {
    margin-top: 0.3rem;
    font-size: 0.9rem;
    color: #777;
  }

  .blank {
    height: 3rem;
  }

  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.5rem;
    width: 100%;
    background: #eee;
    display: flex;
    border-top: 1px #ccc solid;
  }

  .tab .package {
    flex: 3;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .tab .contact {
    flex: 2;
    color: #fff;
    font-size: 1.1rem;
    background: #FF9500;
  }

  .tab .buy {
    flex: 2;
    color: #fff;
    font-size: 1.1rem;
    background: #DD2727;
  }

</style>
