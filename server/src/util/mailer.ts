import nodemailer from 'nodemailer';
import { ENV } from "./env";

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: ENV.SENDGRID_API_KEY
  },
});

export default transporter;

const sendVerificationEmail = async (receiverEmail: string, otp: string) => {
  await transporter.sendMail({
    from: `"No Reply" <encrypt.lattice.chat@gmail.com>`,
    to: receiverEmail,
    subject: "Email Verification Code",
    html: `<p>Code: ${otp} </p>`
  });
}

const sendDuplicateEmail = async (receiverEmail: string) => {
  await transporter.sendMail({
    from: `"No Reply" <encrypt.lattice.chat@gmail.com>`,
    to: receiverEmail,
    subject: "Email Already In Use",
    html: `<p>This email is already in use.</p>`
  });
}

export {sendVerificationEmail, sendDuplicateEmail}