function count7(n,seven=[]) {

  if(n<7){return seven.length }
  let right=n%10
  if (right === 7) {
    seven.push(right);
  } else {
    return count7(Math.floor(n / 10),seven);
  }

}