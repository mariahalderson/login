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

  methods:{
    login(){
      console.log("logging in");
      let url = "./admin/scripts/login.php?user="+this.input.username;
      console.log(url);

      fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data == false || data[0].length < 0) {
          console.log("Authentication failed, try again");
          this.loginAttempts++;
          this.lockAccount();
        } else {
          this.stuff = data[0];
          console.log(this.stuff);
          this.message = "welcome, "+this.stuff.user_name;
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
    }
  }
}
