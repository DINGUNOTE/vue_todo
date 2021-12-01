<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{margin:0 auto;width:8.5rem;height:50px;line-height:50px;background:#fff;border-radius:5px;}
  .clearAllBtn{display:block;color:#e20303;cursor:pointer;}
</style>