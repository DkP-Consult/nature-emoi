document.addEventListener('DOMContentLoaded', function() {
    const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
    
    // Préparer le parseur de date pour le format spécifique de vos dates
    const parseDate = d3.timeParse("%Y-%m-%d");

    fetch(url).then(response => response.json())
    .then(data => {
        // Transformer les chaînes de date en objets Date
        const dataset = data.data.map(d => [parseDate(d[0]), d[1]]);

        const margin = { top: 30, right: 30, bottom: 30, left: 50 };
        const width = 800 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        const g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Utiliser une échelle de temps pour l'axe des x
        const x = d3.scaleTime()
            .range([0, width])
            .domain(d3.extent(dataset, d => d[0]));

        const y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(dataset, d => d[1])]);

        g.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        g.append("g")
            .attr("id", "y-axis")
            .call(d3.axisLeft(y));

        // Modifier l'attribut 'width' pour gérer l'espacement des barres
        const barWidth = width / dataset.length;

        g.selectAll(".bar")
            .data(dataset)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d[0]))
            .attr("y", d => y(d[1]))
            .attr("width", barWidth)  // Utiliser barWidth pour un espacement uniforme
            .attr("height", d => height - y(d[1]))
            .attr("data-date", d => d3.timeFormat("%Y-%m-%d")(d[0]))  // Formatter les dates pour l'attribut data-date
            .attr("data-gdp", d => d[1]);

        const tooltip = d3.select("body").append("div")
            .attr("id", "tooltip")
            .style("opacity", 0);

        g.selectAll(".bar")
            .on("mouseover", function(event, d) {
                tooltip.transition().duration(200).style("opacity", 0.9);
                tooltip.html(d3.timeFormat("%Y-%m-%d")(d[0]) + '<br>' + '$' + d[1] + ' Billion')
                    .attr("data-date", d3.timeFormat("%Y-%m-%d")(d[0]))
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                tooltip.transition().duration(500).style("opacity", 0);
            });
    });
});
