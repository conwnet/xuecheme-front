<template>
  <div class="container">
     <div class="header" style="background: #fff;">
       银河驾校 {{ pack.title }}
     </div>
    {{ parseInt(pack.pay) / 100 }}
    <a class="weui-btn weui-btn_primary" @click="payForEnroll">立即支付</a>
  </div>

</template>

<script>

  import { mapState } from 'vuex'
  // import config from '../config.js'

  export default {
    name: 'Coach',
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        pack: 'pack'
      })
    },
    methods: {
      payForEnroll () {
        this.pack.title = '支付中...'
        this.$store.dispatch('payForEnroll')
      }
    },
    created: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    color: #555;
  }

  .header {
    height: 5rem;
    border-bottom: 1px solid #888;
    padding: 0.3rem;
  }

</style>
