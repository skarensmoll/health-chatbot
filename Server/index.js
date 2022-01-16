// index.js
const express =  require("express")
const dotenv =  require("dotenv")
const cors =  require("cors")

const speechToText = require("./speechText");
const dialogFlow = require("./dialogFlow");
const textToSpeech = require("./textSpeech");

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const projectId = 'ferrous-aleph-337822'
const keyFilename = 'ferrous-aleph-337822-f206ea98cce2.json'
const keyFilenameFull = 'C:\GIT\healthchatbot\Server\ferrous-aleph-337822-f206ea98cce2.json'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.listen(PORT, () => console.log(`🔥  server running on port ${PORT}`));

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/resolve-query", async (request, res) => {
  try {
    let text = await speechToText.cast(request.body.record);
    const sessionId = request.body.sessionId;
    const response = await dialogFlow.runSample(text, sessionId)
    res.setHeader('Cache-Control', 'max-age=31536000');
    res.status(200).send({ data: response})
  } catch(e) {
    res.end(e.message || e.toString());
  }
});

app.post("/audio", async (request, res) => {
  try {
    let audioResponse = await textToSpeech.cast(request.body.text);
    res.set('content-type', 'audio/mp3');
    res.setHeader('Cache-Control', 'max-age=31536000');
    //console.log(JSON.stringify(audioResponse));
    res.write(audioResponse);
    res.end();
  } catch(e) {
    res.end(e.message || e.toString());
  }
});

module.exports = app;

