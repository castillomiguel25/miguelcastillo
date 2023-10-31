<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="loading text-center">
         <ring-loader :loading="isLoading" :color="'#68d391'" :size="'300px'"></ring-loader>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";
export default {
  name: "LoaderVi",
 components: {
RingLoader
 }
};
</script>
<style>
.loading{
  height: 650px;
  max-height: 100%;
  background: black;
}
</style>