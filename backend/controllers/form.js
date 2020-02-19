const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { name, email, message } = req.body;

  const emailData = {
    to: process.env.EMAIL_TO,
    from: email,
    subject: `Contact form2 - ${process.env.APP_NAME}`,
    text: `Email received from contact form \n Sender name: ${name}\n Sender email: ${email}\n Sender message: ${message}`,
    html: `<h4>Email received from contact form:</h4>
      <p>Sender name: ${name}</p>
      <p>Sender email: ${email}</p>
      <p>Sender message: ${message}</p>
      <hr/>
      <p>This email may contain sensetive information</p>
      <p>https://webdevblogs.com</p>
      `
  };
  sgMail.send(emailData).then(sent => {
    return res.json({
      success: true
    });
  });
};

exports.contactBlogAuthroForm = (req, res) => {
  const { authorEmail, name, email, message } = req.body;

  let mailList = [authorEmail, process.env.EMAIL_TO];
  const emailData = {
    to: mailList,
    from: email,
    subject: `Someone messaged you from - ${process.env.APP_NAME}`,
    text: `Email received from contact form \n Sender name: ${name}\n Sender email: ${email}\n Sender message: ${message}`,
    html: `<h4>Message received from:</h4>
        <p>name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Sender message: ${message}</p>
        <hr/>
        <p>This email may contain sensetive information</p>
        <p>https://webdevblogs.com</p>
        `
  };
  sgMail.send(emailData).then(sent => {
    return res.json({
      success: true
    });
  });
};
