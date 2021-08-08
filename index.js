var number;
function add(a, b){
    number = a + b;
    return number;
}
function subtract(a, b){
    number = a - b;
    return number;
}
function multiply(a, b){
    number = a * b;
    return number;
}
function divide(a, b){
    number = a / b;
    return number;
}
function increment(n){
    return n += 1;
}
function decrement(n){
    return n -= 1;
}
function makeInt(n){
    number = parseInt(n, 10);
    return number;
}
function preserveDecimal(n){
    number = parseFloat(n);
    return number;
}