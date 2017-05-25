<template>
  <div class="container">

    tip: {{ $store.state.tip }}
    user: {{ user }}
    <button @click="handleClick">Click Me</button>

  </div>
</template>

<script>

  // import { Toast } from 'mint-ui'

  export default {
    name: 'User',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      handleClick () {
        this.user = '123123'
        this.$store.dispatch('payForEnroll')
      }
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
