<template lang="pug">
div#app
  modal
  div.nav-container
    left-nav
    mobile-nav
    right-nav

  div.content-container
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<style lang="stylus">

@import "../node_modules/syndicate-ui/src/style/main.styl"
@import "./style/main.styl"


#app

  color #616b70;

  .nav-container
    display flex
    flex-basis 100%
    width 100%
    position fixed

  .content-container
    padding-top 60px

  .fade-enter-active, .fade-leave-active
    transition all .2s ease

  .fade-enter, .fade-leave-active
    opacity 0


</style>

<script>
import { mapGetters } from 'vuex'
import mobileNav from './components/mobileNav'
import leftNav from './components/leftNav'
import rightNav from './components/rightNav'
import modal from './components/modal'

export default {
  name: 'app',
  components: {
    mobileNav,
    leftNav,
    rightNav,
    modal
  },
  computed: mapGetters ({
    crumbs: 'crumbs',
  }),

}
</script>

