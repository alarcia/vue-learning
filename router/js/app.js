const PageNotFound = {
  template: '#PageNotFound'
}

const router = new VueRouter({
  base: "router",
  routes:[
    {
      path: '/',
      component:Home
    },
    {
      path: '/list_people',
      redirect: '/list_person'
    },
    {
      path: '/list_person',
      component:ListsPerson
    },
    {
      path: '/list_programming',
      component:ListsProgramming
    },
    {
      path: '*',
      component:PageNotFound
    },

  ]
})

var app = new Vue({
  router,
  el: '#app',
  mounted(){
    console.log(this.$route)
  }
})
