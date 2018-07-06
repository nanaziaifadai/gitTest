<template>
  <div class="slotParent">
    <h3>{{msg}}</h3>
    <slotChld>
     <div class="slotParentDiv" slot="s1" slot-scope="key">
       <ul>
         <li>{{key.text}}</li>
       </ul>
     </div>
    </slotChld>
  </div>
</template>
<script>
  import slotChld from './child.vue'
  export default {
    name:"slotParent",
    data(){
      return{
        msg:"我是父组件,利用插槽，向子组件传视图~"
      }
    },
    components:{
      slotChld
    }
  }
</script>
<style>
.slotParent{
  width: 800px;
  height: 500px;
  padding: 20px;
  background: powderblue;
  text-align: center;
}
</style>
