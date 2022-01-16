<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="btnComponent"
        dark
        v-bind="attrs"
        color="#607df9"
        v-on="on"
        v-on:click="hidden = !hidden"
        fab
      >
        <v-icon v-if="dialog">mdi-plus</v-icon>
        <v-icon v-if="!dialog">mdi-</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        Use Google's location service?
      </v-card-title>
      <v-card-text
        >Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "bot",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss">

</style>
