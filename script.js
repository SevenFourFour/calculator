function add() {
    return arguments[0] + arguments[1];
}

function subtract() {
    return arguments[0] - arguments[1];
}

function multiply() {
    return arguments[0] * arguments[1];
}

function divide() {
    if (arguments[1] == 0) {
        return ('OOPS')
    }
    else
        return (Math.floor((arguments[0] / arguments[1]) * 1000) / 1000);
}

function operate(callback, num1, num2) {
    return callback(num1, num2);
}



const num_buttons = document.querySelectorAll('.num-button');
const op_buttons = document.querySelectorAll('.op-button');
const output_field = document.getElementById('display-container');
const clear_button = document.getElementById('clear');
const equals_button = document.getElementById('equal')

var decimal_used = false;
var is_new_number = true;

var stored_information = {
    number_one: null,
    number_two: null,
    operation: null,
}

// Clears the calculator
clear_button.addEventListener('click', function (e) {

    stored_information.number_one = null;
    stored_information.number_two = null;
    stored_information.operation = null;
    decimal_used = false;
    output_field.innerHTML = ' ';

})


// Adds number buttons to display on click
num_buttons.forEach(chosen_button => {
    chosen_button.addEventListener('click', function (e) {

        if (output_field.innerHTML.length < 12) {

            if (output_field.innerHTML == ' ' && chosen_button.id != '.') {
                output_field.innerHTML = chosen_button.id;
            }
            else {
                if (chosen_button.id == '.' && decimal_used == false) {
                    output_field.innerHTML += '.';
                    decimal_used = true;
                    return;
                }
                else if (chosen_button.id != '.')
                    if (is_new_number == true) {
                        output_field.innerHTML = ' '
                    }
                output_field.innerHTML += chosen_button.id;
                is_new_number = false;

            }
        }
    })
})

// Creates the operation to be used
op_buttons.forEach(chosen_button => {
    chosen_button.addEventListener('click', function (e) {

        is_new_number = true;

        if (stored_information.number_one == null && output_field.innerHTML != ' ') {
            stored_information.number_one = parseFloat(output_field.innerHTML);
            switch (chosen_button.id) {
                case 'add':
                    stored_information.operation = add;
                    break;
                case 'subtract':
                    stored_information.operation = subtract;
                    break;
                case 'multiply':
                    stored_information.operation = multiply;
                    break;
                case 'divide':
                    stored_information.operation = divide;
                    break;
                default:

            }
            output_field.innerHTML = ' ';
            decimal_used = false;
        }
        else {
            simplify();
            stored_information.number_one = parseFloat(output_field.innerHTML);
            switch (chosen_button.id) {
                case 'add':
                    stored_information.operation = add;
                    break;
                case 'subtract':
                    stored_information.operation = subtract;
                    break;
                case 'multiply':
                    stored_information.operation = multiply;
                    break;
                case 'divide':
                    stored_information.operation = divide;
                    break;
                default:

            }
            output_field.innerHTML = stored_information.number_one;
            decimal_used = false;
        }
    })
})

function store_first_part() {

}


// Equal sign functionality
equals_button.addEventListener('click', function (e) {
    simplify();
})

function simplify() {
    if (stored_information.number_one != null && stored_information.operation != null) {
        if (stored_information.number_two == null)
            stored_information.number_two = parseFloat(output_field.innerHTML);
        output_field.innerHTML = operate(stored_information.operation, stored_information.number_one, stored_information.number_two);
        stored_information.number_one = parseFloat(output_field.innerHTML);
        stored_information.operation = null;
        stored_information.number_two = null;
    }
}