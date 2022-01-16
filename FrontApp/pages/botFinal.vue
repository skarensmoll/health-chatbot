<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Chatbot v-if="chat" />
    </v-col>
  </v-row>
</template>
<script>
import Chatbot from "../components/Chatbot.vue";
export default {
  props: [],
  components: { Chatbot },
  data() {
    return {
      dialog: false,
      recordingKey: false,
      e1: 1,
      chat: true,
    };
  },
};
</script>
<style lang="scss">
.ele {
  margin-bottom: 40px !important;
  margin-top: 40px !important;
}

.mainApp {
  background-color: #fcfcfc !important;
  margin-top: 40px !important;
}
.rowsEnter {
  height: 100%;
}
</style>