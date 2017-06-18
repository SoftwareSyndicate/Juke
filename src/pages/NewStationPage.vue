<template lang="pug">
div#station-page.page
  div.row-flex
    s-input(placeholder="name", v-model="c_name")
  s-button(@click.native="create()") create
</template>

<style lang="stylus">
#station-page
  h1
    font-size 4em
  .s-button
    margin-top 5px
</style>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'new-station-page',
  data(){
    return {
      c_name: '',
      public: true,
    }
  },
  computed: {
    name(){
      return this.c_name.trim()
    },
  },
  methods: {
    create(){
      if(!this.name){
        console.warn('need a name');
        return
      }
      this.$store.dispatch('createStation', {
        name: this.name,
        public: this.public,
        created_at: Date.ISOString()
      }).then((results)=>{
        this.$router.push({name: 'stations'})
        return results
      })
    }
  }
}
</script>
