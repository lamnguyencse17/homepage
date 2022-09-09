import { useCallback, useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const Contact = () => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const onVerify = useCallback((token: string) => {
    setToken(token);
  }, []);

  const onSubmit = () => {
    console.log(token);
    setRefreshReCaptcha((r) => !r);
  };

  if (!process.env.NEXT_PUBLIC_CAPTCHA) {
    return <></>;
  }

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA}>
        <GoogleReCaptcha
          onVerify={onVerify}
          refreshReCaptcha={refreshReCaptcha}
        />
        <button onClick={onSubmit}>ha</button>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default Contact;
