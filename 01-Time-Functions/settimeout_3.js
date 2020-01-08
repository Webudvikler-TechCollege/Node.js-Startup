const func = (val1, val2) => {
  console.log('Print ' + val1 + ' efter ' + val2 + ' sekunder');
} 

setTimeout(func, 2 * 1000, "Hej hej", 2);