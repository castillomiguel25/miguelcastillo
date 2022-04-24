<template>
  <div class="container text-center mt-5">
    <!-- my skills -->

    <div class="row">
      <div class="col-12 text-center mb-3 mt-5">
        <h3>My Skills</h3>
      </div>

      <!-- icons skill -->

      <div class="col-4 mt-5">
        <b-img src="@/components/img/html-1.svg" height="60px"></b-img>
      </div>
      <div class="col-4 mt-5">
        <b-img src="@/components/img/css-3.svg" height="60px" l></b-img>
      </div>
      <div class="col-4 mt-5">
        <b-img src="@/components/img/javascript-1.svg" height="60px"></b-img>
      </div>

      <div class="col-4">
        <h6>HTML</h6>
        <b-progress
          :value="value"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h6>CSS</h6>
        <b-progress
          :value="value"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h6>JS</h6>
        <b-progress
          :striped="striped"
          :value="values"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <br /><br />
    </div>

    <!-- icons skills -->

    <div class="row mt-5">
      <div class="col-4">
        <b-img src="@/components/img/vue-9.svg" height="60px"></b-img>
      </div>
      <div class="col-4">
        <b-img src="@/components/img/git-icon.svg" height="60px"></b-img>
      </div>
      <div class="col-4">
        <b-img src="@/components/img/bootstrap-5-1.svg" height="60px"></b-img>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <h6>VUE.JS</h6>
        <b-progress
          :value="value"
          variant="success"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h5>GIT</h5>
        <b-progress
          :value="value"
          variant="success"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h6>BOOTSTRAP</h6>
        <b-progress
          variant="success"
          :striped="striped"
          :value="value"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <br /><br />
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <b-img  src="@/components/img/sass-1.svg" height="60px"></b-img>
      </div>
      <div class="col-4">
        <b-img src="@/components/img/wordpress-icon.svg" height="60px"></b-img>
      </div>
      <div class="col-4">
        <b-img src="@/components/img/mongodb-icon-1.svg" height="60px"></b-img>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <h6>SASS</h6>
        <b-progress
          :value="value"
          variant="success"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h6>WORDPRESS</h6>
        <b-progress
          :value="value"
          variant="success"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
      <div class="col-4">
        <h6>MONGOLDB</h6>
        <b-progress
          :value="value"
          variant="success"
          :striped="striped"
          :max="max"
          show-progress
          class="mb-3"
        ></b-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 50,
      values: 50,
      striped: true,
      max: 50,
    };
  },
 
  
  name: "PogressPortal",
};
</script>
<style scoped>
@media only screen and (max-width: 667px) {

}

</style>
