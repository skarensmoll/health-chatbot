<template>
  <div>
    <div class="team-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Experienced & Professional Team
              </h2>
              <p>
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col cols="12" md="6" lg="3" v-for="(member, i) in team" :key="i">
            <v-card elevation="0" class="team-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img :src="member.pic" alt="team" />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class="team-title font-weight-medium font-18">
                  {{member.name}}
                </h5>
                <p class="team-subtitle">{{member.specialty}}</p>
              </div>
              <p>
                {{member.bio}}
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "Dr. Gregory House",
          specialty: "Everything in the universe",
          bio: "Perfect score on MCAT,  intern at Mayo Clinic gaining a double specialty in field of pathology, nephrology and infectious diseases. ",
          pic: "/t1.jpg",
        },
        {
          name: "Dr. Shaun Murphy",
          specialty: "Anesthesiologist and Genius",
          bio: "Dr. Shaun Murphy, an autistic surgical resident. His savant abilities include near-photographic recall and the ability to note minute details and changes.",
          pic: "/t2.jpg",
        },
        {
          name: "Dr. Patch Adams",
          specialty: "Hearth Surgery and Laugh Therapy",
          bio: "Founder of the Gesundheit! Institute in 1971. Loves to bring humor to orphans, patients, and other people. Earned his Doctor of Medicine in the Medical College of Virginia.",
          pic: "/t3.jpg",
        },
        {
          name: "Dr. Jonathan Michael",
          specialty: "House doctor and Self-reflection",
          bio: "He is currently working as Residency Co-Director at Belleville Clinic. Has served in various positions and roles, besides practicing internal medicine.",
          pic: "/t4.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>
