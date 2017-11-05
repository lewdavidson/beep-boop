// biz logic

  var userOutput = [];

  for (var i; i <=startingNumber; index++) {
    if(userOutput[i].length > 1) {
      userOutput[i] = userOutput[i].toString().replace("0", "beep").toString().replace("1", "boop");
    }else if (userOutput[i] === "0") {
      .replace "beep";
    } else if (userOuptput [i] === "1") {
      .replace "boop";
    }
  }
  for (var index = 0; index <= startingNumber; index++) {
    userOutput.push(index);
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
