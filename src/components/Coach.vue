<template>
  <div class="container">
     <div class="coach">
      <img :src="coach.headimgurl" class="headimg" />
      <div class="text">
        <h3 class="name">{{ coach.name }}</h3>
        <p class="school">
          <span>{{ coach.school }}</span>
        </p>
        <p class="star"><span class="highlight">★★★★★</span>
          <span>5.0</span><span> 分</span>
        </p>
        <p class="desc">
            <span v-for="label in coach.labels" class="label">
              {{ label }}
            </span>
          <span class="address">沈阳</span>
        </p>
      </div>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">明天</mt-tab-item>
      <mt-tab-item id="2">后天</mt-tab-item>
      <mt-tab-item id="3">大后天</mt-tab-item>
    </mt-navbar>

    <mt-loadmore :top-method="refreshPlan" ref="loadmore" class="schema">
      <mt-cell :title="toTime(con.start) + '-' + toTime(con.end)" is-link v-for="con in plan.content" @click.native="confirmAddCourse(con)">
        <span :style="{ color: con.el ? 'red' : 'green' }">{{ con.el ? '已选' : '可选' }}</span>
      </mt-cell>
    </mt-loadmore>

    <br />

    <mt-popup v-model="popupVisible" position="bottom"  style="width: 100%; background: #eee">
      <mt-header title="信息确认"></mt-header>
      <mt-cell title="教练姓名" :value="coach.name"></mt-cell>
      <mt-cell title="开始时间" :value="toTime(course.start)"></mt-cell>
      <mt-cell title="结束时间" :value="toTime(course.end)"></mt-cell>
      <mt-button type="danger" size="large" @click="addCourse" style="margin: 0.5rem 0;">确认预约</mt-button>
      <mt-button type="default" size="large" @click="hidePopop" style="margin: 0.5rem 0;">取消</mt-button>
    </mt-popup>

  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'Coach',
    data () {
      return {
        chooseOn: 0,
        selected: '1',
        popupVisible: false,
        actions: [{
          name: '哈哈'
        }]
      }
    },
    computed: {
      ...mapState({
        coach: 'coach',
        tip: 'tip',
        course: 'course',
        courses: 'courses',
        plan: 'plan',
        user: 'user'
      })
    },
    watch: {
      selected () {
        let date = new Date(Date.now() + 86400000 * parseInt(this.selected))
        this.course.year = date.getYear()
        this.course.month = date.getMonth()
        this.course.date = date.getDate()
        this.$store.dispatch('getPlan')
      }
    },
    methods: {
      isSelected (con) {
        for (let course of this.courses) {
          if (con.start === course.start && con.end === course.end) {
            return true
          }
        }
        return false
      },
      toTime (time) {
        let hour = '00' + parseInt(time / 60)
        hour = hour.slice(hour.length - 2)
        let minute = '00' + parseInt(time % 60)
        minute = minute.slice(minute.length - 2)
        return hour + ':' + minute
      },
      confirmAddCourse (course) {
        this.course.start = course.start
        this.course.end = course.end
        this.popupVisible = true
      },
      addCourse (course) {
        this.$store.dispatch('addCourse')
        this.popupVisible = false
        this.$store.dispatch('getPlan')
      },
      hidePopop () {
        this.popupVisible = false
      },
      refreshPlan () {
        this.$store.dispatch('getPlan')
        this.$refs.loadmore.onTopLoaded()
      }
    },
    created () {
      let date = new Date(Date.now() + 86400000 * parseInt(this.selected))
      this.course.type = 2
      this.course.coach_id = this.$route.params.id
      this.course.year = date.getYear()
      this.course.month = date.getMonth()
      this.course.date = date.getDate()
      this.$store.dispatch('getCoach')
      this.$store.dispatch('getPlan')
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .schema {
    margin-top: 0.2rem;
  }

  .weui-cells {
    margin-top: 0;
  }

  .course_center {
    text-align: center;
  }

  .weui-tab {
    height: auto;
  }

  .container {
    overflow: auto;
    height: 100%;
  }

  .coach {
    display: flex;
    border-bottom: 1px #ccc solid;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
