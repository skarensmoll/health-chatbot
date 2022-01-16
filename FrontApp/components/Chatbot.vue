<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-row justify="center">
        <v-col cols="11">
          <v-card>
            <v-app-bar color="blue">
              <!--
                  <v-avatar class="ele">
                <img src="/bot.jpg" alt="bot" size="780" />
              </v-avatar>
              -->
              Hi, George!
              <v-spacer></v-spacer>
              <v-avatar class="ele" v-if="recordingKey">
                <img src="/profile.jpg" alt="bot" size="780" />
              </v-avatar>
              <v-avatar class="ele" v-if="!recordingKey">
                <img src="/profileOff.jpg" alt="bot" size="780" />
              </v-avatar>
            </v-app-bar>
          </v-card>
          <video class="videoBot" autoplay loop muted>
            <source src="/bot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <v-divider inset></v-divider>
          <v-card class="wrapper">
            <v-card-title>
              <h2>Baymax</h2>
            </v-card-title>
            <v-card-subtitle> Your Virtual Assistant </v-card-subtitle>
            <v-app-bar color="blue darken-2" dark>
              <!--
                  <v-avatar class="ele">
                <img src="/bot.jpg" alt="bot" size="780" />
              </v-avatar>
              -->
              Status: <span v-if="recordingKey">&nbsp;Online [Listening]</span
              ><span
                v-if="!recordingKey"
                style="color: success; font-weight: 700"
                >&nbsp;Online</span
              >
              <v-spacer></v-spacer>
              <v-icon large color="error darken-2" v-if="recordingKey">
                mdi-adjust
              </v-icon>
              <v-icon large color="success darken-2" v-if="!recordingKey">
                mdi-brightness-1
              </v-icon>
            </v-app-bar>

            <section class="sound-clips"></section>
            <audio id="audio"></audio>
          </v-card>
          <v-card class="responses" ref="responseArea">
            <span id="bot-response"></span>
          </v-card>
        </v-col>
        <v-col cols="11">
          <section class="main-controls">
            <canvas class="visualizer" height="60px" width="1000"></canvas>
          </section>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      dialog: false,
      recordingKey: false,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.icons);
    /*CODE FROM JS DIRECTLY*/
    // set up basic variables for app

    const soundClips = document.querySelector(".sound-clips");
    const canvas = document.querySelector(".visualizer");
    const mainSection = document.querySelector(".main-controls");

    // disable stop button while not recording
    const BASE = "http://localhost:5001";

    // visualiser setup - create web audio api context and canvas

    let audioCtx;
    const canvasCtx = canvas.getContext("2d");

    //main block for doing the audio recording

    if (navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia supported.");
      const constraints = { audio: true };
      let chunks = [];

      let onSuccess = function (stream) {
        const mediaRecorder = new MediaRecorder(stream);
        var currentRecording = false;
        visualize(stream);
        window.addEventListener("keydown", (e) => {
          currentRecording = !currentRecording;
          if (e.key == "g") {
            if (currentRecording) {
              toRecord(mediaRecorder);
            } else {
              toStop(mediaRecorder);
            }
          }
        });

        mediaRecorder.onstop = function (e) {
          console.log("data available after MediaRecorder.stop() called.");

          const audio = document.createElement("audio");

          audio.controls = true;
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          var reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onloadend = function () {
            var base64String = reader.result;
            const resultFormatted = base64String
              .substr(base64String.indexOf(", ") + 1)
              .replace("data:audio/ogg; codecs=opus;base64,", "");
            const bodyFormat = JSON.stringify({
              record: resultFormatted,
              sessionId: "19b3ee24-2fac-4ab2-ac0f-c377b2348cf8",
              //sessionId: "19b3ee24-2fac-4ab2-ac0f-c377b2348cf0",
              //sessionId: "19b3ee24-2fac-4ab2-ac0f-c377b2348cf9",
              //sessionId: "19b3ee24-2fac-4ab2-ac0f-c377b2348cf7",
              //sessionId: "19b3ee24-2fac-4ab2-ac0f-c377b2348cf5",
            });
            var myHeaders = new Headers();
            myHeaders.append("Cache-Control", "max-age=31536000");
            myHeaders.append("Content-Type", "application/json");
            fetch(`${BASE}/resolve-query`, {
              method: "POST",
              headers: myHeaders,
              body: bodyFormat,
            })
              .then((response) => response.json())
              .then(({ data }) => {
                console.log(data);
                readOutLoud(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          };

          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          audio.src = audioURL;
          console.log("recorder stopped");
        };

        mediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };
      };

      let onError = function (err) {
        console.log("The following error occured: " + err);
      };

      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    } else {
      console.log("getUserMedia not supported on your browser!");
    }

    const readOutLoud = (text) => {
      fetch(`${BASE}/audio`, {
        body: JSON.stringify({ text }),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          var url = URL.createObjectURL(blob);
          var audioElement = document.getElementById("audio");
          audioElement.src = url;
          audioElement.play();
        });
    };

    function visualize(stream) {
      if (!audioCtx) {
        audioCtx = new AudioContext();
      }

      const source = audioCtx.createMediaStreamSource(stream);

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      source.connect(analyser);
      //analyser.connect(audioCtx.destination);

      draw();

      function draw() {
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = "rgb(255, 255, 255)";
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "rgb(42, 169, 178)";

        canvasCtx.beginPath();

        let sliceWidth = (WIDTH * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          let v = dataArray[i] / 128.0;
          let y = (v * HEIGHT) / 2;

          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      }
    }

    function toRecord(m) {
      m.start();
    }

    function toStop(m) {
      m.stop();
    }
    window.onresize = function () {
      canvas.width = mainSection.offsetWidth;
    };

    window.onresize();
    /*END CODE FROM JS DIRECTLY*/
  },
  methods: {
    icons(e) {
      console.log("ENTERS");
      if (e.key == "g") {
        this.recordingKey = !this.recordingKey;
      }
    },
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
.responses {
  visibility: hidden;
  position: absolute;
  top: -5000vh;
  right: 500vw;
}
.videoBot {
  width: 322px;
  height: auto;
}
@media screen and (min-width: 500px) {
  .videoBot {
    width: 375px;
    height: auto;
  }
}
</style>