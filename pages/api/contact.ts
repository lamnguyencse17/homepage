import { NextApiHandler } from "next";
import { verifyCaptcha } from "../../libs/utils/captcha";
import { sendEmail } from "../../libs/utils/email";
import { ContactFormSchema } from "../../libs/validations/contact";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const contactInput = ContactFormSchema.parse(req.body);
      const isValidCaptcha = await verifyCaptcha(contactInput.token);
      if (!isValidCaptcha) {
        return res
          .status(400)
          .json({ message: "Captcha is invalid or expired" });
      }
      sendEmail(contactInput.name, contactInput.email, contactInput.content);
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      return res.status(404).send("NOT FOUND");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
