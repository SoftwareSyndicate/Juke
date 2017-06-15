<template lang="pug">
div#station-page.page
  div.row-flex
    s-input(placeholder="name", v-model="name")
</template>

<style lang="stylus">
#station-page
  h1
    font-size 4em

</style>

<script>
export default {
  name: 'new-station-page',
  data(){
    return {
      name: '',
      public: true,
    }
  },

}
</script>
