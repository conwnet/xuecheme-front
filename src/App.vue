<template>
  <div id="app" style="height: 100%; background-color: #eee;">


    <div class="main_btn animated" :class="{rubberBand: animatedShow}" @click="showMenu">+</div>

    <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">

      <div class="menu" v-if="menuShow">

        <mt-cell to="/user" is-link>
          <span class="menu_item" slot="title">个人信息</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-kaoqin"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/school" is-link>
          <span class="menu_item" slot="title">报驾校</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-qiye"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/coach" is-link>
          <span class="menu_item" slot="title">约教练</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-guiji"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/record" is-link>
          <span class="menu_item" slot="title">约教记录</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-renwu"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/recommend" is-link>
          <span class="menu_item" slot="title">我的推荐</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-kehu"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/exercise/1" is-link>
          <span class="menu_item" slot="title">科目四练习</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-yunying"></use>
          </svg>
        </mt-cell>

        <mt-cell to="/exercise/4" is-link>
          <span class="menu_item" slot="title">我的推荐</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-yunying"></use>
          </svg>
        </mt-cell>

        <mt-cell @click.native="() => { $router.back() }" is-link>
          <span class="menu_item" slot="title">返回上一页</span>
          <svg class="menu_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-yunying"></use>
          </svg>
        </mt-cell>

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
        menuShow: false,
        animatedShow: false
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
      },
      showMenu () {
        this.animatedShow = true
        setTimeout(() => { this.animatedShow = false }, 800)
        this.menuShow = !this.menuShow
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
    background: #26a2ff;
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    z-index: 999;
    line-height: 3.5rem;
    text-align: center;
    font-size: 2rem;
  }

  .menu {
    background: #eee;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 998;
  }

  .menu_item {
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  .menu_icon {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

</style>
