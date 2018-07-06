<template>
  <div class="child">
    <p>{{msg}}</p>
    <button @click="sendMsg">按钮</button>
  </div>
</template>
<script>
  export default{
    name:"child",
    data(){
      return{
        msg:"我是子组件"
      }
    },
    props:{//---------------获取父组件的数据
      num:{
        type:Number,
        dafault:1
      }
    },
    computed:{//----------对父组件的数据进行计算
      addNum(){
        return this.num*10;
      }
    },
    methods:{//-----------向父组件传递
      sendMsg(event){
        //两个参数： 1.自定义key  2.数据
        this.$emit('sendMsg',this.addNum);
      }
    }

  }
</script>
<style scoped>
  .child{
    width: 300px;
    height: 100px;
    background: palegoldenrod;
    margin: 0 auto;
    color: #fff;
    padding: 20px;
  }
  button{
    width: 50px;
    height: 20px;
    border: none;
    background: yellowgreen;
    color: #fff;
  }
  p{
    font-size: 20px;
  }
</style>

