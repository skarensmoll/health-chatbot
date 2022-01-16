// Imports the Google Cloud client library
const speech = require("@google-cloud/speech");

// Creates a client
const client = new speech.SpeechClient();

const cast = async (content) => {
  const languageCode = "en-US";

  const config = {
    encoding: "audio/ogg",
    languageCode: languageCode,
  };
  const audio = { content };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file
  /*
  const [response] = await client.recognize(request);
  console.log("MAIN",response);
  console.log("RESULTS",response.results[0].alternatives[0]);
  const transcription = response.results
  .map(result => result.alternatives[0].transcript)
  .join('\n');
  */
  const [operation] = await client.longRunningRecognize(request);

  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");
  console.log(`Transcription: ${transcription}`);
  return transcription;
};

exports.cast = cast;
