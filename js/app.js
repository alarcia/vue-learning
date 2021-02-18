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
    filter_age: 30,
    people: ["Andy", "George", "Alexander", "Jay"],
    ArrayObjects: [
      {name: "Andy", surname: "Smith", age: 28},
      {name: "John", surname: "Lee", age: 32},
      {name: "George", surname: "Lucas", age: 67},
      {name: "Jay", surname: "Pritchet", age: 68},
      {name: "Bart", surname: "Simpson", age: 8},
    ],
    CopyArrayObjects: [],
    content_html: "<h1>Hey vue</h1>",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png",
    text: "Description of image",
    number: 13,
    v_model: "I'm using v-model",
    p_error: false
  },

  created: function(){
    this.CopyArrayObjects = this.ArrayObjects;
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    filterPeopleObjects: function(){
      this.ArrayObjects = this.CopyArrayObjects;
      this.ArrayObjects = this.ArrayObjects.filter(
        person => {
          return person.age > this.filter_age
        })
    },

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
