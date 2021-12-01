<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>

      <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>

        <div slot="body">
          아무 것도 입력하지 않으셨습니다.
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  data(){
    return{
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo(){
      if(this.newTodoItem !== ''){ // 아이템에 값이 있을 때
        this.$emit('addTodoItem', this.newTodoItem) // $emit('이벤트 이름', 인자1, 인자2....)
        this.clearInput();
      } else{
        this.showModal = !this.showModal;
      }
      
    },
    clearInput(){
      this.newTodoItem = '';
    },
    
  },
  components: {
      Modal: Modal
  }
}
</script>

<style scoped>
  input:focus{outline:none;}
  .inputBox{height:50px;line-height:50px;background:#fff;border-radius:0 5px 5px 0;}
  .inputBox input{font-size:0.9rem;border-style:none;}

  .addContainer{display:block;width:3rem;background:linear-gradient(to right, #6478FB, #8763FB);border-radius:5px;float:right;}

  .addBtn{color:#fff;vertical-align:middle;cursor:pointer;}

  .closeModalBtn{color:#42b983;}
</style>