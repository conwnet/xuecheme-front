<template>
  <div class="container">
    <div class="header">
      <img :src="$store.state.user.headimgurl" class="headimg">

      <div class="glass"></div>
      <div class="menu">
        <div class="menu_item">
          <p class="menu_item_title">学车进度</p>
          <p class="menu_item_content">{{ user.process || '未绑定' }}</p>
        </div>
        <div class="menu_item">
          <p class="menu_item_title">推荐人数</p>
          <p class="menu_item_content">{{ user.count || '暂无' }}</p>
        </div>
        <div class="menu_item">
          <p class="menu_item_title">学车进度</p>
          <p class="menu_item_content">￥{{ user.money || '0.00' }}</p>
        </div>
      </div>

    </div>


    <mt-cell title="姓名" @click.native="changeName" is-link>
      <svg class="item_icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-yunying"></use>
      </svg>
      <span :style="{ color: user.name ? 'green' : 'gray' }">{{ user.name || '修改姓名' }}</span>
    </mt-cell>

    <mt-cell title="性别" @click.native="changeSex" is-link>
      <svg class="item_icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-yunying"></use>
      </svg>
      <span style="color: green;">{{ user.sex === 1 ? '先生' : '女士' }}</span>
    </mt-cell>


    <mt-cell title="手机号" to="/user/phone" is-link>
      <svg class="item_icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-yunying"></use>
      </svg>
      <span :style="{ color: user.phone ? 'green' : 'gray' }">{{ user.phone || '绑定手机号'}}</span>
    </mt-cell>


    <mt-cell title="学车进度" to="/user/phone" is-link>
      <svg class="item_icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-yunying"></use>
      </svg>
      <span :style="{ color: user.process ? 'green' : 'gray' }">{{ user.process || '绑定交管帐号' }}</span>
    </mt-cell>

    <br />

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>

  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import { MessageBox } from 'mint-ui'

  export default {
    name: 'User',
    data () {
      return {
        okToast: false,
        sheetVisible: false,
        actions: [],
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
      changeName () {
        let name = this.user.name
        MessageBox.prompt('请问我们该如何称呼您？', '提示', {inputValue: name}).then(({ value, action }) => {
          if (action === 'confirm') {
            this.user.name = name
            this.$store.dispatch('saveUserName')
          }
        })
      },
      changeSex () {
        this.actions = [
          {
            name: '先生',
            method: () => {
              this.user.sex = 1
              this.$store.dispatch('saveUserSex')
            }
          },
          {
            name: '女士',
            method: () => {
              this.user.sex = 2
              this.$store.dispatch('saveUserSex')
            }
          }
        ]
        this.sheetVisible = true
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


  .header {
    background: #26a2ff;
    padding-top: 2rem;
    height: 14.5rem;
  }

  .headimg {
    margin: auto;
    width: 8rem;
    height: 8rem;
    display: block;
    border-radius: 50%;
  }

  .item_icon {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  .glass {
    margin-top: 2rem;
    opacity: 0.4;
    height: 4.5rem;
    background: #000;
  }

  .menu {
    height: 3.5rem;
    padding: 0.5rem;
    position: relative;
    bottom: 4.5rem;
    color: #fff;
    display: flex;
  }

  .menu_item {
    flex: 1;
    line-height: 2rem;
    text-align: center;
  }

  .menu_item_title {
    font-size: 1rem;
  }

  .menu_item_content {
    color: #fff;
    font-size: 0.9rem;
  }

</style>
