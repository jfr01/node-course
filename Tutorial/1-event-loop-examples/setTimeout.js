// started operating system process
console.log('first')
setTimeout(() => { // Gets offloaded due to event loop
    console.log('second')
}, 0)
console.log('third')
// completed and exited OS process