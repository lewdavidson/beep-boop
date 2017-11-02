// biz logic
$(document).ready(function() {

  var userOutput = [];

  for (var i; i <=startingNumber; index++) {
    if(userOutput[i].length > 1) {
      userOutput[i] = userOutput[i].toString().replace("0", "beep").toString().replace("1", "boop");
      //need regex to replace? must be a string to use .replace(), regex more thurough?
    }
  }
  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
  }
    //basic display


// user interface
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("input#number-input").val());
        $("#answer").show();
        $("#answer").text(userOutput);
  });
});
