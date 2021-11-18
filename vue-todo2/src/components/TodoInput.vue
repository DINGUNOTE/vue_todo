<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      newTodoItem: "",
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTodoItem !== ''){ // 아이템에 값이 있을 때
        this.$emit('addTodoItem', this.newTodoItem) // $emit('이벤트 이름', 인자1, 인자2....)
        this.clearInput();
      }
      
    },
    clearInput: function(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus{outline:none;}
  .inputBox{height:50px;line-height:50px;background:#fff;border-radius:5px;}
  .inputBox input{font-size:0.9rem;border-style:none;}

  .addContainer{display:block;width:3rem;background:linear-gradient(to right, #6478FB, #8763FB);border-radius:5px;float:right;}

  .addBtn{color:#fff;vertical-align:middle;cursor:pointer;}
</style>