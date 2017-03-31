$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number-input").val());

    for (var i = 1; i <= numberInput; i++) {
      debugger;
      var result = i

      if (result % 3 === 0) {
        result = "ping";
      } else if (result % 5 === 0) {
        result = "pong";
      }

      $("#result-list").append("<li>" + result + "</li>");

    }
  });
});
