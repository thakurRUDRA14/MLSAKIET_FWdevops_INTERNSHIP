const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=' && expression != "Error") {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = "Error";
            }
            inputBox.value = expression;
        }
        else if (buttonText === 'AC') {
            expression = "";
            inputBox.value = expression;
        }
        else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        }
        else if (expression != "Error") {
            expression += buttonText;
            inputBox.value = expression;
        }
    });
});
