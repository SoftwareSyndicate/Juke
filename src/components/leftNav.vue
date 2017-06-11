<template lang="pug">
div#left-nav
  transition(name="transform")
  div.container.row(v-if="leftNav.open")
    div.row.top-bar
      div
        div.menu-icon(:class="{'open': leftNav.open}")
          span.close.hairline
          
      div
        div.back-button-container(@click="back()")
          span <-

    transition(name="fade-opacity", mode="out-in")
      div.actions.row-flex-wrap(v-if="!leftNav.currentForm")
        div.row-flex-100
          s-button.row-flex-100(title="ADD A STATION", :onclick="addStationForm")
        div.row-flex-100
          s-button.row-flex-100(title="SIGN IN", :onclick="addSignInForm")
          s-button.row-flex-100(title="SIGN UP", :onclick="addSignUpForm")

    transition(name="fade-opacity", mode="out-in")
      div.form-container.row-flex-wrap-100(v-if="!!leftNav.currentForm")
        div.station-form-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'stationForm'")
          h4.action-name.row-flex-100 New Station
          station-form
        div.sign-in-from-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'signInForm'")
          h4.action-name.row-flex-wrap-100 Sign In
          sign-in-form
        div.sign-up-from-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'signUpForm'")
          h4.action-name.row-flex-wrap-100 Sign Up
          sign-up-form

          
  
</template>

<style lang="stylus">
#left-nav
  position absolute
  z-index 4

  .transform-enter-active
    transition all .3s cubic-bezier(0, 1.0, 1.0, 1.0)

  .transform-leave-active 
    transition all .3s cubic-bezier(0, 1.0, 1.0, 1.0)
  
  .transform-enter, .transform-leave-to
    transform translateX(-100vw)
  
  .container
    // background-color rgba(25, 129,  236, .95)
    background-color rgba(255, 255,  255, .95)
    width 100vw
    height 100vh

    .top-bar
      height 60px
      display flex
      align-items center

    .close
      position relative
      display inline-block
      width 50px
      height 50px
      overflow hidden
      
      &:hover 
        &::before, &::after 
        background white

        &::before, &::after 
          content ''
          position absolute
          height 2px
          width 100%
          top 50%
          left 0
          margin-top -1px
          background #000

       &::before 
         @include transform(rotate(45deg))
       
       &::after 
         @include transform(rotate(-45deg))
       
       &.big 
         @include transform(scale(3))
       
       &.hairline 
         &::before, &::after 
           height 1px

    .back-button-container
      display flex
      justify-content center
      align-items center
      top 0
      right 0
      height 60px
      width 60px
    
    .actions
      height 18%
      padding 1em
      margin-top 3em

      .s-button
        margin .5em
    
    .form-container
      margin-top 2em
      padding 1.5em
        
      .action-name
        font-size 1.8em
        font-weight 300
        justify-content center
        margin-bottom 1em
      
</style>

<script>
import { mapMutations } from 'vuex'  
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import signUpForm from './signUpForm'
import signInForm from './signInForm'
import stationForm from './stationForm'

export default {
  name: 'left-nav',
  components: {
    signUpForm,
    signInForm,
    stationForm,
  },
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),
  methods: {
    back(){
      this.updateLeftNav({currentForm: null})
    },
    addStationForm(){
      this.updateLeftNav({currentForm: 'stationForm'})
    },
    addSignUpForm(){
      this.updateLeftNav({currentForm: 'signUpForm'})
    },
    addSignInForm(){
      this.updateLeftNav({currentForm: 'signInForm'})
    },
    ...mapMutations({
      'updateLeftNav': 'UPDATE_LEFT_NAV'
    })
  }

}
</script>

