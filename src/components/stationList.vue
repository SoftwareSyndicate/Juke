<template lang="pug">
transition-group(name="staggered-fade", tag="div",  v-bind:css="false", v-on:before-enter="beforeEnter", v-on:enter="enter",  v-on:leave="leave").station-list
  div.station-list-item-container(v-for="(station, index) in stations", v-bind:key="station._id", v-bind:data-index="index")
    router-link(:to="{name: 'station', params: {id: station._id}}")
      station-list-item(:station="station")
</template>

<style lang="stylus">
.station-list
  display flex
  flex-basis 100%
  flex-wrap wrap

  .station-list-item-container
    flex-basis 100%
    margin-bottom 1em


</style>

<script>
import stationListItem from './stationListItem'
export default {
  name: 'station-list',
  components: {
    stationListItem
  },
  props: {
    stations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '4.2em'},
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0},
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>
