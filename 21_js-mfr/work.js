d3.csv("https://raw.githubusercontent.com/alexliu4/Soft-Dev-2/master/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv").then(function(data){
  console.log(data);

// number of students in grade one
  var grade1 =[];
  for (var i = 0;i < data.length;i++){
    grade1.push(data[i]["grade1"]);
  }
  console.log(grade1);

  var grade1 = grade1.filter(function(n){return (Number.isInteger(parseInt(n)))});
  var average = (grade1.reduce(function(a,b){return parseInt(a)+parseInt(b)}) / grade1.length);
  console.log(average)

  var senior = data.filter(function(n) {
    return n.grade12 >0})

  var male = data.filter(function(n) {
    return n.male_per > n.female_per})

  var first = document.getElementById("avg");
  first.innerHTML = average;
  var first = document.getElementById("senior");
  first.innerHTML = senior;
  var first = document.getElementById("gender");
  first.innerHTML = male;
});
