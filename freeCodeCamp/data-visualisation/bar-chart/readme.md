Visualize Data with a Bar Chart

Objective: Build an app that is functionally similar to this: https://bar-chart.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://d3js.org/d3-axis. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

User Story #1: My chart should have a title with a corresponding id="title".

User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".

User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

User Story #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.

User Story #7: The .bar elements' data-date properties should match the order of the provided data.

User Story #8: The .bar elements' data-gdp properties should match the order of the provided data.

User Story #9: Each .bar element's height should accurately represent the data's corresponding GDP.

User Story #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.

User Story #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.

User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.

Here is the dataset you will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.

Once you're done, submit the URL to your working project with all its tests passing.


----------------- French ---------------------

Visualisez des données avec un diagramme à barres

Objectif : Construire une application fonctionnellement similaire à celle-ci : https://bar-chart.freecodecamp.rocks.

Réalisez les histoires d'utilisateurs ci-dessous et passez tous les tests. Utilisez les bibliothèques ou API dont vous avez besoin. Donnez-lui votre propre style personnel.

Vous pouvez utiliser HTML, JavaScript, CSS, et la bibliothèque de visualisation basée sur SVG D3. Les tests nécessitent que les axes soient générés en utilisant la propriété d'axe de D3, qui génère automatiquement des graduations le long de l'axe. Ces graduations sont nécessaires pour passer les tests D3 car leurs positions sont utilisées pour déterminer l'alignement des éléments graphiques. Vous trouverez des informations sur la génération d'axes sur https://d3js.org/d3-axis. Les éléments DOM requis sont interrogés au moment de chaque test. Si vous utilisez un framework frontal (comme Vue par exemple), les résultats des tests peuvent être inexacts pour le contenu dynamique. Nous espérons les accommoder éventuellement, mais ces frameworks ne sont actuellement pas pris en charge pour les projets D3.

Histoire d'utilisateur #1 : Mon diagramme doit avoir un titre avec un id correspondant ="title".

Histoire d'utilisateur #2 : Mon diagramme doit avoir un élément g pour l'axe x avec un id correspondant ="x-axis".

Histoire d'utilisateur #3 : Mon diagramme doit avoir un élément g pour l'axe y avec un id correspondant ="y-axis".

Histoire d'utilisateur #4 : Les deux axes doivent contenir plusieurs étiquettes de graduation, chacune avec une classe correspondante ="tick".

Histoire d'utilisateur #5 : Mon diagramme doit avoir un élément rect pour chaque point de données avec une classe correspondante ="bar" affichant les données.

Histoire d'utilisateur #6 : Chaque .bar doit avoir les propriétés data-date et data-gdp contenant respectivement les valeurs de date et de PIB.

Histoire d'utilisateur #7 : Les propriétés data-date des éléments .bar doivent correspondre à l'ordre des données fournies.

Histoire d'utilisateur #8 : Les propriétés data-gdp des éléments .bar doivent correspondre à l'ordre des données fournies.

Histoire d'utilisateur #9 : La hauteur de chaque élément .bar doit représenter avec précision le PIB correspondant aux données.

Histoire d'utilisateur #10 : L'attribut data-date et son élément .bar correspondant doivent s'aligner avec la valeur correspondante sur l'axe des x.

Histoire d'utilisateur #11 : L'attribut data-gdp et son élément .bar correspondant doivent s'aligner avec la valeur correspondante sur l'axe des y.

Histoire d'utilisateur #12 : Je peux survoler une zone et voir une infobulle avec un id correspondant ="tooltip" qui affiche plus d'informations sur la zone.

Histoire d'utilisateur #13 : Mon infobulle doit avoir une propriété data-date qui correspond à la date des données de la zone active.

Voici le jeu de données dont vous aurez besoin pour réaliser ce projet : https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

Vous pouvez construire votre projet en utilisant ce modèle CodePen et cliquer sur Enregistrer pour créer votre propre pen. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans l'environnement de votre choix : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.

Une fois terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.