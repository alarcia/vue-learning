var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    sum: 3+6,
    value: 6,
    isVisible: true,
    people: ["Andy", "John", "Alex", "Jay"],
    content_html: "<h1>Hey vue</h1>",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png",
    text: "Description of image",
    number: 13,
    v_model: "I'm using v-model"
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    calculateSum(value1, value2){
      return value1 + value2;
    },

    increment(value1){
      this.number++
    },

    decrement(value1){
      this.number--
    }
  },

  watch: {
    number: function(val){
      console.log("watch: " + val)
    }
  }
})
