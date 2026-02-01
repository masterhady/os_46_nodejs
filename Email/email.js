// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
import  {template} from "./emailTemplate.js";
import  jwt from "jsonwebtoken";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
export default async function sendEmail(email){
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "noteappmearn26@gmail.com",
    pass: "dsbq xhvy bxnt vzkl",
  },
});
// Send an email using async/await
    const emailToken = jwt.sign(email, "myEmail")

  const info = await transporter.sendMail({
    from: '"Hello From Note App We Are The Note APP Team from Intake 46 " <noteappmearn26@gmail.com>',
    to: email,
    subject: "Hello ✔",
    text: "Hello world? We Are The Note APP Team from Intake 46", // Plain-text version of the message
    html: template(emailToken), // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
}