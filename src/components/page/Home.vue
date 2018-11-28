<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import Loading from '../../common/Loading'
import List from '../../common/List'
import SubNav from '../../common/SubNav'
export default {
    components: {
        SubNav,List,InfiniteLoading,Loading
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 4rem;
}
</style>


