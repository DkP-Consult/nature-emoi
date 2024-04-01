document.addEventListener('DOMContentLoaded', function() {
    const svg = d3.select('svg');
    const svgWidth = +svg.attr('width');
    const svgHeight = +svg.attr('height');
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
        .then(data => {
            const x = d3.scaleBand()
                        .rangeRound([0, width])
                        .padding(0.1)
                        .domain(data.data.map(d => d[0]));

            const y = d3.scaleLinear()
                        .rangeRound([height, 0])
                        .domain([0, d3.max(data.data, d => d[1])]);

            g.append('g')
                .attr('class', 'axis axis--x')
                .attr('id', 'x-axis')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x));

            g.append('g')
                .attr('class', 'axis axis--y')
                .attr('id', 'y-axis')
                .call(d3.axisLeft(y).ticks(10, 's'))
              .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('PIB');

                g.selectAll('.bar')
                .data(data.data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', d => x(d[0]))
                .attr('y', d => {
                    console.log('Y position for GDP value:', d[1], 'is', y(d[1])); // Débogage
                    return y(d[1]);
                })
                .attr('width', x.bandwidth())
                .attr('height', d => {
                    let calculatedHeight = height - y(d[1]);
                    console.log('Calculated height:', calculatedHeight, 'for GDP value:', d[1]); // Débogage
                    return calculatedHeight;
                })
                .attr('data-date', d => d[0])
                .attr('data-gdp', d => d[1]);
            
            });

});
