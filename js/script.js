// business logic interface

var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var toRoman = function(num) {
  var result = '';

  for (var index = 0; index <= decimal.length; index++) {
    while (num % decimal[index] < num) {
      //this while find the a number lesser umber for it to move to the next statement
      result += roman[index];
      //it'll add roman at the same place as decimal in the array into the result variable
      num -= decimal[index];
      // it will subtract the number until its zero
    }
  }
  return result;
};

//From Roman numbers to Decimal section
var fromRoman = function(str) {
  var results = 0;
  // the result is now a number, not a string
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var index = 0; index <= decimal.length; index++) {
    while (str.indexOf(roman[index]) === 0) {
      //checking for the first characters in the string
      results += decimal[index];
      //adding the decimal value to our result counter
      str = str.replace(roman[index], '');
      //remove the matched Roman letter from the beginning
    }
  }
  return results;
};
// console.log(fromRoman("XI"));



// user Interface logic

// to roman input
$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());

    var romanNumber = toRoman(userInput);
    $("#output").text(romanNumber);
  });

  // from roman to numbers input

  $("form#blank").submit(function(event) {
    var romanInput = $("input#roman").val();
    romanCase = romanInput.toUpperCase();
    var numberOutput = fromRoman(romanCase);
    $("#userOutput").text(numberOutput);
    event.preventDefault();

  });
});
