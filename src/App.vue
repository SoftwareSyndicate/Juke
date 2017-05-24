<template lang="pug">
div#app
  div.nav-container
    mobile-nav
      

  div.content-container
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<style lang="stylus">
#app
  font-family: 'Montserrat', sans-serif;

  .nav-container
    display flex
    flex-basis 100%
  


</style>

<script>
import { mapGetters } from 'vuex'
import mobileNav from './components/mobileNav'

export default {
  name: 'app',
  components: {
    mobileNav
  },
  computed: mapGetters ({
    crumbs: 'crumbs',
  }),

}
</script>

