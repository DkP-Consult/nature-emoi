function rot13(str) {
    // Convertir la chaîne en majuscules pour une manipulation uniforme
    str = str.toUpperCase();

    // Définir la clé de chiffrement ROT13 (13 pour un décalage de 13 caractères)
    let key = 13;

    // Créer une chaîne représentant l'alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

    // Initialiser une chaîne pour stocker le texte déchiffré
    let decrypted = '';

    // Parcourir chaque caractère de la chaîne d'entrée
    for (let i = 0; i < str.length; i++) {
        let cryptedChar = str[i];

        // Vérifier si le caractère est une lettre majuscule (A-Z)
        if (/^[A-Z]+$/.test(cryptedChar)) {
            // Trouver l'index du caractère dans l'alphabet
            let charIndex = alphabet.indexOf(cryptedChar);

            // Calculer le nouvel index après le décalage ROT13
            let newIndex = (charIndex + key) % 26;

            // Ajouter le caractère déchiffré à la chaîne de texte déchiffré
            decrypted += alphabet[newIndex];
        } else {
            // Si ce n'est pas une lettre majuscule, conservez le caractère tel quel
            decrypted += cryptedChar;
        }
    }

    // Retourner la chaîne de texte déchiffré
    return decrypted;
}

// Appel de la fonction avec une chaîne chiffrée en ROT13
const decryptedText = rot13("SERR PBQR PNZC");
console.log(decryptedText); // Devrait afficher "FREE CODE CAMP"
