var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
app3.seen = false;

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});
app4.todos.push({ text: 'New Item' });

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'apple' },
      { id: 1, text: 'orange' },
      { id: 2, text: 'lemon' }
    ]
  }
});

//データとメソッド
var obj = {
  foo: 'bar'
} 

Object.freeze(obj);

var app8 = new Vue({
  el: '#app-8',
  data: obj
});

var data = { a : 1 }

var vm = new Vue({
  el: '#app-9',
  data: data,
});

console.log(vm.$data === data);
console.log(vm.$el = document.querySelector('#example'));

vm.$watch('a', function (newValue, oldValue) {
  console.log(`${oldValue} -> ${newValue}`);
});

var app10 = new Vue({
  el : '#app-10',
  data : {
    rawHtml : '<span style="color: red">This should be red.</span>'
  }
});