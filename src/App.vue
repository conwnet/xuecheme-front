<template>
  <div id="app" style="height: 100%; background-color: #eee;">

    <div class="main_btn" @click="handleClick"></div>

    <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <div v-if="menuShow" class="menu">
        <router-link :to="'/user'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-kaoqin"></use>
            </svg>
            <span class="menu_name">个人信息</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/school'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-qiye"></use>
            </svg>
            <span class="menu_name">报驾校</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/coach'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-guiji"></use>
            </svg>
            <span class="menu_name">约教练</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/record'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-renwu"></use>
            </svg>
            <span class="menu_name">约教记录</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/recommend'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-kehu"></use>
            </svg>
            <span class="menu_name">我的推荐</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/exercise/1'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-yunying"></use>
            </svg>
            <span class="menu_name">科目一练习</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

        <router-link :to="'/exercise/4'">
          <div class="menu_item">
            <svg class="menu_icon" aria-hidden="true">
              <use xlink:href="#icon-yunying"></use>
            </svg>
            <span class="menu_name">科目四练习</span>
            <span class="menu_status online"></span>
          </div>
        </router-link>

      </div>
    </transition>

    <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
      <router-view></router-view>
    </transition>

    <!-- loading toast -->
    <div v-if="$store.state.tip.error_toast">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon-warn weui-icon_toast"></i>
        <p class="weui-toast__content">{{ $store.state.tip.message }}</p>
      </div>
    </div>

  </div>



</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
        menuShow: false
      }
    },
    methods: {
      handleClick: function () {
        let path = this.$route.path
        if (path === '/menu' || path.split('/').length > 2) {
          this.$router.back()
        } else {
          this.$router.push({path: '/menu'})
        }
      }
    },
    watch: {
      $route: function () {
        let path = this.$route.path
        console.log(path)
        if (path === '/menu') {
          this.menuShow = true
        } else {
          this.menuShow = false
        }
      }
    },
    created () {
      // this.$store.dispatch('getUserInfo')
      console.log(this.$route.query)
    }
  }

</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }


  .main_btn {
    color: #fff;
    background: #1aad19;
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    z-index: 999;
  }

  .menu {
    background: #eee;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 998;
  }

  .menu_item {
    align-items: center;
    line-height: 2.5rem;
    background: #fff;
    border-top: 1px #ccc solid;
  }

  .menu_name {
    margin-left: 0.5rem;
    color: #000;
  }

  .menu_icon {
    margin-left: 1rem;
    position: relative;
    top: 0.5rem;
    width: 2rem; height: 2rem;
  }

</style>
