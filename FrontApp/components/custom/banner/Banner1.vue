<template>
  <div>
    <div class="banner1-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <v-chip small class="bg-dark" text-color="white">
                Creating Memories
              </v-chip>
              <h2
                class="
                  banner1-title
                  font-weight-bold
                  text-uppercase
                  white--text
                "
              >
                MORE THAN JUST A CLINIC
              </h2>
              <p class="white--text op-8 font-weight-regular">
                With us you are in the best hands. We focus on your well-being above anything else, and you will feel it.
              </p>
              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  rounded
                  to="/contact"
                  class="btn-custom-md"
                  depressed
                  color="white"
                  elevation="0"
                >
                  Do you Need Help ?
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5">
            <v-img
              src="/doc1.png"
              alt="banner"
            />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner1",
  data() {
    return {};
  },
  methods: {}
};
</script>
