const functions = require('firebase-functions');
const axios = require('axios');

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBelU0KO5CRbn7PKJ9sSnjDweG6q5HJO2s");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.geminiChat = functions.https.onRequest(async (req, res) => {
  const { message } = req.body;

  try {
    const result = await model.generateContent(message);
    console.log(result.response.text());
    res.json({ reply: response.data.reply });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});
