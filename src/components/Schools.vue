<template>
  <div class="container">
    <router-link  v-for="school in schools" :key="'sch_' + school.id" :to="'/school/' + school.id">
      <div class="school">
        <img :src="school.headimg_url" class="headimg" />
        <div class="text">
          <h3 class="name">{{ school.name }}</h3>
          <p class="price">
            <span class="highlight">¥{{ school.min_price / 100 }}</span>
            <span>起</span>
          </p>
          <p class="star">
            <span class="highlight">★★★★★</span>
            <span>{{ school.score }}</span><span> 分</span>
          </p>
          <p class="desc">
            <span v-for="label in school.labels" class="label">
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

  import { mapState } from 'vuex'

  export default {
    name: 'Schools',
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        schools: 'schools'
      })
    },
    created () {
      this.$store.dispatch('getSchools')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
  }

  .school {
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

  .price {
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
