export default{
  template: `
  <div class="form-container">
    <div class="image-container">
      <img src="assets/images/login.svg" alt="login image">
    </div>

    <p class="heading">{{welcomemessage}}</p>
    <p class="subheading">{{lockedoutmessage}}</p>
    <p class="heading" id="locktimer"></p>

    <form action="#" method="#" ref="loginform" id="loginform">
      <input type="text" name="name" placeholder="username" v-model="input.username" autofocus="true" required>
      <input type="password" name="password" placeholder="password" v-model="input.password" required>

      <p class="lockout">{{message}}</p>

      <button class="button" type="button" v-on:click="login()">LOGIN</button>
    </form>
  </div>
  `,

  data(){
    return{
      input:{username:'', password:''},
      stuff: ['empty'],
      loginAttempts: 0,
      message: '',
      welcomemessage: 'Welcome, please log in.',
      unlocked: true,
      lockedoutmessage: '',
      lockedouttimer: 60,
      locked: false
    }
  },
  mounted(){
    //check if account should be locked
    	if (localStorage.getItem('loginattempts')) this.loginAttempts = (localStorage.getItem('loginattempts'));

      if(this.$parent.loggedout = true){
      //clear user data stored in browser
      localStorage.clear();
      //clear user data stored in root component
      this.stuff = ['empty'];
      this.$emit("info", []);
    }
  },

  methods:{
    login(){
      console.log("logging in");
        let url = "./admin/scripts/login.php?user="+this.input.username+"&&pw="+this.input.password;
        //let url = "./admin/scripts/login.php?user="+this.input.username+"&&pw=placeholder";

      console.log(url);

      fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data == false || data[0].length < 0) {
          //check if user exists
          console.log("Authentication failed, try again");
          this.message = "user not found";
        } else {
          //populate array with user info if exists
          this.stuff = data[0];
          console.log(this.stuff);
          //check pw
          if(this.input.password == this.stuff.user_password){
            //send user info to root component
            this.$emit("user", this.stuff);
            this.$emit("logout", false);

            //reset lockout number
            localStorage.setItem('loginattempts', (0));
            this.loginAttempts = 0;

            //send router to home
            this.$router.replace({name:'home'});
          }else{
            this.message = "password does not match.";
            //+1 login attempts to lockout after 3 tries
            this.loginAttempts++;
            this.lockAccount();
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },

    lockAccount(){
      var count = 3-this.loginAttempts;
      if(this.loginAttempts > 2){
        this.unlocked = false;
        this.locked=true;
        this.lockedoutmessage = "Oops! Too many failed attemps. Try again in:"

        document.getElementById("locktimer").style.display="block";
        document.getElementById("loginform").style.opacity=0;
        var timer = 60;//this.lockedouttimer;
        var x = setInterval(function() {
          timer--;
          document.getElementById("locktimer").innerHTML = timer;
          console.log(timer);
          if(timer<=1){
            document.getElementById("loginform").style.opacity=1;
            document.getElementById("locktimer").style.display="none";
          }
          if(timer<0){
            clearInterval(x);
          }
        },1000);

      }else{
        this.message = "Wrong password. attempts left: "+count;
        //saves attempts to keep count even on page refresh
        localStorage.setItem('loginattempts', (this.loginAttempts));
      }
    }
  }
}
