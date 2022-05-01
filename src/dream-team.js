const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  let sortArray = [];
  let abbriviation = [];
  if (!Array.isArray(array)) {
    return false;
  }
  for (let member of array) {
    if (typeof member == "string") {
      sortArray.push(member.split(" ").join("").toUpperCase());
    }
  }
  if (sortArray.length == 0) {
    return false;
  }
  let sortedByalphabet = sortArray.sort();
  for (let names of sortedByalphabet) {
    abbriviation.push(names[0]);
  }
  return abbriviation.join("");
}

module.exports = {
  createDreamTeam,
};
