// Alexander Liu
// SoftDev2 pd8
// K15: Scattered
// 2019-03-25

var dataset = [
    [ 2005,   3.8 ],
    [ 2006,   5.19 ],
    [ 2007,   8.65 ],
    [ 2008,   11.39 ],
    [ 2009,   11.73 ],
    [ 2010,   18 ],
    [ 2011,   27.5 ],
    [ 2012,   33.7 ],
    [ 2013,   42.96 ],
    [ 2014,   48.87 ],
    [ 2015,   52.92 ],
    [ 2016,   55 ],
    [ 2017,   69 ],
    [ 2018,   78 ],
    [ 2019,   80 ],
];

// from site
// https://www.statista.com/statistics/191985/sales-of-smartphones-in-the-us-since-2005/

var margin = {top: 70, right: 70, bottom: 70, left: 70},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d[0];})])
    .range([ 0, width ]);

var y = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d[1];})])
    .range([ height, 0 ]);

var chart = d3.select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('class', 'main')

main.append('text')
    .attr("x", 450 )
    .attr("y",  0 )
    .style("text-anchor", "middle")
    .text('Scatter Plot for Phones');

var x_axis = d3.axisBottom(x);

main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'axis')
    .call(x_axis);

main.append("text")
    .attr("x", 450 )
    .attr("y",  400 )
    .style("text-anchor", "middle")
    .text("Year");

var y_axis = d3.axisLeft(y);

main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'axis')
    .call(y_axis);

main.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -175 )
    .attr("y",  -35 )
    .style("text-anchor", "middle")
    .text("Sales in Billions of US Dollars");

var g = main.append("g");
g.selectAll("dots")
    .data(dataset)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 5);
