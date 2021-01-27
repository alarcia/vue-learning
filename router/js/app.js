const router = new VueRouter({
  base: "router",
  routes:[
    {
      path: '/lists',
      component:Lists
    }
  ]
})

var app = new Vue({
  router,
  el: '#app',
})
