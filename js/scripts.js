// biz logic

  var userOutput = [];
  var startingNumber = "";

function calculate(startingNumber) {
  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
  }
  for (var i = 0; i < userOutput.length; i++) {
    if(userOutput[i].toString().length > 1) {
      userOutput[i] = userOutput[i].toString().replace(/0/g, "beep").toString().replace(/1/g, "boop"); 
    } else if (userOutput[i].toString() === "0") {
      userOutput[i] = "beep";
    } else if (userOutput [i].toString() === "1") {
      userOutput[i] = "boop";
    } else if (userOutput[i] %3 === 0) {
      userOutput[i] = "I'm sorry Dave, Im afraid I can't do that.";
    } else { }
  }
}


// user interface
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("#number-input").val());
        calculate(startingNumber);
        $("#answer").show();
        $("#answer").text(userOutput);
  });
});
