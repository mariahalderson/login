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
      let url = "./admin/scripts/login.php?user=mariah";
      console.log(url);

      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.stuff = data[0];
        console.log(this.stuff);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
}
}
