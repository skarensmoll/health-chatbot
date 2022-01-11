// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

const cast = async (content) => {
  const languageCode = 'en-US';

  const config = {
    encoding: 'audio/ogg',
    languageCode: languageCode,
  };
  const audio = { content };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  return transcription;
}

exports.cast = cast;