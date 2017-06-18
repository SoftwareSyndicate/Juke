<template lang="pug">
div.station-list-item
  div.left
    div.currently-playing-image-container
      img(v-if="station.currently_playing", :src="station.currently_playing.image")

  div.right
    div.row-flex-wrap
      div.row-flex
        p.name {{station.name}}
      div.row-flex(v-if="station.currently_playing")
        p.currently-playing {{station.currently_playing.name}} - {{station.currently_playing.artist}}
</template>

<style lang="stylus">


.station-list-item
  display flex
  flex-basis 100%
  padding .5em
  border 1px solid rgba(0,0,0, .2)
  border-radius 4px
  box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.15)

  .left
    display flex
    margin-right 1em

    .currently-playing-image-container
      height 3.5em
      width 3.5em

      img
        height 100%
        border-radius 10%

  .right
    flex-grow 1

    .name
      font-size 1em

    .currently-playing
      font-size .7em


</style>

<script>
export default {
  name: 'station-list-item',
  props: {
    station: {
      type: Object,
      default: () => {

      }
    }
  }

}
</script>
