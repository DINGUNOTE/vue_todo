<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item"> <!-- propsdata라는 배열 안에서 todoItem 갯수만큼 for문을 돌리겠다. 배열의 index를 같이 받아온다 --> <!-- 인자를 두개 보내던 것을 객체화해서 하나로 보낸다. -->
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"><i class="fas fa-check"></i></span> <!-- complete 값이 true이면 클래스 추가 --> <!-- 인자를 두개 보내던 것을 객체화해서 하나로 보낸다. -->
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})"><i class="fas fa-trash-alt"></i></span> <!-- 메소드에 todoItem 값과, index를 같이 넘겨준다 -->
      </li> 
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    // removeTodo(todoItem, index){
    //   this.$store.commit('removeOneItem', {todoItem, index});
      
    // },
    // toggleComplete(todoItem, index){
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
    ...mapMutations({
      removeTodo: 'removeOneItem', // 인자를 선언하지 않아도 호출되는 시점의 인자가 적용된다.
      toggleComplete: 'toggleOneItem'
    }),
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
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

  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  /* // 리스트 아이템 트랜지션 효과 */
</style>