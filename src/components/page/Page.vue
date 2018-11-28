<template>
    <div class="page-view">
        <header-bar @showTalion="open"></header-bar>
        <router-view></router-view>
        <talion-view v-show="talion" @closeTalion="close"></talion-view>
    </div>
</template>

<script>
import HeaderBar from '../../common/HeaderBar'
import TalionView from '../../common/TalionView'
export default {
    components: {
        HeaderBar,TalionView
    },
    data() {
        return {
            talion: ''
        }
    },
    methods: {
        open() {
            this.talion = 'open'
        },
        close() {
            this.talion = ''
        }
    }
}
</script>


