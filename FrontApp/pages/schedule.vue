<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-stepper v-model="e1" v-if="!chat">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Welcome
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Instructions
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Agreement </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="450px"
              justify="center"
              align="center"
              flat
            >
              <v-row justify="center" align="center" class="rowsEnter">
                <v-col cols="12">
                  <video width="320" height="auto" autoplay loop muted>
                    <source src="/bot.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </v-col>
                <v-col cols="12">
                  <v-card flat> This is Baymax! Your Virtual Assistant</v-card>
                  <v-card flat>
                    Talk to it to setup appointments, change current ones, and
                    get information about the clinic.
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
            <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              flat
              color="grey lighten-1"
              height="450px"
              justify="center"
              align="center"
            >
              <v-row justify="center" align="center" class="rowsEnter">
                <v-col cols="12">
                  <div>Your interaction is voice activated. <br /></div>
                  <div>
                    Simply say what you are looking for and let
                    <span style="color: blue; font-weight: 600">Baymax</span>
                    guide you.
                  </div>
                </v-col>
              </v-row>
            </v-card>
            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
            <v-btn text @click="e1 = 1"> Return </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="450px"
              justify="center"
              align="center"
            >
              <v-row justify="end" align="center" class="rowsEnter">
                <v-col cols="12">
                  <div>Every interaction is processed through a <span style="color: green; font-weight: 700">secure</span> network, and is not stored in any of our servers.</div>
                  <div>
                    The only sensitive information we process is the one you already provided us when becoming a client of the clinic in person.
                  </div>
                </v-col>
              </v-row>
            </v-card>
            <v-btn to='/botFinal' color="success" @click="chat = true"> Agree </v-btn>
            <v-btn text @click="e1 = 2"> Return </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
      chat: false,
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