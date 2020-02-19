module.exports = function reverse (n) {
  return Number.parseInt(Array.from(n.toString()).reverse().join(""));
}
