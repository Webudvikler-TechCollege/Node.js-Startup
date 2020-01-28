var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,    
    auth: {
        user: 'info@netheinz.dk',
        pass: 'H1Mm3rL@ndsV3j34!'
    }
});

var mailopts =  {
    from: 'info@netheinz.dk',
    to: 'heka@techcollege.dk',
    subject: 'Mail fra Node.js app',
    text: 'Tekst til mail body'
};

transporter.sendMail(mailopts, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});