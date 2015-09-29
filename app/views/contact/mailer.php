<?php 
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = $name . " says: ";
  $message .= htmlspecialchars($_POST['message']);

  $inbox = "brastrullo.dev@gmail.com";
  $subject = "Message from " . $name . " <" . $email . ">";
  if (!mail($inbox, $subject, $message)){
    $alert = "Failed to send message. You can also email me at brastrullo.dev@gmail.com and I'll get back to you as soon as I can.";
    echo "<script type='text/javascript'>alert('$alert');</script>";
    header ('Location: http://www.bradleyrastrullo.ca/contact');
  }
