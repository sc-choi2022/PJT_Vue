import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: [
      { title: 'Lunch', isCompleted: false, data: new Date().getTime },
      { title: 'Vuex', isCompleted: false, data: new Date().getTime + 1 },
    ]
  },
  getters: {
    completedTodosCount: function(state){
      return state.todos.filter(todo =>{
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodosCount: function(state){
      return state.todos.filter(todo =>{
        return todo.isCompleted === false
      }).length
    },
    allTodosCount: function(state){
      return state.todos.length
    }
  },
  mutations: {
    CREATE_TODO: function(state, todoItem){
      state.todos.push( todoItem )
    },
    DELETE_TODO: function(state, todoItem){
      // 1. todoItem이 첫 번째로 만나는 요소의 index를 가져온다.
      const index = state.todos.indexOf(todoItem)
      // 2. 해당 index 1개만 삭제하고 나머지 요소를 토대로 새로운 배열을 생성한다.
      state.todos.splice(index, 1)
    },
    UPDATE_TODO_STATUS: function(state, todoItem){
      // state.todos = state.todos.map(todo => {
      //   // 1. todoItem과 현재 todos의요소 todo가 서로 일치하면
      //   if (todo === todoItem){
      //     // 2. isCompleted의 값을 변경한 새로운 object를 return
      //     return {
      //       title: todoItem.title,
      //       date: new Date().getTime(),
      //       isCompleted: !todo.isCompleted
      //     }
      //   } else {
      //     // 3. 일치하지 않으면 기존 배열 return
      //     return todo
      //   }
      // })
      state.todos = state.todos.map(todo => {
        if (todo === todoItem){
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }
  },
  actions: {
    createTodo({ commit }, todoItem ){
      commit('CREATE_TODO', todoItem )
    },
    deleteTodo({ commit }, todoItem ){
      commit('DELETE_TODO', todoItem )
    },
    updateTodoStatus({ commit }, todoItem ){
      commit('UPDATE_TODO_STATUS', todoItem)
    }
  },
})
