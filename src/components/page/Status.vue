<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../../common/Banner'
import UserBar from '../../common/UserBar'
import Card from '../../common/Card'
import DownloadApp from '../../common/DownloadApp'

export default {
  name: 'status',
  components: { Banner, UserBar, Card, DownloadApp },
  data () {
    return {
      items: new Array(10)
    }
  }
}
</script>

<style lang="less" scoped>
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>
