<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow"> <!-- todoItems라는 배열 안에서 todoItem 갯수만큼 for문을 돌리겠다. 배열의 index를 같이 받아온다 -->
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"><i class="fas fa-check"></i></span> <!-- complete 값이 true이면 클래스 추가 -->
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span> <!-- 메소드에 todoItem 값과, index를 같이 넘겨준다 -->
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index){
      console.log(todoItem, index);
      localStorage.removeItem(todoItem); // 로컬스토리지에서 값을 삭제
      this.todoItems.splice(index, 1); // 배열에서 해당 인덱스에 해당하는 값을 1개 삭제한다.
    },
    toggleComplete: function(todoItem, index){
      console.log(todoItem);
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 데이터 갱신
      localStorage.removeItem(todoItem, index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  // 인스턴스가 생성되자마자 호출되는 created 로직
  created: function(){
    if(localStorage.length > 0){
      for(var i=0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      }
    }
  }
}
</script>

<style scoped>
  ul{margin-top:0;padding-left:0;text-align:left;list-style:none;}
  li{display:flex;margin:0.5rem 0;padding:0 0.9rem;height:50px;min-height:50px;line-height:50px;background:#fff;border-radius:5px;}
  .checkBtn{margin-right:5px;color:#62acde;line-height:45px;cursor:pointer;}
  .checkBtnCompleted{color:#b3adad;cursor:pointer;}
  .removeBtn{margin-left:auto;color:#de4343;cursor:pointer;}
  .textCompleted{color:#b3adad;text-decoration:line-through;}
</style>