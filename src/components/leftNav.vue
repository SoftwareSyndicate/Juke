<template lang="pug">
div#left-nav
  transition(name="transform")
    div.container.row-flex-wrap(v-if="leftNav.open")
      div.row
        div.back-button-container(@click="back()")
          span <-

        transition(name="fade-opacity", mode="out-in")
          div.actions.row-flex-wrap(v-if="!leftNav.currentForm")
            div.row-flex-100
              s-button.row-flex-100(title="ADD A BOX", :onclick="addBoxForm")
            div.row-flex-100
              s-button.row-flex-100(title="SIGN IN", :onclick="addSignInForm")
              s-button.row-flex-100(title="SIGN UP", :onclick="addSignUpForm")

        transition(name="fade-opacity", mode="out-in")
          div.form-container.row-flex-wrap-100(v-if="!!leftNav.currentForm")
            div.box-form-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'boxForm'")
              h4.action-name.row-flex-100 New Box
              box-form
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
  z-index 3

  .transform-enter-active
    transition all .3s cubic-bezier(0, 1.0, 1.0, 1.0)

  .transform-leave-active 
    transition all .3s cubic-bezier(0, 1.0, 1.0, 1.0)
  
  .transform-enter, .transform-leave-to
    transform translateX(-100vw) translateY(-100vh)
  
  .container
    // background-color rgba(25, 129,  236, .95)
    background-color rgba(255, 255,  255, .95)
    width 100vw
    height 100vh

    .back-button-container
      position absolute
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
import boxForm from './boxForm'

export default {
  name: 'left-nav',
  components: {
    signUpForm,
    signInForm,
    boxForm,
  },
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),
  methods: {
    back(){
      this.updateLeftNav({currentForm: null})
    },
    addBoxForm(){
      this.updateLeftNav({currentForm: 'boxForm'})
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

