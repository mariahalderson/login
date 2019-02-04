export default{
  template: `
  <div class="form-container">
    <p> Please enter your credentials below or click Register to create an account. </p>
    <form action="#" method="#">
      <input type="text" name="name" placeholder="username" v-model="input.username" required>
      <input type="password" name="password" placeholder="password" v-model="input.password" required>
      <button class="button" type="button" v-on:click="login()">LOGIN</button>
    </form>
    <p>{{message}}</p>
  </div>
  `,

  data(){
    return{
      input:{username:'', password:''},
      stuff: ['empty'],
      loginAttempts: 0,
      message: ''
    }
  },
  mounted(){
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
      let url = "./admin/scripts/login.php?user="+this.input.username;
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
      if(this.loginAttempts > 2){
        this.message = "locked out!!";
      }else{
        this.message = "attempts: "+this.loginAttempts;
      }
    },

    // saveLoginTime(){
    //   var logintime = new Date();
    //   let url = "./admin/scripts/login.php?logintime="+logintime;
    //
    //   fetch(url, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json, text-plain, */*",
    //               "X-Requested-With": "XMLHttpRequest"
    //     },
    //     method: "post",
    //     credentials: "same-origin",
    //     body: JSON.stringify(data)
    //     }).catch(function(error) {
    //       console.log(error);
    //     });
    // }
  }
}
