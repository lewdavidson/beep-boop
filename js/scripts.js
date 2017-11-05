// biz logic


var userOutput = [];
for (var index = 0; index <= startingNumber; index++) {
  userOutput.push(index);
}
//basic display
  for (var i = 0; i <= userOutput.length; index++) {
    if(userOutput[i].toString().length > 1) {
      userOutput[i] = userOutput[i].toString().replace(/0/g, "beep").toString().replace(/1/g, "boop"); //add regex global for specificity
    } else if (userOutput[i].toString() === "0") {
      userOutput.toString().replace("beep"); //not replace - something else.
    } else if (userOutput [i] === "1") {
      userOutput.toString().replace ("boop");
    } else (userOutput[i] %3 === 0) {
      userOutput.toString().replace ("I'm sorry Dave, Im afraid I can't do that.")
    }
  }


// user interface
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("input#number-input").val());
        $("#answer").show();
        $("#answer").text(userOutput);
  });
});
