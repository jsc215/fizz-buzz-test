function timeout(ms) {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    await timeout(1000);
    if (i % 5 == 0 && i % 3 == 0) {
      console.log('fizzBuzz');
    } else if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();