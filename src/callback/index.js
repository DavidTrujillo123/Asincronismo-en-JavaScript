function sum (num1, num2){
    return num1 + num2;
}
function res (num1, num2){
    return num1 - num2;
}
function mult (num1, num2){
    return num1 * num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));
console.log(calc(2, 9, mult));

setTimeout(() => {
    console.log('Hola js');
}, 2000);

function gretting(name){
    console.log(`Hola ${name}!`);
}

// Ejemplo de callback
setTimeout(gretting, 2000, 'David');

