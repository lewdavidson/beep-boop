// biz logic

  var userOutput = [];
  var startingNumber = "";

  if (startingNumber) {
  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
  }
}
  //basic display

  for (var i = 0; i <= userOutput.length; index++) {
    if(userOutput[i].toString().length > 1) {
      userOutput[i] = userOutput[i].toString().replace(/0/g, "beep").toString().replace(/1/g, "boop"); //add regex global!
    } else if (userOutput[i].toString() === "0") {
      userOutput[i] === "beep"; //not replace - something else.
    } else if (userOutput [i].toString() === "1") {
      userOutput[i] === "boop";
    } else if (userOutput[i] %3 === 0) {
      userOutput[i] === "I'm sorry Dave, Im afraid I can't do that.";
    } else {}
  }


// user interface
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("#number-input").val());
        $("#answer").show();
        $("#answer").text(userOutput);
  });
});
