// dennis dayan
function datecalc(){
  var day = new Date(document.getElementById("datepicker").value );
  var firstDay =  new Date("09/8/2020");
  var numDays = (day.getTime()-firstDay.getTime())/(1000 * 60 * 60 * 24)
  var mlkDay = new Date("1/18/2021");
  var presDay = new Date("02/15/2021");
  var memDay = new Date("05/31/21");
  if (mlkDay.getTime()>day.getTime()){
      if (numDays % 2 == 0){
        var result =  day.toDateString()+": A day."
      }
      else{
        var result = day.toDateString()+":  B Day!"
      }
  }
  if (mlkDay.getTime()<day.getTime() && presDay.getTime()>day.getTime()){
    if (numDays % 2 == 1){
      var result =  day.toDateString()+": A day."
    }
    else{
      var result = day.toDateString()+":  B Day!"
    }
  }
  if (presDay.getTime()<day.getTime() && memDay.getTime()>day.getTime()){
    if (numDays % 2 == 0){
        var result =  day.toDateString()+": A day."
    }
    else{
        var result = day.toDateString()+":  B Day!"
    }
  }
  if (memDay.getTime()<day.getTime()){
    if (numDays % 2 == 1){
      var result =  day.toDateString()+": A day."
    }
    else{
      var result = day.toDateString()+":  B Day!"
    }
  }
  if(result == null){
    var result = "Invalid Date"
  }
  document.getElementById("result").innerHTML = (result)
}