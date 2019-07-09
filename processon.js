
//log as process function
const questions = [
    'what is your name',
    'what is your fav food',
    'what is your language'
]
const answer = []

const askQuestion = (i) => {
    process.stdout.write(`please answer questions \n ${questions[i]} \n`)
}


//important: input function of the process in node, can take input data
process.stdin.on('data', (data) => {
    answer.push(data.toString().trim());
    if(answer.length<questions.length){
        askQuestion(answer.length);  
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write(`\n \n`);
    process.stdout.write(`Get answer together ${answer[1]} ${answer[0]} you can get ${answer[2]}`);
    process.stdout.write(`\n \n`);
})

askQuestion(0)