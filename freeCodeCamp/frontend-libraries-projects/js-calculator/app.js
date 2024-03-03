function inputValue(val) {
    let display = document.getElementById('display');
    let currentText = display.innerText;
    let lastChar = currentText.slice(-1);
    let operators = ['+', '-', '*', '/'];
    let lastCharIsOperator = operators.includes(lastChar);

    // Autoriser l'ajout d'un point décimal après un opérateur ou si aucun point n'est présent dans le dernier nombre
    if (val === '.') {
        // Si le dernier caractère est un opérateur ou si le dernier segment ne contient pas de point
        if (lastCharIsOperator || !currentText.split(/[\+\-\*\/]/).pop().includes('.')) {
            display.innerText += val;
        }
    } else if (operators.includes(val)) {
        if (currentText !== '0' && !lastCharIsOperator) {
            display.innerText += val;
        } else if (currentText !== '0' && lastCharIsOperator && val === '-' && !operators.includes(currentText.slice(-2, -1))) {
            display.innerText += val; // Permettre un nombre négatif après un opérateur
        } else if (lastCharIsOperator && operators.includes(currentText.slice(-2, -1))) {
            display.innerText = currentText.slice(0, -2) + val; // Remplacer deux opérateurs par le dernier entré
        } else if (lastCharIsOperator) {
            display.innerText = currentText.slice(0, -1) + val; // Remplacer l'opérateur précédent par le nouveau
        }
    } else {
        if (currentText === '0') {
            display.innerText = val;
        } else {
            display.innerText += val;
        }
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        // La fonction eval gère les opérations sur des nombres décimaux
        let result = eval(display.innerText);
        // S'assurer que le résultat est un nombre fini pour éviter l'affichage de 'Infinity' ou 'NaN'
        display.innerText = Number.isFinite(result) ? result.toString() : "Error";
    } catch (e) {
        // Gérer les erreurs pour les expressions invalides
        document.getElementById('display').innerText = "Error";
    }
}

function deleteLast() {
    let displayText = document.getElementById('display').innerText;
    if (displayText.length === 1) {
        clearDisplay();
    } else {
        document.getElementById('display').innerText = displayText.slice(0, -1);
    }
}
