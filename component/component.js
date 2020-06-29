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
});

//動的コンポーネントの基本
Vue.component('banner-morning', {
  template: `<div class="banner">
    <h3>おはようございます！</h3>
    <p>今日も1日頑張りましょう。</p>
  </div>`
});
Vue.component('banner-noon', {
  template: `<div class="banner">
    <h3>こんにちは！</h3>
    <p>お疲れ様です！午後も頑張りましょう！</p>
  </div>`
});
Vue.component('banner-afternoon', {
  template: `<div class="banner">
    <h3>こんばんは！</h3>
    <p>今日も1日お疲れ様でした！</p>
  </div>`
});
new Vue({
  el: '#app9',
  created: function() {
    let that = this;
    this.interval = setInterval(function() {
      that.current = (that.current + 1) % that.components.length;
    }, 3000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  },
  computed: {
    currentBanner: function() {
      return 'banner-' + this.components[this.current];
    }
  },
  data: {
    current: 0,
    components: ['morning', 'noon', 'afternoon']
  }
});

Vue.component('tab-member', {
  template: `<div class="tab">
    <h3>アルバイト募集中！</h3>
    <p>Cat Cafeで一緒にお仕事しませんか？</p>
    <label>名前：<input type="text" v-model="name"></label>
    <input type="submit" value="登録">
  </div>`,
  data: function() {
    return {
      name: ''
    }
  }
});
Vue.component('tab-salary', {
  template: `<div class="tab">
    <h3>給料</h3>
    <p>月~金 950円<br>土・日・祝日 1050円</p>
  </div>`,
  data: function() {
    return {
      name: ''
    }
  }
});
Vue.component('tab-env', {
  template: `<div class="tab">
    <h3>職場環境</h3>
    <p>優しい人やかわいい猫に囲まれた、楽しい職場です！</p>
  </div>`,
  data: function() {
    return {
      name: ''
    }
  }
});
new Vue({
  el: "#app10",
  methods: {
    onclick: function(tab) {
      this.current = tab;
    }
  },
  computed: {
    tabNames: function() {
      return Object.keys(this.tabs);
    },
    currentTab: function() {
      return 'tab-' + this.current;
    }
  },
  data: {
    current: 'member',
    tabs: {
      'member': 'アルバイト募集',
      'salary': '給料',
      'env': '職場環境',
    }
  }
});

Vue.component('my-input', {
  props: ['value'],
  // model: {
  //   prop: 'name',
  //   event: 'change'
  // },
  template: `<label>
    名前：
    <input type="text" v-model="internalValue">
  </label>`,
  // template: `<label>
  //   名前：
  //   <input
  //     type="text" v-bind:value="name"
  //     v-on:input="$emit('change', $event.target.value)">
  // </label>`

  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        if(this.value !== newValue) {
          this.$emit('input', newValue);
        }
      }
    }
  }
});
new Vue({
  el: '#app11',
  data: {
    message: ''
  }
});

new Vue({
  el: '#app12',
  data: {
    flag: true,
  },
  methods: {
    onclick: function() {
      this.flag = !this.flag;
    }
  }
});

new Vue({
  el: "#app13",
  data: {
    id: 0,
    panels: [
      'おはようございます',
      'こんにちは',
      'こんばんは'
    ],
  },
  methods: {
    onclick: function () {
      this.id = (this.id + 1) % this.panels.length;
    }
  }
});

new Vue({
  el: '#app14',
  data: {
    flag: true,
  },
  methods: {
    onclick: function () {
      this.flag = !this.flag;
    }
  }
});