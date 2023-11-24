<template>
  <div
    class="bg-white"
    id="App"
    v-bind:style="{ background: '#' + fondo, color: '#' + colores }"
  >
    <LoaderVi v-if="isLoading" />
    <nav
      v-if="!isLoading"
      class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white text-black mb-3"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            MigDev
          </a>
          <button
            type="button"
            v-on:click="toggleNavbar()"
            class="lg:hidden cursor-pointer bg-black text-white p-3 rounded-md"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div
          v-bind:class="{ hidden: !showMenu, flex: showMenu }"
          class="lg:flex lg:flex-grow items-center"
        >
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="mr-3">
              <a class="mt-2" href="#">
                <button @click="changeLanguage('es')">
                  <img
                    class="w-8 object-cover h-8 rounded-full border border-gray-300"
                    src="./assets/spain.webp"
                    alt="bandera españa"
                  />
                </button>
              </a>
            </li>
            <li class="mr-3">
              <a class="mt-2" href="#">
                <button @click="changeLanguage('en')">
                  <img
                    class="w-8 object-cover h-8 rounded-full border border-gray-300"
                    src="./assets/usa.jpg"
                    alt="bandera usa"
                  />
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a
                v-on:click="OffOn"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                href="#"
              >
                <span class="ml-2">{{
                  on ? $t("message.ModeClear") : $t("message.ModeDark")
                }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                href="/cv-miguel.pdf"
                target="_blank"
              >
                <span class="ml-2">{{ $t("message.download") }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <HomeView v-if="!isLoading" />
  </div>
</template>
<script>
import LoaderVi from "@/components/LoaderVi";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  metaInfo: {
    meta: [{
    name: 'description',
    content: "Miguel Angel Castillo Colmenares Frontend Developer",
  }]
  },
  components: {
    LoaderVi,
    HomeView,
  },
  data() {
    return {
      showMenu: false,
      isLoading: true,
      on: false,
      fondo: "0f0f0f",
      colores: "f0f0f0",
    };
  },
  mounted() {
    const update = this;
    setTimeout(function () {
      update.isLoading = false;
    }, 1000);
  },
  methods: {
    OffOn() {
      this.on = !this.on;
      this.fondo = this.fondo.split("").reverse().join("");
      this.colores = this.colores.split("").reverse().join("");
    },
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style></style>
