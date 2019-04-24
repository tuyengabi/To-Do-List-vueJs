// CREAT INSTANCE TODOLIST
let todoList = new Vue ({
  el: '.toDoList',
  data: {
    todos: [],
    newList: ''
  },

  methods: {
    addTodo: function() {
      this.todos.push(this.newList);
      this.newList = '';
    },
    delTodo: function(index) {
      this.todos.splice(index,1);
    }
  }
})
