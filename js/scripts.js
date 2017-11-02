// biz logic
$(document).ready(function() {

  var userOutput = [];

  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
     //basic display
  }
  for (var i; i <=startingNumber; index++) {
    if(userOutput[i].length > 1) {
      userOutput[i] = userOutput[i].replace("0", "beep").replace("1", "boop");
    }
  }



// user interface
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("input#number-input").val());
        $("#answer").show();
        $("#answer").text(userOutput);






  });
});
