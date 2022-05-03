<template>
  <div id="caja" class="container-fluid">
    <div class="row">
     
    </div>
      
      <div class="row mt-5 ml-5">
        <div class="col-4 text-center animate__animated animate__wobble animate__delay2s">
          <h1 >Miguel Castillo</h1>
          <p>
      Frontend Developer
          </p>
          
       
        </div>
        <div class="col"> 
          
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
  h1 {
   color: white;
  }
  p {
     color: white;
  }
#caja{
 
background-image: url(@/components/img/astro.jpg);  
  border: 1px solid black;
  height: 500px;
  box-sizing: padding-box;
 
 
}



/* responsive desing */ /* responsive desing */ /* responsive desing */

@media only screen and (max-width: 667px) {


#caja {
  height: 350px;
}
}


</style>
