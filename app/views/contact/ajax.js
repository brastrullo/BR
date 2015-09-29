'use strict';
function mail(){
  var nameVal = $('#name').val();
  var emailVal = $('#email').val();
  var msgVal = $('#message').val();
  $.ajax({
    data : {name: nameVal, email: emailVal, message: msgVal},
    method: "POST",
    url: "/views/contact/mailer.php"
  })
  .done(function() {
    $(".contactform").hide();
    $(".contact p").replaceWith("Message received. Thanks, I'll get back to you as soon as I can. Thanks for the visit!");
  })
  .fail(function() {
    alert("Message couldn't go through. Please try again later.");
  });
}