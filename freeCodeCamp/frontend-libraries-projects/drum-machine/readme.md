Build a Drum Machine

Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

Here are some audio samples you can use for your drum machine:

    Heater 1
    Heater 2
    Heater 3
    Heater 4
    Clap
    Open-HH
    Kick-n'-Hat
    Kick
    Closed-HH

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.


-------------------French------------------------------

Construisez une boîte à rythmes

Note : React 18 présente des incompatibilités connues avec les tests pour ce projet (voir le problème).

Objectif : Construire une application qui est fonctionnellement similaire à celle-ci : https://drum-machine.freecodecamp.rocks/.

Répondez aux histoires d'utilisateurs ci-dessous et passez tous les tests. Utilisez les bibliothèques ou les API dont vous avez besoin. Donnez-lui votre propre style personnel.

Vous pouvez utiliser n'importe quel mélange de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour compléter ce projet. Vous devriez utiliser un framework frontal (comme React par exemple) car cette section est consacrée à l'apprentissage des frameworks frontaux. Les technologies supplémentaires non listées ci-dessus ne sont pas recommandées et leur utilisation est à vos propres risques. Nous envisageons de soutenir d'autres frameworks frontaux comme Angular et Vue, mais ils ne sont actuellement pas pris en charge. Nous accepterons et essaierons de corriger tous les rapports de problèmes qui utilisent la pile technologique suggérée pour ce projet. Bon codage !

Histoire d'utilisateur #1 : Je devrais pouvoir voir un conteneur extérieur avec un id="drum-machine" correspondant qui contient tous les autres éléments.

Histoire d'utilisateur #2 : Dans #drum-machine, je peux voir un élément avec un id="display" correspondant.

Histoire d'utilisateur #3 : Dans #drum-machine, je peux voir 9 éléments de pad de batterie cliquables, chacun avec un nom de classe de drum-pad, un id unique qui décrit le clip audio que le pad de batterie sera configuré pour déclencher, et un texte interne qui correspond à l'une des touches suivantes sur le clavier : Q, W, E, A, S, D, Z, X, C. Les pads de batterie DOIVENT être dans cet ordre.

Histoire d'utilisateur #4 : Dans chaque .drum-pad, il devrait y avoir un élément audio HTML5 qui a un attribut src pointant vers un clip audio, un nom de classe de clip, et un id correspondant au texte interne de son .drum-pad parent (par exemple, id="Q", id="W", id="E", etc.).

Histoire d'utilisateur #5 : Lorsque je clique sur un élément .drum-pad, le clip audio contenu dans son élément audio enfant doit être déclenché.

Histoire d'utilisateur #6 : Lorsque j'appuie sur la touche de déclenchement associée à chaque .drum-pad, le clip audio contenu dans son élément audio enfant doit être déclenché (par exemple, appuyer sur la touche Q doit déclencher le pad de batterie qui contient la chaîne Q, appuyer sur la touche W doit déclencher le pad de batterie qui contient la chaîne W, etc.).

Histoire d'utilisateur #7 : Lorsqu'un .drum-pad est déclenché, une chaîne décrivant le clip audio associé est affichée comme le texte interne de l'élément #display (chaque chaîne doit être unique).

Voici quelques échantillons audio que vous pouvez utiliser pour votre boîte à rythmes :

    Heater 1
    Heater 2
    Heater 3
    Heater 4
    Clap
    Open-HH
    Kick-n'-Hat
    Kick
    Closed-HH

Vous pouvez construire votre projet en utilisant ce modèle CodePen et cliquer sur Save pour créer votre propre pen. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans n'importe quel environnement que vous aimez : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Une fois terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.