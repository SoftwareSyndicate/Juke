<template lang="pug">
div#mobile-nav
  div.left
    div.burger-icon
      p M
      
  div.center
    h2.page-name Boxes

  div.right
    div.filters
      p Y
    
</template>

<style lang="stylus">
#mobile-nav
  display flex
  flex-basis 100%
  height 50px
  align-items center
  justify-content space-between

  .left
    margin-left 1em

  .center
    .page-name
      font-size 2em

  .right
    margin-right 1em


</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'mobile-nav',
  computed: mapGetters ({
    nav_items: 'nav_items',
  }),
}
</script>

