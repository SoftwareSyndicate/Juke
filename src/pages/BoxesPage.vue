<template lang="pug">
div#boxes-page.page
  box-list(:boxes="boxes")

</template>

<style lang="stylus">
#boxes-page
  padding 16px
  
  h1
    font-size 4em

</style>

<script>
import { mapGetters } from 'vuex'
import boxList from '../components/boxList'
  
export default {
  components: {
    boxList
  },
  name: 'boxes-page',
  computed: mapGetters ({
    boxes: 'boxes',
  }),

}
</script>

