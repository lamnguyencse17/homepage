import axios from "axios";

if (!process.env.CAPTCHA_URL) {
  throw new Error("CAPTCHA_URL is not set");
}

if (!process.env.CAPTCHA_KEY) {
  throw new Error("CAPTCHA_KEY is not set");
}

const captchaUrl = process.env.CAPTCHA_URL;
const captchaKey = process.env.CAPTCHA_KEY;

type CaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes": string[];
};

export const verifyCaptcha = async (token?: string) => {
  if (!token) {
    return false;
  }
  const { data } = await axios.post<CaptchaResponse>(
    captchaUrl,
    `secret=${captchaKey}&response=${token}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return data.success;
};
