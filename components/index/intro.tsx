import Image from "next/image";
import profilePic from "@/assets/NQL.jpg";

const Intro = () => {
  return (
    <section className="container mx-auto flex md:flex-row flex-col h-fit">
      <div className="overflow-hidden  h-auto px-2 md:w-4/12 w-full">
        <Image
          src={profilePic}
          className=""
          priority
          alt="Profile picture of Nguyen Quang Lam"
        />
      </div>
      <div className="flex flex-col gap-4 px-2">
        <p className="text-2xl text-blue-600">
          Hi there, my name is Nguyen Quang Lam.
        </p>
        <p className="text-2xl text-blue-600">
          I am a full-stack web developer mainly working with Javascript
          ecosystem like Express, React, Next.js.
        </p>
        <p className="text-2xl text-blue-600">
          I am a kinesthetic learner which means I love learning by doing and
          creating stuff! A hands-on exprience is always the best way to
          visualize ideas.
        </p>
        <p className="text-2xl text-blue-600">
          Despite being a full-stack Node.js, I always discover new tech. Find
          out more below.
        </p>
      </div>
    </section>
  );
};

export default Intro;
