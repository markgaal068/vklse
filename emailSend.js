const nodemailer = require('nodemailer');


class emailSend {
    async makeAccount(details) {
        const account = {
            user: "vklsegyor2000@gmail.com",
            pass: "fvfaetqozdhskyfa"
        };


        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass,
            },
        });
        let info = await transporter.sendMail({
            from: details.from,
            to: "vklsegyor2000@gmail.com",
            subject: details.subject,
            text: "",
            html: details.html
        });
        return "Message sent: " + info.messageId;
    }

    async EmailSending(email) {
        let html = email.name + "<br>" + email.email + "<br>" + email.text + "<br>" + email.tel;

        const details = {
            from: email.email,
            to: "vklsegyor2000@gmail.com",
            html: html,
            subject: email.subject
        }
        return this.makeAccount(details);
    }

}

module.exports = new emailSend();