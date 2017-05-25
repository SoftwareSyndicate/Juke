<template lang="pug">
div.box-list
  div.box-list-item-container(v-for="box in boxes")
    p {{box.name}}
  
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
export default {
  name: 'box-list',
  props: {
    boxes: {
      type: Array,
      default: () => [] 
    }
  }
}
</script>

