import Login from '/login/js/templates/Login.js';

const routes = [
	{path: '/', redirect: {name: 'login'} },
	//{path: '/', component: Login},
	{path: '/login', name: 'login', component: Login}
];

const router = new VueRouter({
	routes:routes
});


//main Vue instance
const vm = new Vue ({

  el: "#app",

  data:{
    message: "Hello I am a message"
  },

	router: router


});
