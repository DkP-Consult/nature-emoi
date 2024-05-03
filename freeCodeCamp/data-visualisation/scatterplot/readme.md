Visualize Data with a Scatterplot Graph

Objective: Build an app that is functionally similar to this: https://scatterplot-graph.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://d3js.org/d3-axis. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

User Story #1: I can see a title element that has a corresponding id="title".

User Story #2: I can see an x-axis that has a corresponding id="x-axis".

User Story #3: I can see a y-axis that has a corresponding id="y-axis".

User Story #4: I can see dots, that each have a class of dot, which represent the data being plotted.

User Story #5: Each dot should have the properties data-xvalue and data-yvalue containing their corresponding x and y values.

User Story #6: The data-xvalue and data-yvalue of each dot should be within the range of the actual data and in the correct data format. For data-xvalue, integers (full years) or Date objects are acceptable for test evaluation. For data-yvalue (minutes), use Date objects.

User Story #7: The data-xvalue and its corresponding dot should align with the corresponding point/value on the x-axis.

User Story #8: The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.

User Story #9: I can see multiple tick labels on the y-axis with %M:%S time format.

User Story #10: I can see multiple tick labels on the x-axis that show the year.

User Story #11: I can see that the range of the x-axis labels are within the range of the actual x-axis data.

User Story #12: I can see that the range of the y-axis labels are within the range of the actual y-axis data.

User Story #13: I can see a legend containing descriptive text that has id="legend".

User Story #14: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

User Story #15: My tooltip should have a data-year property that corresponds to the data-xvalue of the active area.

Here is the dataset you will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

---------------------------------FRENCH---------------------------------------------

Visualiser des données avec un graphique à nuage de points

Objectif : Construire une application qui fonctionne de manière similaire à celle-ci : https://scatterplot-graph.freecodecamp.rocks.

Réalisez les user stories ci-dessous et réussissez tous les tests. Utilisez les bibliothèques ou les API dont vous avez besoin. Donnez-lui votre style personnel.

Vous pouvez utiliser HTML, JavaScript, CSS, et la bibliothèque de visualisation basée sur SVG D3. Les tests exigent que les axes soient générés en utilisant la propriété d'axe de D3, qui génère automatiquement des graduations le long de l'axe. Ces graduations sont nécessaires pour réussir les tests D3 car leurs positions sont utilisées pour déterminer l'alignement des éléments graphiques. Vous trouverez des informations sur la génération des axes sur https://d3js.org/d3-axis. Les éléments DOM requis sont interrogés au moment de chaque test. Si vous utilisez un framework frontal (comme Vue par exemple), les résultats des tests peuvent être inexacts pour le contenu dynamique. Nous espérons les accommoder éventuellement, mais ces frameworks ne sont actuellement pas pris en charge pour les projets D3.

User Story #1 : Je peux voir un élément de titre qui a un id correspondant à "title".

User Story #2 : Je peux voir un axe x qui a un id correspondant à "x-axis".

User Story #3 : Je peux voir un axe y qui a un id correspondant à "y-axis".

User Story #4 : Je peux voir des points, chacun ayant une classe de "dot", qui représentent les données tracées.

User Story #5 : Chaque point doit avoir les propriétés data-xvalue et data-yvalue contenant leurs valeurs x et y correspondantes.

User Story #6 : Le data-xvalue et le data-yvalue de chaque point doivent être dans la plage des données réelles et dans le bon format de données. Pour data-xvalue, les entiers (années complètes) ou les objets Date sont acceptables pour l'évaluation des tests. Pour data-yvalue (minutes), utilisez des objets Date.

User Story #7 : Le data-xvalue et son point correspondant doivent s'aligner avec le point/valeur correspondant sur l'axe des x.

User Story #8 : Le data-yvalue et son point correspondant doivent s'aligner avec le point/valeur correspondant sur l'axe des y.

User Story #9 : Je peux voir plusieurs étiquettes de graduation sur l'axe des y avec un format horaire %M:%S.

User Story #10 : Je peux voir plusieurs étiquettes de graduation sur l'axe des x qui montrent l'année.

User Story #11 : Je peux voir que la plage des étiquettes de l'axe des x est dans la plage des données réelles de l'axe des x.

User Story #12 : Je peux voir que la plage des étiquettes de l'axe des y est dans la plage des données réelles de l'axe des y.

User Story #13 : Je peux voir une légende contenant du texte descriptif qui a un id="legend".

User Story #14 : Je peux passer la souris sur une zone et voir une infobulle avec un id correspondant à "tooltip" qui affiche plus d'informations sur la zone.

User Story #15 : Mon infobulle doit avoir une propriété data-year qui correspond au data-xvalue de la zone active.

Voici le jeu de données dont vous aurez besoin pour compléter ce projet : https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

Vous pouvez construire votre projet en utilisant ce modèle CodePen et cliquer sur Enregistrer pour créer votre propre stylo. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans n'importe quel environnement que vous aimez : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Une fois que vous avez terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.