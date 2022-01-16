<template>
  <div>
    <div class="mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Contact Form</h2>
              <p>
                Interesed in any of our services? Have any questions? Feel free to reach us out.
              </p>
              <p>
                If you prefer, you can try <router-link to="/schedule"> <v-btn text>Baymax</v-btn></router-link>, to get more information about the clinic.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactText",
  data() {
    return {};
  },
  methods: {},
};
</script>
