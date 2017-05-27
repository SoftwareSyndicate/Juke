<template lang="pug">
div.box-list
  div.box-list-item-container(v-for="box in boxes")
    router-link(:to="{name: 'box', params: {id: box.id}}")
      box-list-item(:box="box")
  
</template>

<style lang="stylus">
.box-list
  display flex
  flex-basis 100%
  flex-wrap wrap

  .box-list-item-container
    flex-basis 100%
    padding-bottom 1em

</style>

<script>
import boxListItem from './boxListItem'  
export default {
  name: 'box-list',
  components: {
    boxListItem
  },
  props: {
    boxes: {
      type: Array,
      default: () => [] 
    }
  }
}
</script>

