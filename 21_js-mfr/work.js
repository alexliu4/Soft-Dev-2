
d3.csv("https://raw.githubusercontent.com/alexliu4/Soft-Dev-2/master/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv").then(function(data){
  var PS034 = data.filter(function(n){
	return (n.DBN == "01M034");
    });
    console.log(PS034);

    //===================POPULATION==================
    var population = PS034.map(function(n){
        return (parseInt(n.total_enrollment))
    });
    console.log(population)
    var total_pop = population.reduce(function(a,b){
        return a + b;
    });
    console.log(total_pop);
    document.getElementById("pop").innerHTML = total_pop;

    //=====================AVG grade1======================
    var grade1 = PS034.map(function(n){
        return (parseInt(n.grade1))
    });
    console.log(grade1)
    var total_grade1 = grade1.reduce(function(a,b){
	return a + b;
    });
    console.log(total_grade1);
    document.getElementById("grade1").innerHTML = "The average enrollment of pre-schoolers in PS034 over the course of 7 years is " + total_grade1/7;

    //==================BLACKS=====================
    var year = PS034.filter(function(n){
	return (n.schoolyear=="20092010");
    });
    console.log(year);
    var black = year[0].black_num;
    console.log(black);
    document.getElementById("black").innerHTML = black;
})
