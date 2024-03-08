var zamalek = "Egypt cup Champions";
var number = 28;
var aray = ["al ahly", "eldakhlya", "pyramids", 'Future', 'Abo saleem'];

function updateGoals() {
    var zamalekGoals = document.getElementById("zamalekGoals").value;
    var alahlyGoals = document.getElementById("alahlyGoals").value;
    var willelzamalekwin = zamalekGoals>alahlyGoals;
    var totalcups = number + willelzamalekwin;
    
    console.log(totalcups.toString());
    for(var i=0;i<aray.length-1;i++){
        console.log(aray[i])
    }
    for(var i=0;i<zamalek.length-1;i++){
        console.log(zamalek[i])
    }
    var i=0
    do{
        console.log("alahly will win")
        i++
    }
    while(i<10)
  if (willelzamalekwin && alahlyGoals==2 && zamalekGoals==3) {
    document.getElementById("pridect").innerHTML ="you win 60 000$"
    aray.push("alahly2")
    // console.log(aray)
  } else {
    document.getElementById("pridect").innerHTML ="You didn't win anything"
  }
}