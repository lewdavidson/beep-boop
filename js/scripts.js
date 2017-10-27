// biz logic







// user interface
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var startingNumber = parseInt($("input#number-input").val());
    var startingArray = startingNumber.split();
    var ones = [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21]
    var userOutput = [];

    for (var index = 0; index < startingArray.length; index++) { debugger
      for (var lookingIndex = 0; lookingIndex < ones.length; lookingIndex++) {
        if (startingArray[index] === ones[lookingIndex]) {
          startingArray[index] = ("boop"); debugger
        }
      }
    }

    // var output = startingArray.join();
    // $("#answer").show();
    // $("#answer").append(startingNumber[index]);

  });
});

// for (var index = 0; index <= startingNumber; index++) {
//    userOutput.push(index);
// }
// $("#answer").show();
// $("#answer").append(userOutput);


    // for (var numberIndex = 0; numberIndex < startingNumber.length; numberIndex ++) {
    //   for (var onesIndex = 0; onesIndex < ones.length; onesIndex++)  debugger
    //     if (startingNumber[numberIndex] === ones[onesIndex]) {
    //       startingNumber[numberIndex] = "boop";
    //     } debugger
    //   }
