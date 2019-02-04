export default{
  template: `
    <section id="home">

      <p>{{ message }} {{ userinfo[0] }}</p>

      <p>We haven't seen you since {{ userinfo[1] }}</p>
    </section>
  `,
  mounted(){
    //this.getInfo();
    // this.currentTime = new Date().toLocaleTimeString();
    this.currentTime = new Date().getHours();
    this.lastTime = new Date();
    this.checkTime();
    if (localStorage.getItem('userinfo')) this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
  },
  data(){
    return{
      message: "Welcome home ",
      userinfo: [],
      lastTime: "",
      currentTime: ""
    }
  },
  methods:{
    // getInfo(){
    //   //this.userinfo = this.$parent.userinfo;
    //   // this.currentTime = new Date().toLocaleTimeString();
    // }
    checkTime(){
      console.log(this.currentTime);
      if(this.currentTime < 12){
        this.message = "Good Morning!";
      }else if(this.currentTime > 12 && this.currentTime < 18){
        this.message = "Good Afternoon!";
      }else if(this.currentTime > 18){
        this.message = "Good Evening!";
      }
    }
  }
}
