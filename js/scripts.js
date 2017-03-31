$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    $("#result-list").empty();
    var numberInput = parseInt($("#number-input").val());
    var resultList = [];

    for (var i = 1; i <= numberInput; i++) {
      var result = i

      if (result % 15 === 0) {
        result = "ping-pong";
      } else if (result % 3 === 0) {
        result = "ping";
      } else if (result % 5 === 0) {
        result = "pong";
      }

      $("#result-list").append("<li>" + result + "</li>");
      resultList.push(result);
    }

    // Reverse Button Functionality
    $("#reverse-button").show()
    $("#reverse-button").click(function() {
      $("#result-list").empty();
      resultList.reverse();

      for (var i = 0; i < resultList.length; i++) {
        $("#result-list").append("<li>" + resultList[i] + "</li>");
      }

    });

    if (isNaN(numberInput)) {
      $("#reverse-button").hide()
      alert("You can only play ping-pong with numbers!");
    }

  });
});
