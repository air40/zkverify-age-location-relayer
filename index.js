require('dotenv').config();
const { verifyProof } = require('./zkverify-client');
const logger = require('./logger');
const proof = require('./proof-object');

(async () => {
  try {
    const result = await verifyProof(proof);
    logger.success("Verification Result:");
    console.log(result);
  } catch (err) {
    logger.error("Verification failed:", err.message);
  }
})();
