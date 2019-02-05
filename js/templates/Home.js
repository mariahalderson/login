export default{
  template: `
    <section id="home">
      <p class="heading">{{ message }} {{ userinfo[0] }}</p>
      <p class="subheading">We haven't seen you since</p>
      <p class="lasttime">{{ userinfo[1] }}</p>

      <div class="image-container">
        <img :src="'assets/images/'+timeImage" alt="image">
      </div>

      <a class="button" v-on:click="logout">LOGOUT</a>
    </section>
  `,
  mounted(){
    this.currentTime = new Date().getHours();
    this.checkTime();
    if (localStorage.getItem('userinfo')) this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
  },
  data(){
    return{
      message: "Welcome home, ",
      userinfo: [],
      lastTime: "",
      currentTime: "",
      timeImage: "night.svg"
    }
  },
  methods:{
    checkTime(){
      //change message based on time of day.
      if(this.currentTime < 12){
        this.message = "Good Morning, ";
        this.timeImage = "morning.svg";
      }else if(this.currentTime > 12 && this.currentTime < 18){
        this.message = "Good Afternoon, ";
        this.timeImage = "afternoon.svg";
      }else if(this.currentTime > 18){
        this.message = "Good Evening, ";
        this.timeImage = "night.svg";
      }
    },
    logout(){
      this.$emit("logout", true);
      this.userinfo=[];
      this.$router.replace({name:'login'});
    }
  }
}
