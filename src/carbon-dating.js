const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(finalActivity) {
  if (typeof finalActivity != "string") {
    return false;
  } else if (isNaN(finalActivity)) {
    return false;
  } else if (+finalActivity == 0) {
    return false;
  } else if (+finalActivity > 15 || +finalActivity <= 0) {
    return false;
  } else {
    return Math.ceil(
      (Math.log(MODERN_ACTIVITY / +finalActivity) * HALF_LIFE_PERIOD) / 0.693
    );
  }
}

module.exports = {
  dateSample,
};
