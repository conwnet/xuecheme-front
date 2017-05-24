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
    <div class="weui-tab">
      <div class="weui-navbar">
        <div class="weui-navbar__item" @click="choose(1)" :class="{'weui-bar__item_on': chooseOn == 1}">
          明天
        </div>
        <div class="weui-navbar__item" @click="choose(2)" :class="{'weui-bar__item_on': chooseOn == 2}">
          后天
        </div>
        <div class="weui-navbar__item" @click="choose(3)" :class="{'weui-bar__item_on': chooseOn == 3}">
          大后天
        </div>
      </div>

      <div class="weui-tab__panel">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" @click="showConfirmActionSheet(con)" v-for="con in plan.content">
            <div class="weui-cell__bd">
              <p class="course_center" :style="{color: con.el ? '#E64340' : '#1AAD19'}">{{ parseInt(con.start / 60) + ':' + parseInt(con.start % 60) }}
                - {{ parseInt(con.end / 60) + ':' + parseInt(con.end % 60) }}</p>
            </div>
            <div class="weui-cell__ft" v-if="!con.el">
            </div>
          </a>
        </div>
      </div>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="weui-mask" v-if="tip.mask" @click="hideConfirmActionSheet"></div>
      </transition>
      <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': tip.sheet}">
        <div class="weui-actionsheet__title">
          <p class="weui-actionsheet__title-text">请确认您的预约信息</p>
        </div>
        <div class="weui-actionsheet__menu">
          <div class="weui-actionsheet__cell">{{ coach.name }}</div>
          <div class="weui-actionsheet__cell">{{ parseInt(course.start / 60) + ':' + parseInt(course.start % 60) }}
            - {{ parseInt(course.end / 60) + ':' + parseInt(course.end % 60) }}</div>
        </div>

        <div class="weui-actionsheet__action">
          <div class="weui-actionsheet__cell" @click="addCourse(course)">
            <span style="color:red">确认预约</span>
          </div>
        </div>
        <div class="weui-actionsheet__action">
          <div class="weui-actionsheet__cell" @click="hideConfirmActionSheet">取消</div>
        </div>
      </div>

    </div>

    <div id="toast" v-if="tip.toast">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
        <p class="weui-toast__content">已完成</p>
      </div>
    </div>
    <div style="display: none">{{ selected }}</div>
  </div>

</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'Coach',
    data () {
      return {
        chooseOn: 0,
        selected: []
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
      coach () {
        this.choose(1)
      },
      plan () {
        this.$store.dispatch('getCourses')
      },
      courses () {
        for (let course of this.courses) {
          for (let con of this.plan.content) {
            if (course.start === con.start && course.end === con.end) {
              con.el = true
              this.selected.push(1)
            }
          }
        }
      }
    },
    methods: {
      choose (id) {
        this.chooseOn = id
        let date = new Date(Date.now() + 86400000 * id)
        this.course.year = date.getYear()
        this.course.month = date.getMonth()
        this.course.date = date.getDate()
        this.$store.dispatch('getPlan')
      },
      showConfirmActionSheet (course) {
        if (!course.el) {
          this.tip.sheet = true
          this.tip.mask = true
          this.course.start = course.start
          this.course.end = course.end
        }
      },
      hideConfirmActionSheet () {
        this.tip.sheet = false
        this.tip.mask = false
      },
      addCourse (course) {
        this.$store.dispatch('addCourse')
        this.hideConfirmActionSheet()
        this.$store.dispatch('getCourses')
      }
    },
    created () {
      this.course.type = 2
      this.course.coach_id = this.$route.params.id
      this.$store.dispatch('getCoach')
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
