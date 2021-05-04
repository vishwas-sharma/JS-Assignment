
//w.a.p. to get system day and print day name.

function PrintDay(day) {
    var dayName = "";
    switch (day) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
  
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "Unknow";
        break;
    }
  
    return dayName;
  }
  
  var d = new Date();
  console.log(PrintDay(d.getDay()));
  console.log(d.getDay());