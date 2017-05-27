<template lang="pug">
div#left-nav
  transition(name="transform")
    div.container(v-if="leftNav.open")
      p left nav
  
</template>

<style lang="stylus">
#left-nav
  position absolute
  z-index 3

  .transform-enter-active
    transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)

  .transform-leave-active 
    transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)
  
  .transform-enter, .transform-leave-to
    transform translateX(-75vw) translateY(-100vh)
  
  .container
    background-color rgba(0, 0, 0, .7)
    width 75vw
    height 100vh
    

</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'left-nav',
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),

}
</script>

