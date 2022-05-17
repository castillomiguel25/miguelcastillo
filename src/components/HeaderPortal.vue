<template>
  <b-navbar toggleable="lg" type="dark" id="tamaño">
    <b-navbar-nav class="ml-auto">
      <b-navbar-toggle class="mb-5 " target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="mt-5" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <b v-b-toggle.sidebar-variant variant="primary" class="button">
              <b-icon
                shift-v="8"
                icon="person-bounding-box"
                font-scale="4"
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
              <b class="row">
                <b class="col text-center">
                  <p>Contact me</p>

                  
                    <p>Miguelangelcastillo947@gmail.com</p>
                  

                  <li>
                    <a
                      href="https://www.linkedin.com/in/miguel-angel-castillo-colmenares-2438031b1/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=+584124431994&text=%20Hola%20estoy%20interesado%20en%20tus%20servicios"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/castillomiguel25"> GitHub </a>
                  </li>
                </b>
                <b class="col-12 text-center mt-5">
                  <b-icon shift-v="8" icon="linkedin" font-scale="4"></b-icon>
                  <b-icon shift-v="8" icon="github" font-scale="4"></b-icon>
                </b>
              </b>
            </b-sidebar>
          </b-nav-item>
          <b-nav-item href="#" disabled>
            <b-icon shift-v="8" icon="chat-dots" font-scale="4"></b-icon>
          </b-nav-item>

          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      setiando: false,
    };
  },

  name: "HeaderPortal",
};
</script>
<style scoped>
h3 {
  color: white;
}

p {
  color: white;
}

.tamaño {
  height: 90px;
}

#img {
  border-radius: 100%;
}

.button {
  border-radius: 100%;
  height: 45px;
}
</style>
