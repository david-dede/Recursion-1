function countHi(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.substring(0, 2) === "hi") {
    return 1 + countHi(str.substring(1));
  }
  return countHi(str.substring(1));
}
