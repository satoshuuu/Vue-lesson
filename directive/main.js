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