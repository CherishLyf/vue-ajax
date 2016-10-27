import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const STORAGE_KEY = 'todos-vuejs'

const state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
  ADD_TODO (state, text) {    // 添加 todo
    state.todos.push({
      text: text,
      done: false
    })
  },
  DELETE_TODO (state, todo) {   // 删除 todo
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  TOGGLE_TODO (state, todo, text) {   // 切换 todo
    todo.done = !todo.done
  },
  EDIT_TODO (state, todo, value) {    // 编辑 todo
    todo.text = value
  },
  TOGGLE_ALL (state, done) {    // 切换所有
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },
  CLEAR_COMPLETED (state, todo) {   // 清除完成
    state.todos = state.todos.filter(todo => !todo.done)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
