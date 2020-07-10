let app = new Vue({
  el: "#app",
  data: {
    offsetX: 0,
    offsetY: 0,
    pointX: 250,
    pointY: 250,
    score: 0,
  },
  methods: {
    onmousemove: function (e) {
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
      if(e.offsetX == this.pointX && e.offsetY == this.pointY) {
        this.pointX = Math.floor(Math.random() * 500) + 1;
        this.pointY = Math.floor(Math.random() * 500) + 1;
        this.score++;
      }
    },
  }
});