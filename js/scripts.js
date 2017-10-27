// biz logic







// user interface
$(document).ready(function(){
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var startingNumber = parseInt($("input#number-input").val());
    var possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var userOutput = [];

    for (var index = 0; index >= startingNumber; index++) { debugger
       userOutput.push(index);
    }
    alert(userOutput); debugger
  });
});
