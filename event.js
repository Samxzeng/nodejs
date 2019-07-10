const events = require ('events');
const emitter = new events.EventEmitter();

emitter.on('customEvent', (message, status) => {
    console.log(`status ${status}: ${message}`)
});

emitter.emit('customEvent', 'Hello world', 200)


//another way to call EventEmitter
const EventEmitter = require('events').EventEmitter;
const util = require('util');

class Person {
    constructor(name) {
        this.name = name;
    }
}

Person.prototype.goTo = function(){
    console.log('this is function of contructor')
    return this.name
}

//util + emitter
util.inherits(Person, EventEmitter);

const ben = new Person("Ben Franklin");
console.log(ben.goTo());

ben.on('speak', said => {
    console.log(`${ben.name}: ${said}`);
});

ben.emit('speak', 'You may delay, but the time will not')

