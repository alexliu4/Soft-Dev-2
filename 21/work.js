d3.csv("./NYC.csv").then(function(data){
    data.forEach(d => {
        d["grade1"] =+ d["grade1"]
    })
    var sumall= function(a,b) {
        return a["total_enrollment"]+b["total_enrollment"]
    };
    var PS15=data.filter(function(n){
        return (n.DBN=="01M188");
    })
    console.log(PS15)
    var pop=PS15.map(function(n){
        return (parseInt(n.total_enrollment))
    }
    )
    console.log(pop)
    var sumps=pop.reduce(function(a,b){
        return a+b;
    });
    console.log(sumps)
})
