<template>
  <div id="caja" class="container-fluid">
    <div class="row"></div>

    <div class="row mt-5 ">
      <div
        class="col-lg-4 col-12 text-center animate__animated animate__wobble animate__delay2s"
      >
        <h1>Miguel Castillo</h1>
        <p>Frontend Developer</p>
         <b-button target="_blank" href="/miguel.pdf" class=" ml-3 mt-3  button"
          >Descargar CV</b-button>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  
  name: "HousePortal",
};
</script>

<style scoped>
.button {
  background: rebeccapurple;
}
h1 {
  color: white;
}
p {
  color: white;
}
#caja {
  background-image: url(@/components/img/astro.jpg);
  border: 1px solid black;
  height: 400px;
  box-sizing: padding-box;
}

/* responsive desing */ /* responsive desing */ /* responsive desing */

@media only screen and (max-width: 667px) {
  #caja {
    height: 250px;
  }
}

@media only screen and (max-width: 320px) {
  #caja {
    height: 290px;
  }
}
</style>
