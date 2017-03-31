$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number-input").val());

  });
});
