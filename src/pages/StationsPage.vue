<template lang="pug">
div#stations-page.page
  station-list(:stations="filteredStations")
</template>

<style lang="stylus">
#stations-page
  padding 16px

  h1
    font-size 4em

</style>

<script>
import { mapGetters } from 'vuex'
import stationList from '../components/stationList'

export default {
  components: {
    stationList
  },
  name: 'stations-page',
  computed: mapGetters({
    filteredStations: 'filteredStations',
  }),
  mounted(){
    this.$store.dispatch('watchStations')
  }

}
</script>
