let app = new Vue({
  el: '#app',
  data: {
    email: 'example@mail.com',
  },

  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
});

let app2 = new Vue({
  el: "#app2",
  data: {
    current: new Date().toLocaleString(),
  },
  computed: {
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
});