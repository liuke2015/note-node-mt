<template>
  <div id="search">
    <div>search-content</div>
    <ul>
      <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: "search",
    head() {
      return {
        title: 'search'
      }
    },
    data() {
      return {
        list: []
      }
    },
    async asyncData() {
      let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
      if (status === 200) {
       return {
         list
       }
      }
    }
  }
</script>

<style>

</style>
