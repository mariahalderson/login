export default{

  template: `
  <div class="form-container">
    <p> Please enter your credentials below or click Register to create an account. </p>
    <form action="#" method="#">
      <input type="text" name="name" placeholder="username" v-model="input.username" required>
      <input type="password" name="password" placeholder="password" v-model="input.password" required>
      <button class="button" type="button" v-on:click="login()">LOGIN</button>
    </form>
  </div>
  `,

  data(){
    return{
      input:{username:'', password:''},
      stuff: []
    }
  },

  methods:{
    login(){
      console.log("logging in");
      let url = "http://localhost:8888/login/admin/scripts/login.php?user="+this.input.username;
      console.log(url);

      fetch("../login/admin/scripts/login_2.php?user="+this.input.user)
      .then(res => res.json())
        //.then(function(response){
          //return(JSON.parse(response));
        //})
        .then(data => {//})
          this.stuff = data[0];
          //data = JSON.parse(data);
          console.log(this.stuff);
          // if (movie) {
          //     console.log(data);
          //     this.singleVidInfo = data[0];
          //
          // } else {
          //     console.log(data);
          //     this.vidinfo = data;
          //   }
          })
          .catch(function(error) {
            console.log(error);
          });

  }
}
}
