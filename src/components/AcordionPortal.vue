<template>
  <div class="container">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 
            >virtual shops</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div>
              <div id="form" >
                <form
                  id="contactForm"
                  class="contact-form"
                  action="https://formcarry.com/s/0SRqotYRu33"
                  method="POST"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    value="Contact Form"
                    name="subject"
                    id="subject"
                  />
                  <div
                    class="contact-form-success alert alert-success d-none"
                    id="contactSuccess"
                  >
                    Mensaje enviado.
                  </div>
                  <div
                    class="contact-form-error alert alert-danger d-none"
                    id="contactError"
                  >
                    mensaje enviado.
                    <span></span>
                  </div>
                  <div class="form-row">
                    <b-form-group
                    
                      label="request woocommerce online store"
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selected"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-1"
                      ></b-form-checkbox-group>
                    </b-form-group>

                    <b-form-group
                     
                      label="request woocommerce online store:"
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox-group 
                        id="checkbox-group-2"
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-2"
                      >
                        <b-form-checkbox value="I want of $350">$350</b-form-checkbox>
                        <b-form-checkbox value="I want of more than $500">$500</b-form-checkbox>
                        <b-form-checkbox value="as soon as possible"
                          >one week</b-form-checkbox
                        >
                        <b-form-checkbox value="we can go slow">more than 3 weeks</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                    <div class="col-12">
                      Selected: <strong>{{ selected }}</strong>
                    </div>
                  </div>
                  <div class="form-row text-center mt-5">
                    <div class="form-group col text-center">
                      <b-button
                        variant="outline-dark"
                        shift-v="8"
                        type="submit"
                       
                        data-loading-text="cargando..."
                        >Send
                        <b-icon icon="inbox-fill"></b-icon>
                      </b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>

          <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 
            >Web Site</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div>
              <div id="form" >
                <form
                  id="contactForm"
                  class="contact-form"
                  action="https://formcarry.com/s/0SRqotYRu33"
                  method="POST"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    value="Contact Form"
                    name="subject"
                    id="subject"
                  />
                  <div
                    class="contact-form-success alert alert-success d-none"
                    id="contactSuccess"
                  >
                    Mensaje enviado.
                  </div>
                  <div
                    class="contact-form-error alert alert-danger d-none"
                    id="contactError"
                  >
                    mensaje enviado.
                    <span></span>
                  </div>
                  <div class="form-row">
                    <b-form-group
                    
                      label="request Web Site"
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox-group
                        id="checkbox-group-3"
                        v-model="selectedone"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-1"
                      ></b-form-checkbox-group>
                    </b-form-group>

                    <b-form-group
                     
                      label="request Web Site:"
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox-group 
                        id="checkbox-group-4"
                        v-model="selectedone"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-2"
                      >
                          <b-form-checkbox value="I want of $350">$350</b-form-checkbox>
                        <b-form-checkbox value="I want of more than $500">$500</b-form-checkbox>
                        <b-form-checkbox value="as soon as possible"
                          >one week</b-form-checkbox
                        >
                        <b-form-checkbox value="we can go slow">more than 3 weeks</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                    <div class="col-12">
                      Selectedone: <strong>{{ selectedone }}</strong>
                    </div>
                  </div>
                  
                  <div class="form-row text-center mt-5">
                    <div class="form-group col text-center">
                      <b-button
                        variant="outline-dark"
                        shift-v="8"
                        type="submit"
                       
                        data-loading-text="cargando..."
                        >Send
                        <b-icon icon="inbox-fill"></b-icon>
                      </b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>


    </div>
   
     
  </div>
</template>

<script>
export default {
  name: "AcordionPortal",
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "I want of $350", value: "I want of $350" },
        { text: "I want of more than $500", value: "I want of more than $500" },
        { text: "as soon as possible", value: "as soon as possible" },
        { text: "we can go slow", value: "we can go slow" },
      ],
       selectedone: [], // Must be an array reference!
     
    };
  },
};
</script>

<style scoped>
.accordion {
  color: black;

}
</style>
