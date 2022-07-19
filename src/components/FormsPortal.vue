<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center mt-5">
           <h3>Contact</h3>
        </div>
       <div class=" form-register text-center">
        <h4>Registration Form</h4>
        <form
          id="contactForm"
          class="contact-form"
          action="https://formcarry.com/s/0SRqotYRu33"
          method="POST"
          target="_blank"
        >
          <input
            class="controls"
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Enter your Name"
          />
          <input
            class="controls"
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Enter your Last Name"
          />
          <input
            class="controls"
            type="email"
            name="correo"
            id="correo"
            placeholder="Enter your email"
          />
          <input
            class="controls"
            type="textarea"
            name="correo"
            id="correo"
            placeholder="write us a message"
          />
          <input class="botons" type="submit" value="send Message" />
        </form>
      </div>
    </div>
     
    <div class="row mb-3 mt-5">
      <div class="col text-center">
        <router-link to="/">
          <b-button variant="outline-light" shift-v="8">
            Back to Main Menu
          </b-button>
        </router-link>
      </div>
    </div>

    <footers-portal />
  </div>
</template>

<script>
import FootersPortal from "@/components/FootersPortal";
export default {
  data() {
    return {
     
      commerce: false,
      page: false,
    };
  },

  components: {
    FootersPortal,
     
  },

  methods: {
    idpage() {
      this.page = !this.page;
    },
    idpage1() {
      this.commerce = !this.commerce;
    },
  },

  name: "FormsPortal",
};
</script>

<style scoped>


.form-register {
  width: 400px;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 30px;
  border-radius: 4px;
  font-family: "calibri";
  color: white;
  box-shadow: 7px 13px 13px #f4f4f4;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: #24303c;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid rebeccapurple;
  font-family: "calibri";
  font-size: 18px;
  color: white;
}

.form-register p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}

.form-register a {
  color: white;
  text-decoration: none;
}

.form-register a:hover {
  color: white;
  text-decoration: underline;
}

.form-register .botons {
  width: 100%;
  background: rebeccapurple;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}

#form {
  padding: 20px;
  border: 2px solid white;
  margin: 2px;
  transform: translate(50%);
  height: 350px;
}

#b {
  border-radius: 10%;
}
</style>
