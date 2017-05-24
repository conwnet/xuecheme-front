<template>
  <div class="container">
    <router-link  v-for="coach in $store.state.coaches" :key="'coa_' + coach.id" :to="'/coach/' + coach.coach_id">
      <div class="coach">
        <img :src="coach.headimgurl" class="headimg" />
        <div class="text">
          <h3 class="name">{{ coach.name }}</h3>
          <p class="school">
            <span>{{ coach.school }}</span>
          </p>
          <p class="star"><span class="highlight">★★★★★</span>
            <span>{{ coach.score }}</span><span> 分</span>
          </p>
          <p class="desc">
            <span v-for="label in coach.labels" class="label">
              {{ label }}
            </span>
            <span class="address">沈阳</span>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'Coaches',
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getCoaches')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
    padding-left: 0.5rem;
  }

  .coach {
    display: flex;
    border-bottom: 1px #ccc solid;
  }

  .headimg {
    margin: 5px auto;
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
  }

  .text {
    flex: 2.8;
    padding: 5px;
  }

  .name {
    color: #4b566a;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .school {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #4b566a;
  }

  .highlight {
    color: #eb5211;
  }

  .star {
    font-size: 0.9rem;
  }

  .desc {
    font-size: 0.8rem;
    color: #999;
    line-height: 1.5rem;
    display: flex;
  }

  .label {
    padding-right: 1rem;
  }

  .address {
    flex: 1;
    text-align: right;
    padding-right: 0.7rem;
  }

</style>
