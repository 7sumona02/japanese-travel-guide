// translate.js
const { Translate } = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate({
  key: process.env.GOOGLE_CLOUD_API_KEY, // Ensure your API key is stored in an environment variable
});

async function translateToEnglish(text) {
  try {
    const [translation] = await translate.translate(text, 'en');
    return translation;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Fallback to original text if translation fails
  }
}

module.exports = translateToEnglish;