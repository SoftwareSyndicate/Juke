<template lang="pug">
div#left-nav
  transition(name="transform")
    div.container.row(v-if="leftNav.open")
      div.row.top-bar
        div.close-icon-container(:class="{'open': leftNav.open}", @click="updateLeftNav({'open': !leftNav.open})")
          span.close.hairline

        div.current-action-container
          h2 {{leftNav.currentAction}}

        div.back-button-container(@click="back()")
          span <-

      div.navigation(v-if="!leftNav.currentForm")
        div.route-list
          div.route.row-flex-wrap-100
            div.row-flex-100
              router-link(:to="{name: 'stations'}") stations
            div.row-flex-100
              router-link(:to="{name: 'new-station'}") new
          div.route.row-flex-100
            p users

          div.route.row-flex-100
            p analytics

        // div.row-flex-100
        //   s-button.row-flex-100(title="ADD A STATION", :onclick="addStationForm")
        // div.row-flex-100
        //   s-button.row-flex-100(title="SIGN IN", :onclick="addSignInForm")
        //   s-button.row-flex-100(title="SIGN UP", :onclick="addSignUpForm")

      transition(name="fade-opacity", mode="out-in")
        div.form-container.row-flex-wrap-100(v-if="!!leftNav.currentForm")
          div.station-form-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'stationForm'")
            station-form
          div.sign-in-from-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'signInForm'")
            sign-in-form
          div.sign-up-from-container.row-flex-wrap-100(v-if="leftNav.currentForm === 'signUpForm'")
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
    background-image url("../assets/noise.png"), -webkit-radial-gradient(top center, #f7931e, #f15a24 35vh)
    width 80vw
    height 100vh
    color white
    box-shadow 1px 0px 2px 1px rgba(0, 0, 0, 0.18)
    border-right 1px solid rgba(0, 0, 0, 0.1)

    a
      color white

    .top-bar
      height 60px
      display flex
      align-items center

    .close
      position relative
      display inline-block
      width 25px
      height 25px
      overflow hidden

      &::before, &::after
        content ''
        position absolute
        height 2px
        border-radius 2px
        width 100%
        top 50%
        left 0
        margin-top -1px
        background white

      &::before
        transform rotate(45deg)

      &::after
        transform rotate(-45deg)

    .close-icon-container
      display flex
      justify-content center
      align-items center
      top 0
      right 0
      height 60px
      width 60px

    .current-action-container
      margin-left auto

    .back-button-container
      display flex
      justify-content center
      align-items center
      margin-left auto
      top 0
      right 0
      height 60px
      width 60px

    .navigation
      padding 1em

      .list
        
        .item
          margin-bottom 1em
          
          .sub-item
            font-size 1.5em

          .first
            margin-left 3em

          .second
            margin-left 6em
            
      
    .form-container
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
      this.updateLeftNav({currentForm: null, currentAction: null})
    },
    addStationForm(){
      this.updateLeftNav({currentForm: 'stationForm', currentAction: "New Station"})
    },
    addSignUpForm(){
      this.updateLeftNav({currentForm: 'signUpForm'})
    },
    addSignInForm(){
      this.updateLeftNav({currentForm: 'signInForm'})
    },
    ...mapMutations({
      'updateLeftNav': 'UPDATE_LEFT_NAV',
    }),
    ...mapActions({
       updateLeftNav: 'updateLeftNav',
       toggleRightNav: 'toggleRightNav'
    })

  }

}
</script>
