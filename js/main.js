"use strict";

// DECLARATIVE RENDERING THE LIST//

let list = new Vue ({
  el: '.list',
  data: {
    newToDoText: '',
    todos: [
      { 
        li: 1,
        text: 'learn Vue Js this week'
      },
      { 
        li: 2,
        text: 'learn french'
      },
      { 
        li: 3,
        text: 'learn English'
      }
    ],
    nextToDoLi: 4
  },

  methods: {
    addNewToDo: function() {
      this.todos.push({
        li: this.nextToDoLi++,
        text: this.newToDoText
      })
      this.newToDoText = ''
    }
  }

})



