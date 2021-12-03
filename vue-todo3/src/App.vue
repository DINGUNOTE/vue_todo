<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용 (값이 같으면 축약 가능)
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body{text-align:center;background-color:#eee;}

  input{width:200px;border-style:groove;}

  button{border-style:groove;}

  .shadow{box-shadow:5px 10px 10px rgba(0, 0, 0, 0.03);}
</style>
