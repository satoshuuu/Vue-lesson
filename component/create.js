let hook = function(el, binding) {
  if(binding.value === binding.oldValue) {return;}

  if(binding.modifiers.border) {
    el.style.borderColor = binding.value;
    el.style.borderStyle = 'solid';
  } else {
    el.style.backgroundColor = binding.value;
  }
};

Vue.directive('highlight', {
  bind: hook,
  // 属性値の変化を検出する
  update: function(el, binding, vnode, oldValue) {
    if (!binding.modifiers.once) {
      hook(el, binding)
    }
  }
});
// bindとupdateをまとめて定義する
// Vue.directive('highlight', function(el, binding, vnode, oldValue) {
//   el.style.backgroundColor = binding.value;
// });

new Vue({
  el: '#app1',
  // ローカルディレクティブ
  directives: {
    importantcolor: {
      bind: function(el, binding, vnode, oldValue) {
        el.style.color = binding.value;
      }
    }
  },
  data: {
    backColor: 'yellow',
    color: 'red',
  }
});

Vue.directive('highlight2', function(el, binding, vnode, oldValue) {
  switch(binding.arg) {
    case 'bg':
      el.style.backgroundColor = binding.value;
      break;
    case 'border':
      el.style.borderStyle = 'solid';
      el.style.borderWidth = '1px';
      el.style.borderColor = binding.value;
      break;
    case 'text':
      el.style.fontWeight = 'bold';
      el.style.color = binding.value;
      break;
    default:
      throw new Error('指定のハイライトは使えません');
  }
});

new Vue({
  el: '#app2',
  data: {
    color: 'red'
  },
});

Vue.directive('highlight3', {
  bind: function(el, binding) {
    el.addEventListener('mouseenter', function() {
      this.style.backgroundColor = binding.value;
    }, false);
    el.addEventListener('mouseleave', function() {
      this.style.backgroundColor = null;
    }, false);
  }
});

new Vue({
  el: '#app3',
  data: {
    color: 'yellow',
  }
});