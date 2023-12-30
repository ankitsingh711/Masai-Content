const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'noe5@ethereal.email',
        pass: 'a6EBuwtbRswpzyFVBm'
    }
});

transporter.sendMail({
    to: "noe5@ethereal.email",
    from: "noe5@ethereal.email",
    subject:"This is an live classs practice of sending mails from the server",
    text: "Hey ! hope you are doing good."
})
.then(()=>{
    console.log("Mail sent successfully")
})
.catch((err)=>{
    console.log("Error sending mail");
    console.log(err);
})