<template>
  <div>
    <span @click="updateTodoStatus(todo)" :class="{'is-completed': todo.isCompleted}">{{ todo.title }}</span>
    <!-- <button @click="deleteTodo">Delete</button> -->
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodoStatus']),
    // deleteTodo (){
    //   this.$store.dispatch('deleteTodo', this.todo)
    // },
    // updateTodoStatus (){
    //   this.$store.dispatch('updateTodoStatus', this.todo)
    // }
  }
}
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
</style>