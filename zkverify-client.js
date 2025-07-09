const axios = require("axios");
require("dotenv").config();
const logger = require("./logger");

const API_KEY = process.env.ZKVERIFY_API_KEY;
const API_URL = process.env.ZKVERIFY_API_URL || "https://api.zkverify.io/api/verify";

async function verifyProof(proof) {
  try {
    const response = await axios.post(API_URL, proof, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    logger.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { verifyProof };
