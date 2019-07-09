
const waitTime = 3000;
let currentTime = 0;
const waitInterval = 100;
let percentWaiting = 0;

const abc = console.log('bbb')
console.log(abc)

const writeWaitingPercent = p => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p} %`);
}

const interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor(currentTime/waitTime *100)
    writeWaitingPercent(percentWaited)
}, waitInterval)
console.log('interval is: ', interval)

setTimeout(() => {
    clearInterval(interval);
    writeWaitingPercent(100); // manually write the wait time
    console.log("\n Done \n");
}, waitTime);

process.stdout.write("\n \n")