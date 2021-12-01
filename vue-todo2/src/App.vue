<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList> <!-- v-bind:내려보낼 props 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data(){
    return{
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem){
      // 로컬스토리지에 입력값 저장
      const obj = {completed: false, item: todoItem}; // 완료 여부 체크값을 추가하기 위해서 객체를 만듦
      localStorage.setItem(todoItem, JSON.stringify(obj)); // JSON.stringify : 자바스크립트 객체를 문자열로 변환해주는 API
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item); // 로컬스토리지에서 값을 삭제
      this.todoItems.splice(index, 1); // 배열에서 해당 인덱스에 해당하는 값을 1개 삭제한다.
    },
    toggleOneItem(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지의 데이터 갱신
      localStorage.removeItem(todoItem, index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      this.todoItems = []; // 리스트 배열 초기화
      localStorage.clear(); // 로컬스토리지 비우기
    }
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body{text-align:center;background-color:#eee;}

  input{width:200px;border-style:groove;}

  button{border-style:groove;}

  .shadow{box-shadow:5px 10px 10px rgba(0, 0, 0, 0.03);}
</style>
