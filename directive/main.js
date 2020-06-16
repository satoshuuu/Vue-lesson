let app = new Vue({
  el: "#app",
  data: {
    message: "こんにちは",
  }
});

let app2 = new Vue({
  el: "#app2",
  data: {
    message: "おはようございます",
  }
});

let app3 = new Vue({
  el: "#app3",
  data: {
    url: "https://jp.vuejs.org/index.html",
  }
});

let app4 = new Vue({
  el: "#app4",
  data: {
    url: "https://jp.vuejs.org/index.html",
  }
});

let app5 = new Vue({
  el: "#app5",
  data: {
    flag: true,
  }
});

let app6 = new Vue({
  el: "#app6",
  data: {
    message: ''
  },
  methods: {
    onclick: function() {
      this.message = new Date().toLocaleString();
    }
  }
})

let app7 = new Vue({
  el: "#app7",
  data: {
    screenX: 0,
    screenY: 0,
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  },
  methods: {
    onmousemove: function(e) {
      this.screenX = e.screenX;
      this.screenY = e.screenY;
      this.pageX = e.pageX;
      this.pageY = e.pageY;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
    }
  }
});

let app8 = new Vue({
  el: '#app8',
  data: {
    pet: 'いぬ',
  }
});

let app9 = new Vue ({
  el: '#app9',
  data: {
    agree: true,
  }
})

let app10 = new Vue ({
  el: '#app10',
  data: {
    os: ['macOS']
  }
});

let app11 = new Vue({
  el: '#app11',
  data: {
    os: '',
  }
});

let app12 = new Vue({
  el: '#app12',
  data: {
    temperature: 0,
    memo: '',
    myName: '',
  },
  methods: {
    onchangetemp: function() {
      console.log(this.temperature.toFixed(1));
    },
    onchangememo: function() {
      console.log('入力値は 「' + this.memo + '」です。')
    }
  }
})