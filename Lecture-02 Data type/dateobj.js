//Date function return milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
// this example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...
setTimeout(() => {
    const millis = Data.now() - start;

    console.log('seconds elapsed = ${Math.floor(millis / 1000)}');
    // expected output: second elased = 2
}, 2000);
