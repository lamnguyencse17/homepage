import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/icons/facebook.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";

const Contact = () => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <p className="text-2xl text-blue-600">
        EMAIL: nguyenquanglam3008@gmail.com
      </p>
      <p className="text-2xl text-blue-600">PHONE: 0919696148</p>
      <p className="text-2xl text-blue-600">ADDRESS: District 5, Ho Chi Minh</p>
      <div className="flex flex-row gap-2">
        <div className="text-2xl text-blue-600">FIND ME ON SOCIAL: </div>
        <Link href={`https://www.facebook.com/zodiac3011`}>
          <a>
            <Image
              className="h-8 w-8 fill-current"
              src={facebook}
              alt="Facebook"
              height={32}
              width={32}
            />
          </a>
        </Link>
        <Link href={`https://github.com/lamnguyencse17`}>
          <a>
            <Image
              className="h-8 w-8 fill-current"
              src={github}
              alt="github"
              height={32}
              width={32}
            />
          </a>
        </Link>
        <Link href={`https://www.linkedin.com/in/lamnguyencse17/`}>
          <a>
            <Image
              className="h-8 w-8 fill-current"
              src={linkedin}
              alt="linkedin"
              height={32}
              width={32}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
