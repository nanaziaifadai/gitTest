<template>
  <div class="slotChild">
     <h3>{{msg}}</h3>
     <slot name="s1" text="2222"></slot>
  </div>
</template>
<script>
  export default {
    name:"slotChild",
    data(){
      return{
        msg:"我是子组件",
        childMsg:"姓名"
      }
    }
  }
</script>
<style>

</style>
