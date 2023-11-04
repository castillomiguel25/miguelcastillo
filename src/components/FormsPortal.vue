<template>
  <div class="centered-container">
    <div>
      <div class="col-span-2 md:col-span-1 p-4 border border-gray-300 rounded text-center">
        <h4 class="text-lg font-bold mb-4">Contactame</h4>
        <form
          id="contactForm"
          class="contact-form"
          action="https://formcarry.com/s/0SRqotYRu33"
          method="POST"
        >
          <input
            class="input-field mb-4 text-black"
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Escribe tu nombre"
          />
          <input
            class="input-field text-black mb-4"
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Escribe tu apellido"
          />
          <input
            class="input-field text-black mb-4"
            type="email"
            name="correo"
            id="correo"
            placeholder="Escribe tu email"
          />
          <textarea
            class="input-field text-black mb-4"
            name="mensaje"
            id="mensaje"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <input
            class="submit-button"
            type="submit"
            value="Enviar mensaje"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      commerce: false,
      page: false,
    };
  },
  mounted() {
     document.getElementById('contactForm').addEventListener('submit', this.handleSubmit);
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
        const response = await axios.post("https://formcarry.com/s/0SRqotYRu33", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

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
    }
  },
  name: "FormsPortal",
};
</script>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.input-field {
  width: calc(100% - 16px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.submit-button {
  width: calc(100% - 16px);
  padding: 8px;
  background-color: #3490dc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
