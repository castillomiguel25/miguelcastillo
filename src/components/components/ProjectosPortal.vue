<template>
  <div id="projec" class="container mb-5">
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h3>Completed Projects</h3>
      </div>
      <div
        class="col-12 col.lg-6 col-md-6 mt-5 text-center animate__animated animate__wobble animate__delay-5"
      >
        <a><h4>Agencia Digital Creandolo</h4></a>
        <b-img
          id="fotos"
          v-bind="fotos"
          src="@/components/img/agencia-one.png"
        ></b-img>

        <b-button
          href="https://agenciadigitalcreandolo.netlify.app/"
          class="ml-3 mt-3 mr-5"
          >View</b-button
        >
        <b-button  href="https://github.com/castillomiguel25/agencydigital" class=" mt-3" variant="primary"> Code</b-button>
      </div>
      <div
        class="col-12 col.lg-6 col-md-6 mt-5 text-center animate__animated animate__wobble animate__delay-5"
      >
        <a><h4>Layetanaproductions</h4></a>
        <b-img
          id="fotos"
          v-bind="fotos"
          src="@/components/img/layetana.png"
        ></b-img>
        <b-button href="https://layetanaproductions.com/" class="ml-3 mt-3 mr-5"
          >View</b-button
        >
        <b-button href="#" class="mt-3" variant="primary"> Code</b-button>
      </div>
      <div
        class="col-12 col.lg-6 col-md-6 mt-5 text-center animate__animated animate__wobble animate__delay-5"
      >
        <a><h4>Platzi-Exchange</h4></a>
        <b-img
          id="fotos"
          v-bind="fotos"
          src="@/components/img/tuexchange-two.png"
        ></b-img>

        <b-button href="https://tuexchangecrypto.netlify.app/" class="ml-3 mt-3 mr-5"
          >View</b-button
        >
        <b-button href="https://github.com/castillomiguel25/Exchange-platzi" class="mt-3" variant="primary"> Code</b-button>
      </div>

      <div
        class="col-12 col.lg-6 col-md-6 mt-5 text-center animate__animated animate__wobble  --animate-delay: 2s"
      >
        <a><h4>CerrajerosR&E</h4></a>
        <b-img
          id="fotos"
          v-bind="fotos"
          src="@/components/img/cerrajeria.png"
        ></b-img>

        <b-button href="http://cerrajerosre.com/" class="ml-3 mt-3 mr-5"
          >View</b-button
        >
        <b-button href="#" class="mt-3" variant="primary"> Code</b-button>
      </div>


    </div>
  </div>
</template>

<script>

export default {
  
  name: "ProjectosPortal",
  data() {
    return {
      fotos: { height: 300, width: 500 },
    };
  },
};
</script>
<style scoped>

@media only screen and (max-width: 1280px) {
  #fotos {
    width: 320px;
  }
}

@media only screen and (max-width: 667px) {
  #fotos {
    width: 320px;
    height: 320px
  }
}
</style>
