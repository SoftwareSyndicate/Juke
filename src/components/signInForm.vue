<template lang="pug">
div#sign-in-form
  p sign in bitch!
  
</template>

<style lang="stylus">
#sign-in-form
  display flex
  

</style>

<script>
import { mapGetters } from 'vuex'  
export default {
  name: 'sign-in-form',
  computed: mapGetters ({
    leftNav: 'leftNav',
  }),
}
</script>

