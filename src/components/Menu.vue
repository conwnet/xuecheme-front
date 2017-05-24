<template>
  <div class="demo">
    <svg class="sidebar">
      <path class="s-path" fill="#fff" />
    </svg>
    <div class="static">
      <div class="static__logo">
        <p class="static__big">学车么</p>
        <p class="static__small">驾考App</p>
      </div>
      <div class="static__name">
        <p> </p>
        <canvas id="process" width="500" height="500" style="background:#6D7ADA;"></canvas>
      </div>
    </div>

    <div class="sidebar-content">
      <router-link to="/person">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-kaoqin"></use>
          </svg>
          <span class="menu__name">个人信息</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/school">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-qiye"></use>
          </svg>
          <span class="menu__name">报驾校</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/coach">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-guiji"></use>
          </svg>
          <span class="menu__name">约教练</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/record">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-renwu"></use>
          </svg>
          <span class="menu__name">约教记录</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/recommend">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-kehu"></use>
          </svg>
          <span class="menu__name">我的推荐</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/exercise/1">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-yunying"></use>
          </svg>
          <span class="menu__name">科目一练习</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/exercise/4">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-yunying"></use>
          </svg>
          <span class="menu__name">科目四练习</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

      <router-link to="/person">
        <div class="menu">
          <svg class="icon menu__icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <span class="menu__name">设置</span>
          <span class="menu__status online"></span>
        </div>
      </router-link>

    </div>

    <div class="content">
      <span class="content__back"></span>
      <span class="content__status">status</span>
      <div class="content__person">
        <span class="content__online active"></span>
        <span class="content__name"></span>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>

  import Person from '@/components/Person'
  import Schools from '@/components/Schools'
  import School from '@/components/School'

  export default {
    name: 'Menu',
    data: function () {
      return {
        headimgurl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3974060073,3081321143&fm=111&gp=0.jpg'
      }
    },
    methods: {
    },
    components: { Person, Schools, School }
  }

</script>

<style>
  a {
    text-decoration:none;
    color: #182347;
  }

</style>
