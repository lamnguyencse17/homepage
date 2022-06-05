import Image from "next/image";
import profilePic from "@/assets/NQL.jpg";
import About from "./intro/about";
import Contact from "./intro/contact";

const Intro = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex md:flex-row flex-col h-fit"
    >
      <div className="overflow-hidden h-auto px-2 w-full">
        <Image
          src={profilePic}
          className=""
          priority
          alt="Profile picture of Nguyen Quang Lam"
          height={1053}
          width={752}
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <About />
        <Contact />
      </div>
    </section>
  );
};

export default Intro;
