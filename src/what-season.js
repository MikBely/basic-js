const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length == 0) {
    return "Unable to determine the time of year!";
  }
  if (
    (date instanceof Date === false ||
      Object.getOwnPropertyNames(date).length > 0) &&
    arguments.length > 0
  ) {
    throw new Error("Invalid date!");
  }
  let monthDate;
  monthDate = date.getMonth();
  if (monthDate >= 2 && monthDate <= 4) {
    return "spring";
  } else if (monthDate >= 5 && monthDate <= 7) {
    return "summer";
  } else if (monthDate >= 8 && monthDate <= 10) {
    return "autumn";
  } else if (monthDate == 11 || monthDate == 0 || monthDate == 1) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
