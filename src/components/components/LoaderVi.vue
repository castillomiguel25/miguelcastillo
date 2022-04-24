<template>
    <div>
         <ring-loader :loading="isLoading" :color="'#68d391'" :size="'300px'"></ring-loader>
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