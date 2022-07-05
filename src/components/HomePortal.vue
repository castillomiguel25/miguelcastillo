<template>
  <div class="container text-center mt-5">
    <h1 class="animate__animated animate__wobble animate__delay3s">
      <strong> About me</strong>
    </h1>
    <a href="#">
      <b v-b-toggle.sidebar-variant class="button">
        <b-icon
          class="mt-5"
          shift-v="8"
          icon="person-bounding-box"
          font-scale="3"
        ></b-icon
      ></b>
      <b-sidebar
        id="sidebar-variant"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
        <div class="px-3 py-2">
          <b-img src="@/components/100499673.jpg" fluid thumbnail></b-img>
        </div>
        <b class="row mb-3">
          <b class="col-12 text-center">
            <p>Contact me</p>
            <p>Miguelangelcastillo947@gmail.com</p>
          </b>
         
          <b class="col-12">
            <a
             
            >
              WhatsApp
            </a>
          </b>

         
        </b>
        <b class="col-12 text-center mt-5">
         <a  href="https://www.linkedin.com/in/miguel-angel-castillo-colmenares-2438031b1/"><b-icon icon="linkedin" font-scale="4"></b-icon> </a> 
        </b>
        <b class="col-12 text-center mt-5">
         <a href="https://github.com/castillomiguel25"><b-icon icon="github" font-scale="4"></b-icon> </a> 
        </b>
         <b class="col-12 text-center mt-5">
         <a  href="https://api.whatsapp.com/send?phone=+584124431994&text=%20Hola%20estoy%20interesado%20en%20tus%20servicios"><b-icon icon="phone" font-scale="4"></b-icon> </a> 
        </b>
      </b-sidebar>
    </a>
    <b-icon
      class="mb-3 ml-5"
      animation="cylon"
      shift-v="8"
      icon="arrow-left-circle"
      font-scale="2"
    ></b-icon>
    <h1>Hello, I'm Miguel Castillo, welcome to know about me.</h1>
    <div class="row text-center">
      <div class="col-12">
        <p>
          I characterize myself as a person who loves to learn, responsible and
          outstanding in what he does <br />
          I am a Web developer and TSU in Electricity, experienced in Vue.js,
          Javascript,Vuex,Firebase,Nuxt, Html, Css, Git and various Frameworks.
        </p>
      </div>
    </div>

    <div
      id="caja"
      class="row text-center animate__animated animate__wobble animate__delay-2s"
    >
      <div class="col-12 text-center mb-5">
        <h3>Personal Infos</h3>
      </div>
      <div class="col-12 col-lg-4 col-md-4 text-left">
        <p>First Name: Miguel Angel</p>
        <p>Last Name: Castillo Colmenares</p>
        <p>Age: 24</p>
        <p>Nationality: Venezolana</p>
      </div>
      <div id="icon" class="a col-12 col-md-2 col-lg-2 text-left">
        <a href="#">
          <b-icon
            animation="cylon"
            shift-v="8"
            icon="file-person-fill
"
            font-scale="2"
          ></b-icon>
        </a>

        <br /><br />
      </div>
      <div class="col-12 col-lg-4 col-md-4 text-left">
        <p>Address: Venezuela</p>

        <p>Phone: +58-412-443-1994</p>
      </div>
      <div id="icon" class="col-12 col-md-2 col-lg-2 text-left">
        <a href="#">
          <b-icon
            animation="cylon"
            shift-v="8"
            icon="geo-alt"
            font-scale="2"
          ></b-icon
          ><br /><br />
          <b-icon
            animation="cylon"
            shift-v="8"
            icon="phone"
            font-scale="2"
          ></b-icon>
          <br /><br />
          <b-icon
            animation="cylon"
            shift-v="8"
            icon="inbox"
            font-scale="2"
          ></b-icon>
        </a>
        <br /><br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePortal",
};
</script>
<style scoped>
@media only screen and (max-width: 667px) {
  #icon {
    display: none;
  }
}
#caja {
  padding: 20px;
  border: 2px solid;
  margin: 2px;
  box-sizing: padding-box;
}

a {
  color: rebeccapurple;
}
</style>
