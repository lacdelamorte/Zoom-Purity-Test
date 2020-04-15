questions = "Called somebody in another time zone?\n\
Called somebody in another country?\n\
Experienced awkward silence during a breakout session?\n\
Fallen asleep during a video call?\n\
Been called out for falling asleep?\n\
Eat/drink unmuted on a call?\n\
Played video games during lecture?\n\
Learned a tik tok dance?\n\
Had your parents walk in on you during a lecture?\n\
During an exam?\n\
Been told to just “take your vitamins”?\n\
Felt embarrassed by someone else in your house during a video call?\n\
Been sent fake information from someone?\n\
Received 🤢 a 🤕 chain 😷 message 🍆 about coronavirus❓❓\n\
Changed your status to “Attending Zoom University”?\n\
Used Elmo background (or other meme backgrounds) during a video call?\n\
Changed your background during a serious call (lecture, meeting, interview, etc.)\n\
Sent a private dm to “Everyone” by accident?\n\
Sent a coronavirus meme during a lecture?\n\
Heard someone make a quarantine pun?\n\
Found your quaran-fling?\n\
Seen someone not wash their hands after sneezing/coughing?\n\
Shown up to video lecture with a mask on?\n\
Blessed someone after they sneeze during lecture?\n\
Someone called COVID-19 the “Chinese virus”\n\
Someone brought up conspiracy theories surrounding the virus?\n\
Used screenshots of your professor to make memes?\n\
Professor ever asked you to DM them during a lecture call?\n\
Professor had several technical issues during a lecture call?\n\
Professor revealed excessive personal information while on a call?\n\
Professor has shared their screen with something inappropriate? \n\
Dropped/Have seen someone drop — social media handles on the chat?\n\
Dropped/Have seen someone drop — social media handles during a video call?\n\
Promoted/Someone promote a business during a video call?\n\
Promoted/Someone promote a mixtape?\n\
Promoted/Someone promote a youtube channel?\n\
Told/Been told about a great business venture related to being quarantined?\n\
Told/Been told about a great business venture related to “Zoom University”?\n\
Someone in the call mentioned how you should use this opportunity to invest in the stock market\n\
Signed a grade petition?\n\
Graduated through a video call?\n\
Showed up >30 minutes late to call?\n\
Joined the wrong video call?\n\
Caught someone pretending to be someone else during a call?\n\
Pretended you were someone else during a call?\n\
Committed/Seen someone commit a crime over a video call?\n\
Only covered your visible body parts during a video call?\n\
Turned off your camera for the sole purpose of going to the bathroom?\n\
Showered during a video call?\n\
Gone number 1 while listening to a lecture?\n\
Gone number 2 while listening to a lecture?\n\
Gone to the bathroom with the video on during a lecture?\n\
Made inappropriate sounds by accident during a call?\n\
Not by accident?\n\
Winked at someone during a call?\n\
Slid into another student’s dms?\n\
Slid into a professor’s dms?\n\
Blown a kiss at a S/O during a call?\n\
Blown a kiss at your professor during lecture?\n\
Formed a relationship over video calls?\n\
Formed a relationship over dms?\n\
Had to communicate with your significant other over video calls because of distance?\n\
Had an argument during a video call?\n\
Sent a sexually explicit message while on a video call?\n\
Used Zoom to sext a member of the preferred sex?\n\
Used an explicit photo/video as your virtual background during a Zoom call?\n\
Stripped during a lecture?\n\
Stripped while in a breakout session?\n\
?\n\
Watched pornography (muted) while in a call ?\n\
Watched pornography (unmuted) while in a call ?\n\
Watched pornography while sharing your screen?\n\
Had sex while in a lecture call?\n\
Played a stripping game with more than one person during a video call?\n\
Flashed/Been flashed during a video call?\n\
Held a Zoom call for the explicit purpose of camming?\n\
Sent or received nudes during a video lecture?\n\
Sent or received nudes during a breakout session?\n\
Sent or received sexually explicit DMs?\n\
Masturbated while in a lecture call?\n\
Masturbated while in a breakout room?\n\
Masturbated with your microphone off?\n\
Masturbated with your camera off?\n\
Masturbated with your camera on?\n\
Masturbated with more than one person present?\n\
Masturbated together with that other person?\n\
Performed/Taken part in a sexual act with another person over a zoom call?\n\
Performed/Taken part in a sexual act with 2-3 people over a video call?\n\
Performed/Taken part in a sexual act with 4+ people over a video call?\n\
Juuled/vaped during a video call?\n\
Used tobacco during a call?\n\
Been under the influence in a video call?\n\
Used Marijuana while on a call?\n\
Used a drug stronger than marijuana while on a phone call?\n\
Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin while on a call?\n\
Drank alcohol while on a call?\n\
Used lecture to play a drinking game?\n\
Pregamed a video call?\n\
Postgamed a video call?\n\
Faked your sobriety to loved ones or teachers during a video call?".split(/\r?\n/);

$(function() {
  //Hide Score information
  $("#toShow").hide();

  //Build list of questions
  ordered_list = document.getElementById("questions");
  for (i = 0; i < questions.length; i++) {
    list_item = document.createElement("li");
    input = document.createElement("input")
    input.type = "checkbox";
    input.id = i + 1;
    list_item.appendChild(input);
    list_item.innerHTML += questions[i];
    ordered_list.appendChild(list_item);
  }

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
  $('input:checkbox').prop('checked', false);
});

$('#calculate_again').click(function(){
  //Hide Score
  $("#toShow").hide();
  $('#toHide').show();
  //Reset checkboxes
  $('input:checkbox').prop('checked', false);
})
