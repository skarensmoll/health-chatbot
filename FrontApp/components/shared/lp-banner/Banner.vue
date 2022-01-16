<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              Welcome to <br/> Belleville Clinic
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular">
              with you, every step of the way.
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="success"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                to="/schedule"
                elevation="0"
              >
                Schedule
              </v-btn>

            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-img
            src="/doc4.jpg"
            alt="banner"
          />
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
  .banner-wrapper{
    background-color: rgb(38, 103, 189);
    min-height: 70vh;
  }
</style>
