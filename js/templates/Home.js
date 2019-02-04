export default{
  template: `
    <section id="home">
      <p>{{ message }}{{username}}</p>
    </section>
  `,
  created(){
    this.getUser();
  },
  data(){
    return{
      message: "Welcome home ",
      username: "",
      datetime: "",
      currentTime: ""
    }
  },
  methods:{
    getUser(){
      this.username = this.$parent.userinfo;
    }
  }
}
