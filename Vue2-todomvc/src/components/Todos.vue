<style lang="css">
</style>
<template lang="html">
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input placeholder="What needs to be done?" v-model="newTodo" class="new-todo" @keyup.enter="addTodo">
    </header>
    <section class="main">
      <input class="toggle-all" type="checkbox" v-model="allDone" v-cloak>
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
          :key="todo.id"
          v-show="todos.length !== 0">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @click="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input class="edit" type="text"
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)">

        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
             :class="{ selected: visibility == key }"
             @click="visibility = key"
             >{{ key | capitalize }}
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
// localStorage persistence
const STORAGE_KEY = 'todos-vuejs-2.0'
let todoStorage = {
  fetch () {
    let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

//　filter
let filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default {
  name: 'todos',
  data () {
    return {
      filters: filters,
      newTodo: '',
      editedTodo: null,
      todos: todoStorage.fetch(),
      visibility: 'all'
    }
  },
  methods: {
    addTodo () {    // 添加 todo
      let value = this.newTodo && this.newTodo.trim()

      if (!value) {
        return
      }

      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      // console.log(this.todos)
      this.newTodo = ''
    },
    removeTodo (todo) {  // 删除 todo
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    editTodo (todo) {    // 编辑 todo
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },
    doneEdit (todo) {    // 确认编辑
      if (!this.editedTodo) {
        return
      }

      this.editedTodo = null
      todo.title = todo.title.trim()

      if (!todo.title) {
        this.removeTodo(todo)
      }
    },
    cancelEdit (todo) {    // 取消编辑
      this.editedTodo = null
      todo.title = this.beforeEditCache
    }
  },
  computed: {
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return filters.active(this.todos).length
    },
    allDone: {
      get () {
        return this.remaining === 0
      },
      set (value) {
        // console.log(value)
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },
  watch: {
    todos: {
      handler (todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },
  filters: {
    pluralize (n) {
      return n === 1 ? 'item' : 'items'
    },
    capitalize (s) {
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
}

</script>
