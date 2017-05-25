<template>
  <div class="container">
    <img :src="$store.state.user.headimgurl" class="headimg">
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell weui-cell_access" @click="showNameDialog">
        <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="请输入姓名" v-model="user.name" disabled />
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>

      <a class="weui-cell weui-cell_access" @click="showSexActionSheet">
        <div class="weui-cell__hd">
          <label class="weui-label">性别</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" :value="user.sex === 1 ? '男' : '女'" disabled />
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>

      <div class="weui-cell weui-cell_access" @click="showPhonePage">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="绑定手机号" :value="user.phone" disabled />
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>

      <div class="weui-cell weui-cell_access" @click="showBind122Page">
        <div class="weui-cell__hd">
          <label class="weui-label">学车进度</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="绑定 12123 帐号" :value="user.process" disabled />
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
    <br />

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="weui-mask" v-if="mask" @click="hideActionSheet"></div>
    </transition>


    <div class="js_dialog" v-if="nameDialog">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title">修改姓名</strong></div>
        <div class="weui-dialog__bd">
          <input class="weui-input" style="text-align: center; border: 1px #888 solid; color: #000" placeholder="请输入姓名" v-model="user.name" />
        </div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="saveUserName">确认</a>
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="hideNameDialog">取消</a>
        </div>
      </div>
    </div>


    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': sexActionSheet}">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">请确认您的性别</p>
      </div>
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" @click="saveUserSex(1)">男</div>
        <div class="weui-actionsheet__cell" @click="saveUserSex(2)">女</div>
      </div>

      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" @click="hideActionSheet">取消</div>
      </div>
    </div>

  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'User',
    data () {
      return {
        okToast: false,
        sexActionSheet: false,
        mask: false,
        nameDialog: false
      }
    },
    computed: {
      ...mapState({
        user: 'user'
      })
    },
    methods: {
      showNameDialog () {
        this.nameDialog = true
      },
      saveUserName () {
        this.$store.dispatch('saveUserName')
        this.nameDialog = false
      },
      hideNameDialog () {
        this.nameDialog = false
      },
      showSexActionSheet () {
        this.sexActionSheet = true
        this.mask = true
      },
      saveUserSex (sex) {
        this.$store.state.user.sex = sex
        this.$store.dispatch('saveUserSex')
        this.hideActionSheet()
      },
      hideActionSheet () {
        this.sexActionSheet = false
        this.mask = false
      },
      showPhonePage () {
        this.$router.push('/user/phone')
      },
      showBind122Page () {
        this.$router.push('/user/bind122')
      }
    },
    created () {
      console.log('user-ssid:', this.$store.state.ssid)
      this.$store.dispatch('getUserInfo')
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .headimg {
    width: 12rem;
    height: 12rem;
    display: block;
    margin: 0rem auto;
    border-radius: 2.5rem;
  }


</style>
