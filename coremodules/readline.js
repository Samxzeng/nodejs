const readline = require('readline');
// rl to create an interface with input and output
const rl = readline.createInterface(process.stdin, process.stdout); 
const realPerson = {
    name :'',
    sayings:[]
};


rl.question('What is the name of a real person? \n', answer => {
    realPerson.name=answer;
    rl.setPrompt(`What would the ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying){
        realPerson.sayings.push(saying)
        if(saying.toLowerCase().trim()==='exit'){
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `)
            rl.prompt();
        }
    });
})  

rl.on('close', () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
})

