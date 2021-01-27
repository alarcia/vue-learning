const router = new VueRouter({
  base: "router",
  routes:[
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
    }
  ]
})

var app = new Vue({
  router,
  el: '#app',
})
