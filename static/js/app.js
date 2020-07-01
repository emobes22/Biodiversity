//Read the JSON file and create access to data
d3.json("../../StarterCode/samples.json", function(data) {
  console.log(data);
});





/* d3.json("../../StarterCode/samples.json").then((data)=> {
  var data = data.metadata
  console.log(data)
})

d3.json('../../StarterCode/samples.json',function(data)(code...)
  var canvas (d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500)
    canvas.selectAll("rect")
    .data(data)
    .enter()
      append("rect")
      .attr("width", function...)
      .attr("height", function...)
      .attr("y", function...)
      .attr("fill", "blue")

//Create horizontal bar chart
let trace1 = {
  x: ["beer", "wine", "martini", "margarita",
  "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
  };let data = [trace1];let layout = {
  title: "'Bar' Chart"
  };
  //             the Div, data, layout
  Plotly.newPlot("bar", data, layout);
  
  //Figure out x data points.. sample_values... could be samples.sample_values */

