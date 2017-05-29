<template lang="pug">
div#sign-up-form
  p sign up bitch!
  
</template>

<style lang="stylus">
#sign-up-form
  display flex
  

</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'sign-up-form',
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),

}
</script>

