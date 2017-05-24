<template>
  <div class="container">
    <div style="text-align: center; font-size: 2rem;">暂无记录</div>
    <p>go: {{ $route.query.go }}</p>
    <p>code: {{ $route.query.code }}</p>
    <p>ssid: {{ $store.state.ssid }}</p>
    <p>time_out: {{ $store.state.time_out }}</p>
  </div>
</template>

<script>

  export default {
    name: 'Authorize',
    data () {
      return {
      }
    },
    methods: {
      handleClick () {
        this.$store.state.time_out += 1
      }
    },
    created () {
      this.$store.state.ssid = this.$route.query.ssid
      this.$store.state.time_out = this.$route.query.time_out
      this.$router.push('/' + (this.$route.query.go || ''))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
