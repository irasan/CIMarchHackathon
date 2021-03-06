// function sendEmail() { 
//       Email.send({ 
//         Host: "smtp.gmail.com", 
//         Username: "paddymail.service@gmail.com", 
//         Password: "Hackme12", 
//         To: 'iryna.sanzhara@gmail.com', 
//         From: "paddymail.service@gmail.com", 
//         Subject: "Sending Email using javascript", 
//         Body: "Well that was easy!!", 
//         Attachments : [{
//         name : "File_Name_with_Extension",
//         path:"Full Path of the file"
// }]
    //   }) 
    //     .then(function (message) { 
    //       alert("Your card was sent successfully!") 
    //     }); 
    // } 

//     function sendEmail() {
// Email.send({
//     Host : "smtp.mailtrap.io",
//     Username : "b5459b16336afe",
//     Password : "c63c06c91e2102",
//     To : 'iryna.sanzhara@gmail.com',
//     From : "paddymail.service@gmail.com",
//     Subject : "Test email",
//     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
// }).then(
//   message => alert(message)
// );
// }

// function sendEmail() {
// var transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "b5459b16336afe",
//     pass: "c63c06c91e2102",
//      To : 'iryna.sanzhara@gmail.com',
//     From : "paddymail.service@gmail.com",
//     Subject : "Test email",
//     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//   }
// });
// }

var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b5459b16336afe",
    pass: "c63c06c91e2102"
  }
});

var mailOptions = {
  from: 'paddymail.service@gmail.com',
  to: 'iryna.sanzhara@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

