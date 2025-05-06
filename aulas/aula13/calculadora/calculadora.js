let input = document.querySelector("#inputText");

let textValue = "";

function addNumber(number) {
    textValue += number; 
    updateText();
}

function addOperator(operator) {
    textValue += operator; 
    updateText();
}

function addDecimal() {
    textValue += ".";
    updateText();
}

function clearText() {
    textValue = ""; 
    updateText();
}

function deleteLast() {
    textValue = textValue.slice(0, -1);
    updateText();
}

function updateText() {
    input.value = textValue; 
}

function calculate() {
    try {
        let expression = textValue;

        // Caso específico: "10%150"
        const percentageMatch = expression.match(/^(\d+(?:\.\d+)?)%(\d+(?:\.\d+)?)$/);
        
        if (percentageMatch) {
            const percent = parseFloat(percentageMatch[1]);
            const total = parseFloat(percentageMatch[2]);
            const result = (percent / 100) * total;
            textValue = result.toString();
        } else {
            // Aqui tratamos outros casos normalmente
            textValue = eval(expression).toString();
        }

        updateText();
    } catch {
        textValue = "Erro";
        updateText();
    }
}


