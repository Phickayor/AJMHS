import express, { Request, Response } from "express";
const PORT = process.env.PORT || 8080;
const app = express();
require("dotenv").config();
import bodyparser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
app.use(cors());
app.use(bodyparser.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PSWD
  }
});

app.post("/contact", (req: Request, res: Response) => {
  var { name, email, phone, city, message } = req.body;

  var mailOptions = {
    from: email,
    to: process.env.MAIL_USERNAME,
    subject: "Message from Amen Jet Website",
    html: `<html>
    <body>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>${name}</p>
        <p>${email}</p>
        <p>Phone: ${phone}</p>
        <p>City ${city}k</p>
    </body>
    </html>`
  };

  transporter.sendMail(
    mailOptions,
    function (err: any, info: { response: string }) {
      if (err) {
        res.status(501).json({ error: "Couldn't send Mail, please try again" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Mail sent Successfully" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
