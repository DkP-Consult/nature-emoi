Build a JavaScript Calculator

Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://javascript-calculator.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

User Story #5: My calculator should contain a clickable element with an id="clear".

User Story #6: My calculator should contain an element to display values with a corresponding id="display".

User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

EXAMPLE: 3 + 5 x 6 - 2 / 4 =

    Immediate Execution Logic: 11.5
    Formula/Expression Logic: 32.5

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

------------------- French --------------------------

Construisez une calculatrice JavaScript

Note : React 18 présente des incompatibilités connues avec les tests pour ce projet (voir le problème)

Objectif : Construire une application qui est fonctionnellement similaire à celle-ci : https://javascript-calculator.freecodecamp.rocks/.

Répondez aux histoires d'utilisateurs ci-dessous et réussissez tous les tests. Utilisez les bibliothèques ou les API dont vous avez besoin. Donnez-lui votre propre style personnel.

Vous pouvez utiliser n'importe quel mélange de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, et jQuery pour compléter ce projet. Vous devriez utiliser un framework frontal (comme React, par exemple) car cette section est consacrée à l'apprentissage des frameworks frontaux. Les technologies supplémentaires non listées ci-dessus ne sont pas recommandées et leur utilisation est à vos propres risques. Nous envisageons de soutenir d'autres frameworks frontaux comme Angular et Vue, mais ils ne sont actuellement pas pris en charge. Nous accepterons et essaierons de corriger tous les rapports de problèmes qui utilisent la pile technologique suggérée pour ce projet. Bon codage !

Histoire d'utilisateur #1 : Ma calculatrice devrait contenir un élément cliquable contenant un = (signe égal) avec un id="equals" correspondant.

Histoire d'utilisateur #2 : Ma calculatrice devrait contenir 10 éléments cliquables contenant chacun un chiffre de 0 à 9, avec les IDs correspondants suivants : id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight" et id="nine".

Histoire d'utilisateur #3 : Ma calculatrice devrait contenir 4 éléments cliquables contenant chacun l'un des 4 opérateurs mathématiques primaires avec les IDs correspondants suivants : id="add", id="subtract", id="multiply", id="divide".

Histoire d'utilisateur #4 : Ma calculatrice devrait contenir un élément cliquable contenant un . (point décimal) avec un id="decimal" correspondant.

Histoire d'utilisateur #5 : Ma calculatrice devrait contenir un élément cliquable avec un id="clear".

Histoire d'utilisateur #6 : Ma calculatrice devrait contenir un élément pour afficher les valeurs avec un id="display" correspondant.

Histoire d'utilisateur #7 : À tout moment, appuyer sur le bouton d'effacement efface les valeurs d'entrée et de sortie, et ramène la calculatrice à son état initialisé ; 0 devrait être affiché dans l'élément avec l'id de display.

Histoire d'utilisateur #8 : Lorsque j'entre des chiffres, je devrais pouvoir voir mon entrée dans l'élément avec l'id de display.

Histoire d'utilisateur #9 : Dans n'importe quel ordre, je devrais pouvoir ajouter, soustraire, multiplier et diviser une chaîne de chiffres de n'importe quelle longueur, et lorsque j'appuie sur =, le résultat correct devrait être affiché dans l'élément avec l'id de display.

Histoire d'utilisateur #10 : Lors de la saisie de chiffres, ma calculatrice ne devrait pas permettre à un nombre de commencer par plusieurs zéros.

Histoire d'utilisateur #11 : Lorsque l'élément décimal est cliqué, un . devrait s'ajouter à la valeur actuellement affichée ; deux . dans un nombre ne devraient pas être acceptés.

Histoire d'utilisateur #12 : Je devrais pouvoir effectuer n'importe quelle opération (+, -, *, /) sur des nombres contenant des points décimaux.

Histoire d'utilisateur #13 : Si 2 opérateurs ou plus sont entrés consécutivement, l'opération effectuée devrait être le dernier opérateur entré (à l'exclusion du signe négatif (-)). Par exemple, si 5 + * 7 = est entré, le résultat devrait être 35 (c'est-à-dire 5 * 7) ; si 5 * - 5 = est entré, le résultat devrait être -25 (c'est-à-dire 5 * (-5)).

Histoire d'utilisateur #14 : Appuyer sur un opérateur immédiatement après = dev

rait commencer un nouveau calcul qui opère sur le résultat de l'évaluation précédente.

Histoire d'utilisateur #15 : Ma calculatrice devrait avoir plusieurs décimales de précision lorsqu'il s'agit d'arrondir (notez qu'il n'y a pas de norme exacte, mais vous devriez être capable de gérer des calculs comme 2 / 7 avec une précision raisonnable à au moins 4 décimales).

Note sur la logique de calculatrice : Il convient de noter qu'il existe deux principales écoles de pensée sur la logique d'entrée des calculatrices : la logique d'exécution immédiate et la logique de formule. Notre exemple utilise la logique de formule et observe la préséance de l'ordre des opérations, l'exécution immédiate ne le fait pas. Les deux sont acceptables, mais veuillez noter que selon celui que vous choisissez, votre calculatrice peut donner des résultats différents des nôtres pour certaines équations (voir l'exemple ci-dessous). Tant que vos calculs peuvent être vérifiés par une autre calculatrice de production, veuillez ne pas considérer cela comme un bug.

EXEMPLE : 3 + 5 x 6 - 2 / 4 =

    Logique d'exécution immédiate : 11,5
    Logique de formule/expression : 32,5

Vous pouvez construire votre projet en utilisant ce modèle CodePen et cliquer sur Save pour créer votre propre pen. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans n'importe quel environnement que vous aimez : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Une fois terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.