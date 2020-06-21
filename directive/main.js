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
    myName: '匿名',
  },
  methods: {
    onchangetemp: function() {
      console.log(this.temperature.toFixed(1));
    },
    onchangememo: function() {
      console.log('入力値は 「' + this.memo + '」です。')
    }
  }
});

let app13 = new Vue({
  el: '#app13',
  data: {
    mails: [],
  }
});

let app14 = new Vue({
  el: '#app14',
  data: {
    show: true,
  }
});

let app15 = new Vue({
  el: '#app15',
  data: {
    holiday: '',
  }
});

let app16 = new Vue({
  el: "#app16",
  data: {
    pay: 'credit',
  }
});

let app17 = new Vue({
  el: '#app17',
  data: {
    show: true,
  }
});

let app18 = new Vue({
  el: '#app18',
  data: {
    books: [
      {
        title: 'サンプル書籍1',
        author: '佐藤',
        price: 1000,
      },
      {
        title: 'サンプル書籍2',
        author: '田中',
        price: 1500,
      },
      {
        title: 'サンプル書籍3',
        author: '西村',
        price: 800,
      },
    ]
  }
});

let app19 = new Vue({
  el: "#app19",
  data: {
    book: {
      title: 'サンプル書籍',
      author: '佐藤',
      price: 1000,
    }
  }
});

let app20 = new Vue({
  el: '#app20',
})

let app21 = new Vue({
  el: '#app21',
  data: {
    books: [
      {
        title: 'サンプル書籍1',
        author: '佐藤',
        price: 1000,
      },
      {
        title: 'サンプル書籍2',
        author: '田中',
        price: 1500,
      },
      {
        title: 'サンプル書籍3',
        author: '西村',
        price: 800,
      },
    ]
  },
  computed: {
    expensiveBooks: function() {
      return this.books.filter(function(b) {
        return b.price >= 1000;
      })
    }
  }
});

let app22 = new Vue({
  el: "#app22",
  data: {
    songs: [
      {
        title: 'インフェルノ',
        lyrics: '照らすは闇僕らの...',
        artist: 'Mrs.GreenApple'
      },
      {
        title: '白日',
        lyrics: '時には誰かを知らず知らずの...',
        artist: 'King Gnu',
      },
    ]
  }
});

let app23 = new Vue({
  el: "#app23",
  data: {
    list: ['赤りんご', '青りんご', '黄りんご']
  },
  methods: {
    onclick: function() {
      // setメソッドを用いる事で更新を通知してくれる
      Vue.set(this.list, 1, '毒りんご');
    },
    onclickDelete: function() {
      //配列の先頭要素を削除
      this.list.shift();
    }
  }
});

let app24 = new Vue({
  el: "#app24",
  data: {
    attrs: {
      size: 20,
      maxLength: 14,
      required: true,
    }
  }
});

let app25 = new Vue({
  el: '#app25',
  data: {
    attr: 'width',
    size: 100
  },
});

let app26 = new Vue({
  el: '#app26',
  data: {
    message: `<h3>デスク周りのイメージ</h3>
      <img src="../image/image2.jpg">`
  }
});

let app27 = new Vue({
  el: '#app27',
  data: {
    name: '匿名'
  }
})

let app28 = new Vue({
  el: '#app28',
  data: {
    color: {
      backgroundColor: 'Aqua',
      color: 'Red',
    },
    size: {
      fontSize: '1.5em'
    }
  }
});

let app29 = new Vue({
  el: '#app29',
  data: {
    message: '皆さん、こんにちは！',
  }
});

let app30 = new Vue({
  el: '#app30',
});

let app31 = new Vue({
  el: '#app31',
  methods: {
    onsubmit: function(e) {
      if (!confirm('送信しても良いですか？')) {
        e.preventDefault();
        return;
      }
    }
  }
});

let app32 = new Vue({
  el: '#app32',
  data: {
    result: '-',
  },
  methods: {
    onclick: function(e) {
      this.result = Math.floor(Math.random() * 100) + 1;
    }
  }
});

let app33 = new Vue({
  el: '#app33',
  data: {
    name: '匿名',
  },
  methods: {
    clear: function() {
      this.name = '';
    }
  }
});

let app34 = new Vue({
  el: '#app34',
  data: {
    name: '匿名',
  },
  methods: {
    help: function() {
      window.alert('氏名（漢字）を入力してください');
    }
  }
});

let app35 = new Vue({
  el: '#app35',
  data: {
    pos: {
      left: 0,
      top: 0,
    },
    show: false,
  },
  methods: {
    onleftclick: function() {
      this.show = false;
    },
    onrightclick: function(e) {
      this.pos = {
        top: e.pageY + 'px',
        left: e.pageX + 'px',
      };
      this.show = true;
    }
  }
});