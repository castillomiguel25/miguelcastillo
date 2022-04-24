<template>
  <b-card-footer class="mt-5" type="dark" id="footer">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 co-md-6 col-lg-6 text-center">
          <h3>Miguel Castillo</h3>
          <p>Junior Full Stack Developer</p>
        </div>
        <div class="col-12 col-md-12 col-lg-6 text-center">
          <h3>Contact me</h3>

          <a
            href="https://www.linkedin.com/in/miguel-angel-castillo-colmenares-2438031b1/"
          >
            <b-icon
              class="mt-3"
              animation="cylon"
              shift-v="8"
              icon="linkedin"
              font-scale="2"
            ></b-icon>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=+584124431994&text=%20Hola%20estoy%20interesado%20en%20tus%20servicios"
          >
            <b-icon
              class="mt-3"
              animation="cylon"
              shift-v="8"
              icon="phone"
              font-scale="2"
            ></b-icon>
          </a>

          <a href="https://github.com/castillomiguel25">
            <b-icon
              class="mt-3"
              animation="cylon"
              shift-v="8"
              icon="github"
              font-scale="2"
            ></b-icon>
          </a>
        </div>
        <div
          class="col-12 mt-3 text-center"
        >
          <p >© Copyright 2022. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </b-card-footer>
</template>

<script>
export default {
  name: "FootersPortal",
};
</script>

<style scoped>
#footer {
  padding: 20px;
  border-top: 2px solid;
}

#img {
  border-radius: 100%;
}
</style>
