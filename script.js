// dennis dayan
function datecalc(){
  var day = new Date(document.getElementById("datepicker").value + " 00:00");
  var dayStr = day.toString();
  var firstDay =  new Date("09/8/2020");
  var numDays = (day.getTime()-firstDay.getTime())/(1000 * 60 * 60 * 24)
  var mlkDay = new Date("1/18/2021");
  var presDay = new Date("02/15/2021");
  var memDay = new Date("05/31/21");
  // have to use parseInt or else JS is broken
  // odd problem that only manifested recently
  // it works, have no reason to change it
  if (mlkDay.getTime()>day.getTime()){
      if (parseInt(numDays % 2) == 0){
        var result =  day.toDateString()+": A day."
      }
      else{
		  console.log(numDays % 2);
		var result = day.toDateString()+":  B day."
      }
  }
  else if (mlkDay.getTime()<day.getTime() && presDay.getTime()>day.getTime()){
    if (parseInt(numDays % 2) == 1){
      var result =  day.toDateString()+": A day."
    }
    else{
      var result = day.toDateString()+":  B day."
    }
  }
  else if (presDay.getTime()<day.getTime() && memDay.getTime()>day.getTime()){
    if (parseInt(numDays % 2) == 0){
        var result =  day.toDateString()+": A day."
    }
    else{
        var result = day.toDateString()+":  B day."
    }
  }
  else if (memDay.getTime()<day.getTime()){
    if (parseInt(numDays % 2) == 1){
      var result =  day.toDateString()+": A day."
    }
    else{
      var result = day.toDateString()+":  B day."
    }
  }
  else if(result == null){
    var result = "Invalid Date"
  }
  // dont tell me how this works
  // dont tell me why this works
  // this works and I do not care
  if(dayStr.includes("Jun 22")){
    if(result == "Tue Jun 22 2021: A day."){
      var result = "Graduation Day"
    }
  }
  document.getElementById("result").innerHTML = (result)
}