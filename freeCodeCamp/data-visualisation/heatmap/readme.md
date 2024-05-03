Visualize Data with a Heat Map

Objective: Build an app that is functionally similar to this: https://heat-map.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

User Story #1: My heat map should have a title with a corresponding id="title".

User Story #2: My heat map should have a description with a corresponding id="description".

User Story #3: My heat map should have an x-axis with a corresponding id="x-axis".

User Story #4: My heat map should have a y-axis with a corresponding id="y-axis".

User Story #5: My heat map should have rect elements with a class="cell" that represent the data.

User Story #6: There should be at least 4 different fill colors used for the cells.

User Story #7: Each cell will have the properties data-month, data-year, data-temp containing their corresponding month, year, and temperature values.

User Story #8: The data-month, data-year of each cell should be within the range of the data.

User Story #9: My heat map should have cells that align with the corresponding month on the y-axis.

User Story #10: My heat map should have cells that align with the corresponding year on the x-axis.

User Story #11: My heat map should have multiple tick labels on the y-axis with the full month name.

User Story #12: My heat map should have multiple tick labels on the x-axis with the years between 1754 and 2015.

User Story #13: My heat map should have a legend with a corresponding id="legend".

User Story #14: My legend should contain rect elements.

User Story #15: The rect elements in the legend should use at least 4 different fill colors.

User Story #16: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

User Story #17: My tooltip should have a data-year property that corresponds to the data-year of the active area.

Here is the dataset you will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

-------------------------FRENCH-----------------------------------------

Visualiser les données avec une carte thermique

Objectif : Construire une application fonctionnellement similaire à celle-ci : https://heat-map.freecodecamp.rocks.

Satisfaites les user stories ci-dessous et faites passer tous les tests. Utilisez les bibliothèques ou les APIs dont vous avez besoin. Donnez-lui votre propre style personnel.

Vous pouvez utiliser HTML, JavaScript, CSS, et la bibliothèque de visualisation basée sur SVG D3. Les éléments DOM requis sont interrogés au moment de chaque test. Si vous utilisez un framework frontend (comme Vue par exemple), les résultats des tests peuvent être inexacts pour le contenu dynamique. Nous espérons les prendre en charge éventuellement, mais ces frameworks ne sont pas actuellement pris en charge pour les projets D3.

User Story #1 : Ma carte thermique devrait avoir un titre avec un id correspondant à "title".

User Story #2 : Ma carte thermique devrait avoir une description avec un id correspondant à "description".

User Story #3 : Ma carte thermique devrait avoir un axe des x avec un id correspondant à "x-axis".

User Story #4 : Ma carte thermique devrait avoir un axe des y avec un id correspondant à "y-axis".

User Story #5 : Ma carte thermique devrait avoir des éléments rect avec une classe "cell" qui représentent les données.

User Story #6 : Il devrait y avoir au moins 4 couleurs de remplissage différentes utilisées pour les cellules.

User Story #7 : Chaque cellule aura les propriétés data-month, data-year, data-temp contenant leurs valeurs de mois, d'année et de température correspondantes.

User Story #8 : Le data-month, data-year de chaque cellule devrait être dans la plage des données.

User Story #9 : Ma carte thermique devrait avoir des cellules qui s'alignent avec le mois correspondant sur l'axe y.

User Story #10 : Ma carte thermique devrait avoir des cellules qui s'alignent avec l'année correspondante sur l'axe x.

User Story #11 : Ma carte thermique devrait avoir plusieurs étiquettes de graduation sur l'axe y avec le nom complet du mois.

User Story #12 : Ma carte thermique devrait avoir plusieurs étiquettes de graduation sur l'axe x avec les années entre 1754 et 2015.

User Story #13 : Ma carte thermique devrait avoir une légende avec un id correspondant à "legend".

User Story #14 : Ma légende devrait contenir des éléments rect.

User Story #15 : Les éléments rect dans la légende devraient utiliser au moins 4 couleurs de remplissage différentes.

User Story #16 : Je peux survoler une zone et voir une infobulle avec un id correspondant à "tooltip" qui affiche plus d'informations sur la zone.

User Story #17 : Mon infobulle devrait avoir une propriété data-year qui correspond à l'année de données de la zone active.

Voici l'ensemble de données dont vous aurez besoin pour compléter ce projet : https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

Vous pouvez construire votre projet en utilisant ce modèle de CodePen et en cliquant sur Enregistrer pour créer votre propre stylo. Ou vous pouvez utiliser ce lien CDN pour exécuter les tests dans n'importe quel environnement que vous aimez : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Une fois que vous avez terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.