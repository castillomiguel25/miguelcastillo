<template>
  <div class="centered-container">
    <div>
      <div class="col-span-1 md:col-span-1 p-4 rounded text-center mb-10">
        <p class="text-3xl font-bold mb-10">
          {{ $t("message.Contact") }}
        </p>
        <div>
          <form
            id="contactForm"
            action="https://formcarry.com/s/0SRqotYRu33"
            method="POST"
            class="contact-form bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                name="Name"
                type="text"
                :placeholder="$t('message.Name')"
              />
            </div>
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mail"
                name="Mail"
                type="text"
                :placeholder="$t('message.Mail')"
              />
            </div>
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Message"
                name="Message"
                type="text"
                :placeholder="$t('message.Message')"
              />
            </div>
            <div class="flex items-center justify-center">
              <input
                class="submit-button bg-red-600 text-white"
                type="submit"
                :value="$t('message.Send')"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      commerce: false,
      page: false,
    };
  },
  mounted() {
    document
      .getElementById("contactForm")
      .addEventListener("submit", this.handleSubmit);
  },
  methods: {
    idpage() {
      this.page = !this.page;
    },
    idpage1() {
      this.commerce = !this.commerce;
    },
    async handleSubmit(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (envío por recarga de página)

      const form = event.target;
      const formData = new FormData(form);

      try {
        const response = await axios.post(
          "https://formcarry.com/s/0SRqotYRu33",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          // Manejar el éxito aquí
          alert("Mensaje enviado correctamente");
        } else {
          // Manejar errores
          alert("Hubo un problema al enviar el formulario");
        }
      } catch (error) {
        console.error("Error al enviar el formulario", error);
        // Manejar errores si ocurren problemas de conexión u otros
        alert("Hubo un error al enviar el formulario");
      }
    },
  },
  name: "FormsPortal",
};
</script>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button {
  width: calc(60% - 16px);
  padding: 8px;
  background-color: #3490dc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
