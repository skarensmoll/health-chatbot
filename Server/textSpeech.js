// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

const projectId = 'ferrous-aleph-337822'
const keyFilename = 'ferrous-aleph-337822-f206ea98cce2.json'
const keyFilenameFull = 'C:\GIT\healthchatbot\Server\ferrous-aleph-337822-f206ea98cce2.json'

// Creates a client
const client = new textToSpeech.TextToSpeechClient({keyFilename});
async function cast(text = 'hello, world!') {
  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
}

exports.cast = cast;