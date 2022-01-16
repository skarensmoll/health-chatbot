<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <v-row justify="center" align="center">
      <v-col cols="11">
        <Header />
        <v-main >
          <Nuxt class="mainApp"/>
        </v-main>
        <Footer />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "Belleville",
      meta: [
        {
          hid: "description Belleville",
          name: "Belleville",
          content: "Belleville is the best way",
        },
      ],
    };
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer"),
  },
  methods: {},
};
</script>

<style lang="scss">
  .mainApp{
    padding-top: 50px !important;
    min-height: 100vh;
  }
</style>