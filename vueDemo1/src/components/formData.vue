<template>
  <div class="formData">
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
  export default {
    name: 'FormData',
    data () {
      return {
        msg: 'Welcome to Your formData.js App'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h3 {
    font-weight: normal;
  }
</style>
