<template lang="pug">
div#app
  div.nav-container
    // s-side-nav.desktop(:items="nav_items")
    // s-top-nav.mobile(:items="nav_items")

  div.content-container
    // div.breadcrumbs-container
    //   s-breadcrumbs(:crumbs="crumbs")
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue


</template>

<style lang="stylus">
#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'app',
  computed: mapGetters ({
    nav_items: 'nav_items',
    crumbs: 'crumbs',
  }),

}
</script>

