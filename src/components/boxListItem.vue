<template lang="pug">
div.box-list-item
  div.left
    div.currently-playing-image-container
      img(:src="box.currentlyPlaying.image")

  div.right
    div.row-flex-wrap
      div.row-flex
        p.name {{box.name}}
      div.row-flex(v-if="box.currentlyPlaying")
        p.currently-playing {{box.currentlyPlaying.name}} - {{box.currentlyPlaying.artist}}

</template>

<style lang="stylus">

  
.box-list-item
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
  name: 'box-list-item',
  props: {
    box: {
      type: Object,
      default: () => {
        
      } 
    }
  }

}
</script>

