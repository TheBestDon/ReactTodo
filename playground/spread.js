var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function Greeting (a, b) {
    return 'Hi, ' + a + ' you are ' + b;
}

console.log(Greeting(...person));
console.log(Greeting(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Don', ...names];

final.forEach(function(name) {
    console.log('Hi ' + name);
});