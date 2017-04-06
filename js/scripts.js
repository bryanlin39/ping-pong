// Business Logic
function play(number, resultList) {
  for (var i = 1; i <= number; i++) {
    var result = i;
    if (result % 15 === 0) {
      result = "ping-pong";
    } else if (result % 3 === 0) {
      result = "ping";
    } else if (result % 5 === 0) {
      result = "pong";
    }

    resultList.push(result);
    $("#result-list").append("<li>" + result + "</li>");
  }
}

function reverseNumbers(resultList) {
  resultList.reverse();
  for (var i = 0; i < resultList.length; i++) {
    $("#result-list").append("<li>" + resultList[i] + "</li>");
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    $("#left-img").fadeIn();
    $("#right-img").fadeOut();
    $("#result-field").slideDown();
    $("#result-list").empty();

    var numberInput = parseInt($("#number-input").val());
    var resultList = [];
    play(numberInput, resultList);

    $("#reverse-button").show()

    $("#reverse-button").click(function() {
      $("#right-img").fadeIn();
      $("#left-img").fadeOut();
      $("#result-list").empty();
      reverseNumbers(resultList);
    });

    if (isNaN(numberInput)) {
      $("#reverse-button").hide()
      alert("You can only play ping-pong with numbers!");
    }
  });
});
