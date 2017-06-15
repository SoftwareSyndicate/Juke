<template lang="pug">
div#modal
  transition(name="lift")
    div.container.row(v-if="modal.open")
      div.row.top-bar
        div.close-icon-container(@click="updateModal({'open': false})")
          span.close.hairline

        div.header
          h2 {{modal.header}}


      div.component-container
        p component goes here
        
</template>

<style lang="stylus">
#modal
  position absolute
  z-index 0
  width 100vw
  height 100vh
  
  .lift-enter-active, .lift-leave-active
    transiton all .4s ease


  .lift-enter, .lift-leave-active
    z-index 0
    opacity 0
    
  
  .container
    padding 1em
    background-color rgba(255, 255,  255, .95)
      

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
        height 1px
        width 100%
        top 50%
        left 0
        margin-top -1px
        background #616b70
       
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
  name: 'modal',
  components: {
    signUpForm,
    signInForm,
    stationForm,
  },
  computed: mapGetters ({
    modal: 'modal',
  }),
  methods: {
    ...mapActions({
       updateModal: 'updateModal',
    })

  }

}
</script>

