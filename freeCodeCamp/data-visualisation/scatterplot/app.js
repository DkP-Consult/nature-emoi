document.addEventListener('DOMContentLoaded', function() {
    const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

    fetch(url).then(response => response.json())
    .then(data => {
        const dataset = data;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleLinear()
            .domain([d3.min(dataset, d => d.Year), d3.max(dataset, d => d.Year)])
            .range([0, width]);

        const y = d3.scaleTime()
            .domain(d3.extent(dataset, d => new Date(d.Seconds * 1000)))
            .range([0, height]);

        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        svg.append("g")
            .attr("id", "y-axis")
            .call(d3.axisLeft(y).tickFormat(d3.timeFormat("%M:%S")));

        svg.selectAll(".dot")
            .data(dataset)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", d => x(d.Year))
            .attr("cy", d => y(new Date(d.Seconds * 1000)))
            .attr("r", 5)
            .attr("data-xvalue", d => d.Year)
            .attr("data-yvalue", d => new Date(d.Seconds * 1000));

        // Ajout de la légende
        const legend = svg.append("g")
            .attr("id", "legend")
            .attr("transform", `translate(${width - 100}, ${height - 20})`);

        legend.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 5)
            .style("fill", "steelblue");

        legend.append("text")
            .attr("x", 10)
            .attr("y", 5)
            .text("Hommes");

        const tooltip = d3.select("body").append("div")
            .attr("id", "tooltip");

        svg.selectAll(".dot")
            .on("mouseover", function(event, d) {
                tooltip.style("visibility", "visible")
                    .html(`Year: ${d.Year}<br>Time: ${d.Time}`)
                    .attr("data-year", d.Year)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                tooltip.style("visibility", "hidden");
            });
    });
});
