"use strict";

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: '******@gmail.com',
    pass: '********'
  }
}));

function sendMail(){
  transporter.sendMail({
    from: name +' <******@gmail.com>',
    to: 'bradleyrastrullo@gmail.com',
    replyTo: email,
    subject: 'Portfolio Site Contact Page',
    text: message
  });
}
