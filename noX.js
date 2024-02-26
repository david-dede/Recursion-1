function noX(str) {
  if (str.length === 0) {
    return str;
  }
  if (str[0] === "x") return noX(str.slice(1));
  else {
    return str[0] + noX(str.substring(1));
  }
}
