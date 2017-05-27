<template lang="pug">
div#app
  div.nav-container
    left-nav
    mobile-nav
      

  div.content-container
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<style lang="stylus">

@import "../node_modules/syndicate-ui/src/style/main.styl"
#app
  font-family: 'Montserrat', sans-serif;

  .nav-container
    display flex
    flex-basis 100%
    width 100%
    position fixed

  .content-container
    padding-top 60px

  .view-container  
    .fade-enter-active, .fade-leave-active
      transition all .2s ease

    .fade-enter, .fade-leave-active
      opacity 0


</style>

<script>
import { mapGetters } from 'vuex'
import mobileNav from './components/mobileNav'
import leftNav from './components/leftNav'

export default {
  name: 'app',
  components: {
    mobileNav,
    leftNav
  },
  computed: mapGetters ({
    crumbs: 'crumbs',
  }),

}
</script>

