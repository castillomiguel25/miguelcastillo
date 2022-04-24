<template
 >
  <div class="container">
    <div class="row">
      <div class="col text-center mt-5 mb-5">
        <h3>Contact</h3>
      </div>
    </div>
    <div class="row animate__animated animate__wobble animate__delay3s">
      <div id="form" class="col-6 text-center">
        <form
          id="contactForm"
          class="contact-form"
          action="https://formcarry.com/s/0SRqotYRu33"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            value="Contact Form"
            name="subject"
            id="subject"
          />
          <div
            class="contact-form-success alert alert-success d-none"
            id="contactSuccess"
          >
            Mensaje enviado.
          </div>

          <div
            class="contact-form-error alert alert-danger d-none"
            id="contactError"
          >
            mensaje enviado.
            <span></span>
          </div>
          <div class="form-row">
            <div class="form-group col-lg-6 col-md-12 col-12 pr-lg-2">
              <input
                type="text"
                value=""
                data-msg-required="Please enter your name."
                maxlength="100"
                class="form-control py-2"
                placeholder="enter your name..."
                name="name"
                id="name"
                required
              />
            </div>

            <div class="form-group col-lg-6 pl-lg-2">
              <input
                type="text"
                value=""
                data-msg-required="Please enter your phone number."
                maxlength="100"
                class="form-control py-2"
                placeholder="enter your phone number..."
                name="phone"
                id="phone"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col">
              <textarea
                maxlength="5000"
                data-msg-required="Please enter your message."
                rows="4"
                class="form-control"
                placeholder="enter your message..."
                name="message"
                id="message"
                required
              ></textarea>
            </div>
          </div>
          <div class="form-row text-center">
            <div class="form-group col">
              <b-button
                variant="outline-light"
                shift-v="8"
                type="submit"
                value="ENVIAR"
               
                data-loading-text="cargando..."
              >
                <b-icon icon="inbox-fill"></b-icon> Send
              </b-button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-center mb-3 mt-5">
        <h3>Request Service</h3>
      </div>
      <div class="col-12 text-center mb-3 mt-3">
      If you need a website according to your needs, do not hesitate to consult. <br>
      Scalable products and woocommerce online stores at the best price.
      </div>
    </div>
  

    <acordion-portal />


    <div class="row mb-3 mt-5">
      <div class="col text-center">
        <router-link to="/">
          <b-button
                variant="outline-light"
                shift-v="8"
               
              >
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
import AcordionPortal from "@/components/AcordionPortal";
export default {
  data() {
    return {
      commerce: false,
      page: false,
    };
  },

  components: {
    AcordionPortal,
    FootersPortal

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



#form {
  padding: 20px;
  border: 2px solid white;
  margin: 2px;
  transform: translate(50%);
  height: 350px;
}

#b{
  border-radius: 10%;
}
</style>
