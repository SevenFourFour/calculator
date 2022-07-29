function add() {
    return arguments[0] + arguments[1]
}

function subtract() {
    return arguments[0] - arguments[1]
}

function multiply() {
    return arguments[0] * arguments[1]
}

function divide() {
    return (Math.floor((arguments[0] / arguments[1]) * 1000) / 1000)
}

function operate(callback, num1, num2) {
    return callback(num1, num2)
}

console.log(add(1, 6))
console.log(subtract(2, 9))
console.log(multiply(2, 5))
console.log(divide(2, 6))

console.log(operate(divide, 1, 2))