import Image from "next/image";
import profilePic from "@/assets/NQL.jpg";
import styles from "@/styles/components/index/intro.module.scss";

const Intro = () => {
  return (
    <section>
      <div className={styles.intro}>
        <div className={styles.introImageWrapper}>
          <Image
            className={styles.introImage}
            src={profilePic}
            priority
            alt="Profile picture of Nguyen Quang Lam"
            height={1053}
            width={752}
          />
        </div>
        <div className={styles.introText}>
          <div className={styles.introLine}>
            Hi there, my name is Nguyen Quang Lam.
            <br />
          </div>
          <div className={styles.introLine}>
            I am a full-stack web developer mainly working with Javascript
            ecosystem like Express, React, Next.js.
            <br />
          </div>
          <div className={styles.introLine}>
            I am a kinesthetic learner which means I love learning by doing and
            creating stuff! A hands-on exprience is always the best way to
            visualize ideas.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
