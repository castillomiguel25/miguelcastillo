<template>
  <div
    id="App"
    v-bind:style="{ background: '#' + fondo, color: '#' + colores }"
  >
   <!-- <LoaderVi  v-if="isLoading"/> -->
    <main >
      
      <b-navbar v-if="!isLoading" toggleable="lg" type="dark" id="tamaño">
        <template>
          <div>
            <b-avatar-group size="4rem" class="nav">
              <router-link class="routes" to="/">
                <b-avatar class="mr-5">
                  <img
                    class="mr-3"
                    id="img"
                    src="@/components/100499673.jpg"
                    height="90px"
                    width="100px"
                    alt=""
                  />
                </b-avatar>
              </router-link>

              <b-avatar class="a mr-5 on">
                <b-icon
                  class="mt-5"
                  shift-v="8"
                  icon="gear"
                  font-scale="3"
                  v-on:click="OffOn"
                >
                </b-icon>
              </b-avatar>

              <b-avatar class="a mr-5">
                <router-link to="/forms">
                  <b-icon
                    class="mt-5"
                    shift-v="8"
                    icon="chat-dots"
                    font-scale="3"
                  ></b-icon>
                </router-link>
              </b-avatar>
            </b-avatar-group>
          </div>
        </template>
      </b-navbar>

      <router-view v-if="!isLoading"/>
    </main>
  </div>
</template>
<script>
// import LoaderVi from "@/components/LoaderVi";
export default {
  components: {
    // LoaderVi,
  },


  mounted() {
    const update = this;
    setTimeout(function () {
      update.isLoading = false;
    }, 1000);
  },

  data() {
    return {
      isLoading: true,
      on: false,
      fondo: "0f0f0f",
      colores: "f0f0f0",
    };
  },
  

  methods: {
    OffOn() {
      this.on = !this.on;
      this.fondo = this.fondo.split("").reverse().join("");
      this.colores = this.colores.split("").reverse().join("");
    },
  },

  name: "App",
};
</script>
<style scoped>
.tamaño {
  height: 120px;
  background: black;
}


#img {
  border-radius: 100%;
}

a {
  color: white;
}

.a {
  background: rebeccapurple;
}


@media only screen and (max-width: 667px) {
  .nav{
    transform: translate(55%,0%);
  }
}

@media only screen and (max-width: 540px) {
  .nav{
    transform: translate(35%,0%);
  }
}

@media only screen and (max-width: 494px) {
  .nav{
    transform: translate(30%,0%);
  }
}

@media only screen and (max-width: 540px) {
  .nav{
    transform: translate(35%,0%);
  }
}

@media only screen and (max-width: 450px) {
  .nav{
    transform: translate(23%,0%);
  }
}

@media only screen and (max-width: 414px) {
  .nav{
    transform: translate(16%,0%);
  }
}

@media only screen and (max-width: 393px) {
  .nav{
    transform: translate(13%,0%);
  }
}

@media only screen and (max-width: 375px) {
  .nav{
    transform: translate(10%,0%);
  }
}

@media only screen and (max-width: 360px) {
  .nav{
    transform: translate(35%,0%);
  }
   .routes {
    display: none;
  }
}


@media only screen and (max-width: 280px) {
  .routes {
    display: none;
  }

   .nav{
    transform: translate(77%,0%);
  }

  .on{
    display: none;
  }

}
</style>
