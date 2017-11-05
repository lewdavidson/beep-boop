// biz logic

  var userOutput = [];
  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
  }

  for (var i = 0; i <= userOutput.length; index++) {
    if(userOutput[i].length > 1) {
      userOutput[i] = userOutput[i].toString().replace(/0/g, "beep").toString().replace(/1/g, "boop"); //add regex global for specificity
    } else if (userOutput[i] === "0") {
      .replace "beep";
    } else if (userOuptput [i] === "1") {
      .replace "boop";
    } else if (userOutput[1] %3 === 0)
  }
    //basic display


// user interface
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
        var startingNumber = parseInt($("input#number-input").val());
        $("#answer").show();
        $("#answer").text(userOutput);
  });
});


//need regex to replace? must be a string to use .replace(), regex more thurough?
