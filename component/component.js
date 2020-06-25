// グローバル登録
Vue.component('my-hello', {
  template: `<div>こんにちは、{{ name }}!</div>`,
  data: function() {
    return {
      name: 'Vue.js'
    };
  }
});

new Vue({
  el: '#app1',
});

//ローカル登録
let helloWorld = {
  template: `<div>Hello World!</div>`,
};

new Vue({
  el: '#app2',
  components: {
    'hello-world': helloWorld
  }
  //以下でも可
  //components: {
  //  'hello-world': {
  //    template: `<div>Hello World!</div>`,
  //  }
  //}
});

Vue.component('hello-name', {
  // プロパティの型などの制限
  props:{
    //データ方の指定
    yourName: [ String, Number ]

    //規定値の指定
    // yourName: {
    //   type: String,
    //   default: '匿名'
    // }

    //自作の検証ルールの追加も可能
    // yourName: {
    //   type: String,
    //   required: true,
    //   validator: function(value) {
    //     return value.length <= 5;
    //   }
    // }
  },
  template: `<div>こんにちは、{{ yourName }}さん！</div>` 
});

new Vue({
  el: '#app3'
});

// プロパティで受け取った値を更新
Vue.component('my-counter', {
  props: [ 'init' ],
  template: `<div>現在値は{{ current }}です！
  <input type="button" v-on:click="onclick" value="増やす"></div>`,
  // currentに値を写して、currentの値を操作する
  data: function() {
    return {
      current: this.init
    };
  },
  methods: {
    onclick: function() {
      this.current++;
    }
  }
});
new Vue({
  el: '#app4',
});

//子コンポーネントから親コンポーネントへの伝達
Vue.component('my-calculator', {
  props: [ 'step' ],
  template: `<button type="button" v-on:click="onclick">{{ step }}</button>`,
  methods: {
    onclick: function() {
      this.$emit('plus', Number(this.step));
    }
  }
});
new Vue({
  el: "#app5",
  data: {
    current: 0
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  }
})

//スロット
Vue.component('hello-slot', {
  template: `<div>こんにちは、<slot>ゲスト</slot>さん</div>`,
});
new Vue({
  el: '#app6',
});

Vue.component('my-slot', {
  template: `<div>
    <header>
      <slot name="header">DEFAULT HEADER</slot>
    </header>
    <div>
      <slot>DEFAULT MAIN</slot>
    </div>
    <footer>
      <slot name="footer">DEFAULT FOOTER</slot>
    </footer>
  </div>`
});
new Vue({
  el:'#app7'
});

Vue.component('my-book', {
  data: function() {
    return {
      book: {
        title: 'サンプル１',
        price: 1500,
        author: '佐藤',
      }
    };
  },
  template: `<div>
    <slot v-bind:book="book">{{ book.title }} ({{ book.publish }})</slot>
  </div>`
});
new Vue({
  el: "#app8",
})