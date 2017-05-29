<template lang="pug">
div#left-nav
  transition(name="transform")
    div.container.row-flex-wrap(v-if="leftNav.open")
      div.actions.row-flex-wrap
        div.row-flex-100
          s-button.row-flex-100(title="ADD A BOX")
        div.row-flex-100
          s-button.row-flex-100(title="SIGN IN")
          s-button.row-flex-100(title="SIGN UP")
      
  
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
    background-color rgba(25, 129,  236, .9)
    width 75vw
    height 100vh

    .actions
      height 20%
      padding 1em
      margin-top 3em

      .s-button
        margin .5em
    

</style>

<script>
import { mapGetters } from 'vuex'
import signUpForm from './signUpForm'

export default {
  name: 'left-nav',
  components: {
    signUpForm,
  },
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),

}
</script>

