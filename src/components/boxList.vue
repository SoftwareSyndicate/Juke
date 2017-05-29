<template lang="pug">
transition-group(name="staggered-fade", tag="div",  v-bind:css="false", v-on:before-enter="beforeEnter", v-on:enter="enter",  v-on:leave="leave").box-list
  div.box-list-item-container(v-for="(box, index) in boxes", v-bind:key="box.id", v-bind:data-index="index")
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
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '4em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>

