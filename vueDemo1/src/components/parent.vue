<template>
  <div class="parent">
    <h3>{{msg}}</h3>
    <input type="text" v-model="num"/>
    <Child :num="setNum"  @sendMsg="getMsg"/>
    <p> {{childInfo}}</p>
  </div>
</template>
<script>
  import Child from './child'
  export default{
    name:"parent",
    components:{Child},
    data(){
       return{
          msg:"我是父组件~",
          childInfo:"",
          num:5
       }
    },
    methods:{
      getMsg(data){
        this.childInfo=data;
      }
    },
    computed:{
      setNum(){//-----父组件向子组件传值：语法
         return this.num-0;
       }
    }
  }
</script>
<style scoped>
    .parent{
      width: 500px;
      height: 500px;
      border: 1px solid green;
      padding: 20px;
      margin: 0 auto;
      text-align: center;
    }
</style>
