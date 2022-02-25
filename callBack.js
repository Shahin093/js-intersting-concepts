
function welcomeMessage(name, greetHanlder) {
    greetHanlder(name);
}
function greeMorning(name) {
    console.log('good morning', name);
}
function greeevening(name) {
    console.log('good evening', name);
}
function afternoon(name) {
    console.log('good afternon', name);
}
welcomeMessage('tom harnd', greeMorning);
welcomeMessage('shakib hanks', afternoon);
welcomeMessage('Bappa raj', greeevening);