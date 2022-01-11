// index.js
const express =  require("express")
const dotenv =  require("dotenv")
const cors =  require("cors")

const speechToText = require("./speechText");
const dialogFlow = require("./dialogFlow");
const textToSpeech = require("./textSpeech");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
    res.status(200).send({ data: response})
  } catch(e) {
    res.end(e.message || e.toString());
  }
});

app.post("/audio", async (request, res) => {
  try {
    let audioResponse = await textToSpeech.cast(request.body.text);
    res.set('content-type', 'audio/mp3');
    res.write(audioResponse);
    res.end();
  } catch(e) {
    res.end(e.message || e.toString());
  }
});

module.exports = app;