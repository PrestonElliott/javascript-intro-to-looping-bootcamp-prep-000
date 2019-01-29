function forLoop () {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {console.log("I am 1 strange loop.");}
    else {console.log(`I am ${i} strange loop${i === 1 ? '':'s'}.`);}
}
}


function whileLoop() {
  var n = 16;
  while (n > 0) {
    console.log(n);
    n--;
    (n === 0); return ('done');
  }
}