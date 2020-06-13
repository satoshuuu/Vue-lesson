let app = new Vue({
  el: '#app',
  data: {
    current: new Date(),
  },
  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  }
});

let app2 = new Vue({
  el: '#app2',
  data: {
    author: {
      name: '佐藤',
    }
  },
  created: function() {
    let that = this;
    // リアクティブなプロパティの追加
    this.timer = setTimeout(function() {
      Vue.set(that.author, 'age', '21');
    }, 3000);
    this.timer = setTimeout(function () {
      that.author = Object.assign({}, that.author, {sex: '男', university: '東京電機大学'});
    }, 6000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
});

let app3 = new Vue({
  el: '#app3',
  data: {
    name: '',
    upperName: '',
  },
  created: function() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  watch: {
    name: function(newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
});