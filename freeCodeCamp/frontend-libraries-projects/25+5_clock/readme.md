Build a 25 + 5 Clock

Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://25--5-clock.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").

User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").

User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".

User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.

User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").

User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

User Story #9: I can see a clickable element with a corresponding id="start_stop".

User Story #10: I can see a clickable element with a corresponding id="reset".

User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.

User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.

User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.

User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.

User Story #16: I should not be able to set a session or break length to <= 0.

User Story #17: I should not be able to set a session or break length to > 60.

User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

User Story #27: The audio element with id="beep" must be 1 second or longer.

User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

------------------------- FRENCH ----------------------

Construisez une horloge 25 + 5

Note : React 18 présente des incompatibilités connues avec les tests pour ce projet (voir le problème)

Objectif : Construire une application qui fonctionne de manière similaire à celle-ci : https://25--5-clock.freecodecamp.rocks.

Réalisez les histoires d'utilisateurs ci-dessous et réussissez tous les tests. Utilisez les bibliothèques ou les API dont vous avez besoin. Donnez-lui votre propre style personnel.

Vous pouvez utiliser n'importe quel mélange de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour compléter ce projet. Vous devriez utiliser un framework frontal (comme React, par exemple) car cette section est consacrée à l'apprentissage des frameworks frontaux. Les technologies supplémentaires non listées ci-dessus ne sont pas recommandées et leur utilisation est à vos propres risques. Nous envisageons de soutenir d'autres frameworks frontaux comme Angular et Vue, mais ils ne sont actuellement pas pris en charge. Nous accepterons et essaierons de corriger tous les rapports de problèmes qui utilisent la pile technologique suggérée pour ce projet. Bon codage !

Histoire d'utilisateur #1 : Je peux voir un élément avec l'id="break-label" qui contient une chaîne de caractères (par exemple, "Durée de la Pause").

Histoire d'utilisateur #2 : Je peux voir un élément avec l'id="session-label" qui contient une chaîne de caractères (par exemple, "Durée de la Session").

Histoire d'utilisateur #3 : Je peux voir deux éléments cliquables avec les IDs correspondants : id="break-decrement" et id="session-decrement".

Histoire d'utilisateur #4 : Je peux voir deux éléments cliquables avec les IDs correspondants : id="break-increment" et id="session-increment".

Histoire d'utilisateur #5 : Je peux voir un élément avec l'id="break-length", qui par défaut (au chargement) affiche une valeur de 5.

Histoire d'utilisateur #6 : Je peux voir un élément avec l'id="session-length", qui par défaut affiche une valeur de 25.

Histoire d'utilisateur #7 : Je peux voir un élément avec l'id="timer-label", qui contient une chaîne de caractères indiquant qu'une session est initialisée (par exemple, "Session").

Histoire d'utilisateur #8 : Je peux voir un élément avec l'id="time-left". NOTE : En pause ou en cours, la valeur dans ce champ doit toujours être affichée au format mm:ss (c'est-à-dire 25:00).

Histoire d'utilisateur #9 : Je peux voir un élément cliquable avec l'id="start_stop".

Histoire d'utilisateur #10 : Je peux voir un élément cliquable avec l'id="reset".

Histoire d'utilisateur #11 : Lorsque je clique sur l'élément avec l'id de reset, tout minuteur en cours doit être arrêté, la valeur dans l'id="break-length" doit revenir à 5, la valeur dans l'id="session-length" doit revenir à 25, et l'élément avec l'id="time-left" doit être réinitialisé à son état par défaut.

Histoire d'utilisateur #12 : Lorsque je clique sur l'élément avec l'id de break-decrement, la valeur dans l'id="break-length" diminue de 1, et je peux voir la valeur mise à jour.

Histoire d'utilisateur #13 : Lorsque je clique sur l'élément avec l'id de break-increment, la valeur dans l'id="break-length" augmente de 1, et je peux voir la valeur mise à jour.

Histoire d'utilisateur #14 : Lorsque je clique sur l'élément avec l'id de session-decrement, la valeur dans l'id="session-length" diminue de 1, et je peux voir la valeur mise à jour.

Histoire d'utilisateur #15 : Lorsque je clique sur l'élément avec l'id de session-increment, la valeur dans l'id="session-length" augmente de 1, et je peux voir la valeur mise à jour.

Histoire d'utilisateur #16 : Je ne devrais pas pouvoir définir une durée de session ou de pause <= 0.

Histoire d'utilisateur #17 : Je ne devrais pas pouvoir définir une durée de session ou de pause > 60.

Histoire d'utilisateur #18 : L

orsque je clique pour la première fois sur l'élément avec l'id="start_stop", le minuteur devrait commencer à fonctionner à partir de la valeur actuellement affichée dans l'id="session-length", même si la valeur a été incrémentée ou décrémentée par rapport à la valeur originale de 25.

Histoire d'utilisateur #19 : Si le minuteur fonctionne, l'élément avec l'id de time-left doit afficher le temps restant au format mm:ss (décrémentant d'une valeur de 1 et mettant à jour l'affichage toutes les 1000ms).

Histoire d'utilisateur #20 : Si le minuteur fonctionne et que je clique sur l'élément avec l'id="start_stop", le compte à rebours doit se mettre en pause.

Histoire d'utilisateur #21 : Si le minuteur est en pause et que je clique sur l'élément avec l'id="start_stop", le compte à rebours doit reprendre là où il s'était arrêté.

Histoire d'utilisateur #22 : Lorsqu'un compte à rebours de session atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label doit afficher une chaîne de caractères indiquant qu'une pause a commencé.

Histoire d'utilisateur #23 : Lorsqu'un compte à rebours de session atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), un nouveau compte à rebours de pause doit commencer, en décomptant à partir de la valeur actuellement affichée dans l'élément id="break-length".

Histoire d'utilisateur #24 : Lorsqu'un compte à rebours de pause atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label doit afficher une chaîne de caractères indiquant qu'une session a commencé.

Histoire d'utilisateur #25 : Lorsqu'un compte à rebours de pause atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), un nouveau compte à rebours de session doit commencer, en décomptant à partir de la valeur actuellement affichée dans l'élément id="session-length".

Histoire d'utilisateur #26 : Lorsqu'un compte à rebours atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), un son indiquant que le temps est écoulé doit jouer. Ceci doit utiliser une balise audio HTML5 et avoir un id correspondant="beep".

Histoire d'utilisateur #27 : L'élément audio avec l'id="beep" doit durer 1 seconde ou plus.

Histoire d'utilisateur #28 : L'élément audio avec l'id de beep doit cesser de jouer et être rembobiné au début lorsque l'élément avec l'id de reset est cliqué.

Vous pouvez construire votre projet en utilisant ce modèle CodePen et cliquer sur Enregistrer pour créer votre propre pen. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans n'importe quel environnement que vous aimez : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Une fois terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.