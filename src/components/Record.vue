<template>
  <div class="container">
    <div style="text-align: center; font-size: 2rem; margin-top: 3rem;">暂无记录</div>
  </div>
</template>

<script>

  export default {
    name: 'Coaches',
    data () {
      return {
        coaches: [
          {
            id: 1,
            name: '李教练',
            school: '沈阳银河驾校',
            headimgurl: 'http://img5.imgtn.bdimg.com/it/u=296192363,461159298&fm=11&gp=0.jpg',
            labels: ['老司机', '服务好', '很幽默']
          },
          {
            id: 2,
            name: '王教练',
            school: '沈阳宏达驾校',
            headimgurl: 'http://img1.imgtn.bdimg.com/it/u=14373339,4284090740&fm=23&gp=0.jpg',
            labels: ['大美女', '很耐心']
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    overflow: auto;
    height: 100%;
  }

  .coach {
    display: flex;
    border-bottom: 1px #ccc solid;
  }

  .headimg {
    margin: 5px auto;
    width: 7rem;
    height: 7rem;
    border-radius: 0.5rem;
  }

  .text {
    flex: 2.8;
    padding: 5px;
  }

  .name {
    color: #4b566a;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .school {
    font-size: 1.6rem;
    line-height: 2rem;
    color: #4b566a;
  }

  .highlight {
    color: #eb5211;
  }

  .desc {
    font-size: 1rem;
    color: #999;
    line-height: 2rem;
    display: flex;
  }

  .label {
    padding-right: 1rem;
  }

  .address {
    flex: 1;
    text-align: right;
    padding-right: 1rem;
  }

</style>
