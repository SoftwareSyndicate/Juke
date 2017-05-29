<template lang="pug">
div#mobile-nav
  div.left
    div.menu-icon-container(@click="toggleLeftNav()")
      div.menu-icon(:class="{'open': leftNav.open}")
        span.line &nbsp
        span.line &nbsp
        span.line &nbsp
    
  div.center
    h2.page-name(v-if="currentBox.name") {{currentBox.name}}
    h2.page-name(v-else) Boxes
    h2.page-name(v-else) Boxes

  div.right
    div.filter-icon-container(@click="toggleRightNav()")
      div.filter-icon(:class="{'open': rightNav.open}")
        span.line &nbsp
        span.line &nbsp
        span.line &nbsp

</template>

<style lang="stylus">
#mobile-nav
  display flex
  flex-basis 100%
  height 60px
  align-items center
  justify-content space-between

  .left
    height 100%
    width  4em
    display flex

    .menu-icon-container
      display flex
      height 100%
      flex-basis 100%
      align-items center
      justify-content center
      z-index 5
      
      .menu-icon
        display flex
        flex-direction column
        justify-content space-between
        height .8em
        width 1em

        &.open
          .line
            transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)
            background-color white
                
        .line
          border-radius 1px
          height 2px
          background-color #616b70

  .center
    .page-name
      font-size 2em
      color #616b70

  .right
    height 100%
    width  4em
    display flex

    .filter-icon-container
      display flex
      height 100%
      flex-basis 100%
      align-items center
      justify-content center
      z-index 5
      
      .filter-icon
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        height .8em
        width 1em

        &.open
          .line
            transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)
            background-color white
              
        .line
          border-radius 2px
          height 2px
          background-color #616b70

          &:nth-child(1) 
            width 16px

          &:nth-child(2) 
            width 12px
    
          &:nth-child(3) 
            width: 8px
    
         


</style>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'mobile-nav',
  computed: mapGetters ({
    nav_items: 'nav_items',
    leftNav: 'leftNav',
    rightNav: 'rightNav',
    currentBox: 'currentBox'
  }),
  methods: {
     ...mapActions({
       toggleLeftNav: 'toggleLeftNav',
       toggleRightNav: 'toggleRightNav' 
    })
  }
}
</script>

