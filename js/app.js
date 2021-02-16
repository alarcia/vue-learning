const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


var app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue',
    sum: 3+6,
    value: 6,
    isVisible: true,
    people: ["Andy", "George", "Alexander", "Jay"],
    content_html: "<h1>Hey vue</h1>",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png",
    text: "Description of image",
    number: 13,
    v_model: "I'm using v-model",
    p_error: false
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  methods: {

    filterPeople: function(){
      this.people = this.people.filter(
        person => {
          return person.length > 5
        })
    },

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
