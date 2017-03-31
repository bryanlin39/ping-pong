$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    $("#result-list").empty();
    var numberInput = parseInt($("#number-input").val());

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
    }
  });
});
