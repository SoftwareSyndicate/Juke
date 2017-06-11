<template lang="pug">
div#box-form
  p box form bitch!
  
</template>

<style lang="stylus">
#box-form
  display flex

</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'box-form',
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),

}
</script>

