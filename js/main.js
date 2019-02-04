import Login from '/login/js/templates/Login.js';
import Home from '/login/js/templates/Home.js';

const routes = [
	{path: '/', redirect: {name: 'login'} },
	//{path: '/', component: Login},
	{path: '/login', name: 'login', component: Login},
	{path: '/home', name: 'home', component: Home}
]


const router = new VueRouter({
	routes:routes
});


//main Vue instance
const vm = new Vue ({

  el: "#app",

  data:{
    message: "Hello I am a message",
		userinfo: [],
		loggedout: true
  },
	mounted(){
		if (localStorage.getItem('userinfo')) this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
		//this.loggedout = false;
	},
	methods:{
		setuser(stuff){
			this.userinfo = stuff;
			localStorage.setItem('userinfo', JSON.stringify([this.userinfo.user_name, this.userinfo.user_date]));
		},
		logoutuser(bool){
			this.loggedout = bool;
		}
	},

	router: router


});
