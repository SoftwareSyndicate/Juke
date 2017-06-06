<template lang="pug">
div#sign-up-form
  div.field.row-flex-100
    s-input(placeholder="Email")
      
  div.field.row-flex-100
    s-input(placeholder="Password")

  div.field.row-flex-100
    s-button.row-flex-100(title="SUBMIT")

  
</template>

<style lang="stylus">
#sign-up-form
  display flex
  flex-basis 100%
  flex-wrap wrap

  .field
    margin-bottom 1em

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

