    document.addEventListener('DOMContentLoaded', function() {
      const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const dataset = data.monthlyVariance;

        // Définir la marge, la largeur et la hauteur du SVG
        const margin = { top: 50, right: 20, bottom: 100, left: 100 };
        const width = 960 - margin.left - margin.right;
        const height = 600 - margin.top - margin.bottom;

        // Sélectionner le SVG
        const svg = d3.select("#heat-map")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                      .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Créer les échelles
        const xScale = d3.scaleBand()
                        .range([0, width])
                        .domain(dataset.map(d => d.year));

        const yScale = d3.scaleBand()
                        .range([height, 0])
                        .domain(dataset.map(d => d.month));

        // Créer l'axe des x
        const xAxis = d3.axisBottom(xScale)
                        .tickValues(xScale.domain().filter(year => year % 10 === 0));

        // Créer l'axe des y
        const yAxis = d3.axisLeft(yScale)
                        .tickFormat(month => {
                          const date = new Date(0);
                          date.setUTCMonth(month);
                          return d3.timeFormat("%B")(date);
                        });

        // Ajouter l'axe des x
        svg.append("g")
           .attr("id", "x-axis")
           .attr("transform", `translate(0, ${height})`)
           .call(xAxis);

        // Ajouter l'axe des y
        svg.append("g")
           .attr("id", "y-axis")
           .call(yAxis);

        // Créer une échelle de couleur
        const colorScale = d3.scaleSequential()
                             .interpolator(d3.interpolateRdYlBu)
                             .domain(d3.extent(dataset, d => d.variance));

        // Ajouter les cellules
        svg.selectAll(".cell")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("class", "cell")
           .attr("x", d => xScale(d.year))
           .attr("y", d => yScale(d.month))
           .attr("width", xScale.bandwidth())
           .attr("height", yScale.bandwidth())
           .attr("fill", d => colorScale(d.variance))
           .attr("data-month", d => d.month)
           .attr("data-year", d => d.year)
           .attr("data-temp", d => data.baseTemperature + d.variance);

        // Ajouter la légende
        const legendColors = ["blue", "green", "yellow", "red"];
        const legendWidth = 30;

        const legend = d3.select("#legend")
                         .selectAll("rect")
                         .data(legendColors)
                         .enter()
                         .append("rect")
                         .attr("x", (d, i) => 10 + i * legendWidth)
                         .attr("y", 10)
                         .attr("width", legendWidth)
                         .attr("height", 20)
                         .attr("fill", d => d);

        // Ajouter le texte de la légende
        d3.select("#legend")
          .append("text")
          .attr("x", 120)
          .attr("y", 25)
          .text("Légende");

        // Ajouter les infobulles
        const tooltip = d3.select("body").append("div")
                          .attr("id", "tooltip")
                          .style("opacity", 0);

        svg.selectAll(".cell")
           .on("mouseover", function(event, d) {
              tooltip.transition().duration(200).style("opacity", .9);
              tooltip.html(`Year: ${d.year}, Month: ${d.month}, Temp: ${data.baseTemperature + d.variance}`)
                     .attr("data-year", d.year)
                     .style("left", (event.pageX) + "px")
                     .style("top", (event.pageY - 28) + "px");
           })
           .on("mouseout", function() {
              tooltip.transition().duration(500).style("opacity", 0);
           });
      });
    });