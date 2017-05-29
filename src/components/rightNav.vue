<template lang="pug">
div#right-nav
  transition(name="transform")
    div.container(v-if="rightNav.open")
      div.filters.row-flex-wrap
        s-input(:classes="['xs']", :model="name", :placeHolder="'Name'",  :change="onNameChange")
      
  
</template>

<style lang="stylus">
#right-nav
  position absolute
  right 0
  z-index 3

  .transform-enter-active
    transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)

  .transform-leave-active 
    transition all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0)
  
  .transform-enter, .transform-leave-to
    transform translateX(75vw) translateY(-100vh)
  
  .container
    background-color rgba(0, 0, 0, .7)
    width 75vw
    height 100vh
    
    .filters
      padding 1em
      padding-top 4em

</style>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'right-nav',
  data(){
    return {
      name: ""
    }
  },
  computed: mapGetters ({
    rightNav: 'rightNav',
    boxFilters: 'boxFilters'
  }),
  methods: {
    onNameChange(e){
      console.log(e.target.value)
      this.updateBoxFilter({name: e.target.value})
    },
    ...mapActions({
      updateBoxFilter: 'updateBoxFilter',
    })
  }
}
</script>

