$(function(){
  console.log("ready!");
  $("#toShow").hide();
});

$('#submit').click(function() {
  var done_list = document.querySelectorAll('input[type="checkbox"]:checked');
  var done = done_list.length;
  var purity_score = 100 - done;

  $('#score').html(purity_score);
  // Shows the score and hides the checks
  $("#toShow").show();
  $("#toHide").hide();
});


// On click of the reset button:
$('#reset').click(function() {
    $('input:checkbox').prop('checked',false);
});
