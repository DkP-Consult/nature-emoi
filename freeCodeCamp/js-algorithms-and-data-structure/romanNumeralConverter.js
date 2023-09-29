function convertToRoman(num) {
    // 1. Définissez un tableau d'objets qui associe les valeurs numériques aux symboles romains.
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];

    // 2. Initialisez une chaîne vide pour stocker la représentation en chiffres romains.
    let result = '';

    // 3. Parcourez le tableau d'objets romanNumerals.
    for (const numeral of romanNumerals) {
        // 4. À chaque étape, vérifiez si le nombre est supérieur ou égal à la valeur du symbole romain.
        while (num >= numeral.value) {
            // 5. Si c'est le cas, ajoutez le symbole romain à la chaîne de résultat.
            result += numeral.symbol;
            // 6. Soustrayez la valeur numérique correspondante du nombre.
            num -= numeral.value;
        }
    }

    // 7. Renvoyez la chaîne de caractères résultante contenant la représentation en chiffres romains.
    return result;
}

// 8. Exemple d'utilisation :
const roman = convertToRoman(3549);
console.log(roman); // Devrait afficher 'MMMDXLIX'