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
        // 로컬스토리지에 입력값 저장
        var obj = {completed: false, item: this.newTodoItem}; // 완료 여부 체크값을 추가하기 위해서 객체를 만듦
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // JSON.stringify : 자바스크립트 객체를 문자열로 변환해주는 API
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

  .addContainer{display:block;width:3rem;background:linear-gradient(to right, #6478FB, #8763FB);float:right;}

  .addBtn{color:#fff;vertical-align:middle;cursor:pointer;}
</style>