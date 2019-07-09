// process.argv
console.log(process.argv);

const grab = (flag) => {
    const index = process.argv.indexOf(flag);
    return (index===-1) ? null: process.argv[index+1]
}

// to make some flag node app.js --user abc --greeting "hello"
const greeting = grab('--greeting');
const user = grab ('--user')

if (!user||!greeting) {
    console.log('You blew it')
} else {
    console.log(`Welcome ${user}, ${greeting}`)
}
