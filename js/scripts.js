// biz logic







// user interface
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var startingNumber = parseInt($("input#number-input").val());
    // var startingString = $("input#number-input").val();
    // var startingArray = startingString.split();
    var ones = [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 31, 41, 51, 61, 71, 81, 91, 100]
    var userOutput = [];



    for (var index = 0; index <= startingNumber; index++) {
       userOutput.push(index);
     }
    for (var index = 0; index < userOutput.length; index++) {
      for (var lookingIndex = 0; lookingIndex < ones.length; lookingIndex++) {
        if (userOutput[index] === ones[lookingIndex]) {
          userOutput[index] = "boop";
        }
      }
    }


     $("#answer").show();
     $("#answer").text(userOutput);
  });
});


//
//       // var output = startingArray.join();
//       // $("#answer").show();
//       // $("#answer").append(startingNumber[index]);
//     }
//   }
// }



    // for (var numberIndex = 0; numberIndex < startingNumber.length; numberIndex ++) {
    //   for (var onesIndex = 0; onesIndex < ones.length; onesIndex++)  debugger
    //     if (startingNumber[numberIndex] === ones[onesIndex]) {
    //       startingNumber[numberIndex] = "boop";
    //     } debugger
    //   }
