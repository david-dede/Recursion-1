function changePi(str) {
  if (str.length <= 1) {
    return str;
  }
  if (str.substring(0, 2) === "pi") {
    return "3.14" + changePi(str.substring(2));
  }
  // return str.substring(0, 1) + changePi(str.substring(1));
}
