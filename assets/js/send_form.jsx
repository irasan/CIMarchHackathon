function sendMail (name, email, message) {
  fetch('/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: form_name,
      to: form_recipient,
      sender: sender_email,
      recipient: rec_email,
      message: message
    })
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }