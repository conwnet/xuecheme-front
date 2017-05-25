<template>
  <div class="container">
    <mt-field label="用户名" placeholder="请输入交管 122 用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入交管 122 密码" type="password" v-model="password"></mt-field>
    <br />
    <mt-button type="primary" size="large">绑定</mt-button>
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
        if (this.v_code_btn_value !== '发送') return 0
        let timeOut = 60
        this.v_code_btn_value = timeOut + 's'
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
