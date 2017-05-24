<template>
  <div class="container">
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="tel" v-model="phone" placeholder="请输入手机号"/>
        </div>
        <div class="weui-cell__ft">
          <button class="weui-vcode-btn" @click="sendVerifyCode">{{ v_code_btn_value }}</button>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" v-model="v_code" placeholder="请输入验证码"/>
        </div>
      </div>

    </div>

    <div style="margin-top: 1rem;" @click="changePhone">
      <a class="weui-btn weui-btn_primary" :class="{ 'weui-btn_loading': $store.state.tip.loading }">
        <i class="weui-loading" v-if="$store.state.tip.loading"></i> 确定</a>
    </div>



  </div>
</template>

<script>

  export default {
    name: 'Phone',
    data () {
      return {
        phone: '',
        v_code_btn_value: '发送',
        v_code: ''
      }
    },
    methods: {
      sendVerifyCode () {
        let timeOut = 60
        this.v_code_btn_value = timeOut + 's'
        if (this.phone.length !== 11) return 0
        let int = setInterval(() => {
          timeOut--
          this.v_code_btn_value = timeOut + 's'
        }, 1000)
        setTimeout(() => {
          clearInterval(int)
          this.v_code_btn_value = '发送'
        }, 60000)
        this.$store.dispatch('sendVerifyCode', this.phone)
      },
      changePhone () {
        this.$store.state.tip.loading = true
        this.$store.dispatch('changePhone', this.v_code)
      }
    },
    created () {
      this.phone = this.$store.state.user.phone || ''
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
  }

  .weui-vcode-btn {
    width: 5rem;
  }


</style>
