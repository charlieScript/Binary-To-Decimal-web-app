// UI variables
const button = document.querySelector('button');
const input = document.querySelector('input');
const resultOutput = document.querySelector('.result');
const spinner = document.querySelector('img');

// listen for submit
button.addEventListener('click', resultFunc);
// clear input
input.value = ''

function resultFunc() {
    // check if the input is empty
    if (input.value !== '') {
        // input must match 0 or 1
        if (input.value.match('^[01]+$')) {
            spinner.style.display = 'block';
            resultOutput.textContent = '';
            setTimeout(() => {
                spinner.style.display = 'none';
                binaryCovert(input.value)
            }, 1000)
            
        }
        else {
            // show error
            showAlert('Invalid Value')
            input.value = ''
        }
    } else {
        showAlert('Input a value')
    }
}


function showAlert(message) {
    const h3 = document.createElement('h3')
    h3.appendChild(document.createTextNode(message));
    h3.className = 'alert'

    // get parent 
    const parent = document.querySelector('.container');
    const output = document.querySelector('.output');
    parent.insertBefore(h3, output)

    // removes alert
    setTimeout(() => {
        removeAlert()
    }, 1000)
    // clear result also
    resultOutput.textContent = '🙄';
}

function removeAlert(params) {
    const alert  = document.querySelector('.alert')
    alert.remove();
}

/*
    i splitted, reverse the binary number then used then used their new index number and their power then
    used reduce to sum incase i come in 3 months time 😂
*/
function binaryCovert(val) {
    let result;
    result = val.split('').reverse().map((i, index) => i * Math.pow(2, index)).reduce((acc, curr) => acc + curr);
    resultOutput.textContent = result;
}


// for future refernce
// function test(val) {
//     let tes = val.split('');
//     let sum = [];
//     tes.reverse().forEach((i, index) => {
//         //sum += i * Math.pow(2, index)
//         sum.push(i * Math.pow(2, index))
//     })
//     let result = sum.reduce((acc, curr) => acc + curr)
//     console.log(tes);
//     console.log(sum);
//     console.log(result);
//     let tests;
//     tests = tes.reverse().map((i, index) => i * Math.pow(2, index)).reduce((acc, curr) => acc + curr);
//     console.log(tests);
// }

// test('1111')