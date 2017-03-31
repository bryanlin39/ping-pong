$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number-input").val());

    for (var i = 1; i <= numberInput; i++) {
      debugger;
      var result = i
      $("#result-list").append("<li>" + result + "</li>");
    }
  });
});
