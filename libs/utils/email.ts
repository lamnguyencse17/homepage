import nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";

if (!process.env.CONTACT_EMAIL) {
  throw new Error("CONTACT_EMAIL is not set");
}

if (!process.env.SES_ACCESS_KEY_ID) {
  throw new Error("SES_ACCESS_KEY_ID is not set");
}

if (!process.env.SES_SECRET_ACCESS_KEY) {
  throw new Error("SES_SECRET_ACCESS_KEY is not set");
}

const ses = new aws.SESClient({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
  },
});

const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export const sendEmail = (name: string, from: string, content: string) =>
  transporter.sendMail(
    {
      from,
      to: process.env.CONTACT_EMAIL,
      subject: `Homepage contact message from ${name}`,
      text: content,
    },
    (err, info) => {
      if (err) {
        console.log(err);
      }
    }
  );
