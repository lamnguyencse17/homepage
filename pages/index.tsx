import { Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedPage from "../components/root/animatedPage";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import GithubLogo from "../public/github.svg";
import LinkedInLogo from "../public/linkedin.svg";
import Image from "next/image";

const Home: NextPage = () => {
  const mainHeadingControl = useAnimationControls();
  const firstSubHeadingControl = useAnimationControls();
  const secondSubHeadingControl = useAnimationControls();

  const setupControls = () => {
    mainHeadingControl.set({
      opacity: 0,
    });
    firstSubHeadingControl.set({ x: 25, opacity: 0, y: -30, zIndex: -1 });
    secondSubHeadingControl.set({ x: 50, opacity: 0, y: -60, zIndex: -2 });
  };

  const orchestrate = async () => {
    setupControls();
    mainHeadingControl.start({
      opacity: 100,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    });
    firstSubHeadingControl.start({
      opacity: 100,
      transition: {
        duration: 2,
        delay: 0.4,
      },
    });
    secondSubHeadingControl
      .start({
        opacity: 100,
        transition: {
          duration: 2,
          delay: 0.55,
        },
      })
      .then(() => {
        secondSubHeadingControl.set({
          display: "none",
        });
        firstSubHeadingControl.set({
          display: "none",
        });
      });
  };

  useEffect(() => {
    orchestrate();
  }, [orchestrate]);

  return (
    <AnimatedPage>
      <Flex
        height="100%"
        width="100%"
        direction="column"
        gap={2}
        alignItems="center"
      >
        <Heading as={motion.h2} marginTop="10rem" animate={mainHeadingControl}>
          HI! I AM LAM NGUYEN
        </Heading>
        <Heading
          as={motion.h2}
          initial={{
            x: 25,
            opacity: 0,
          }}
          animate={firstSubHeadingControl}
          textShadow="-1px 1px 2px #000,
				  1px 1px 2px #fff,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;"
          color="white"
        >
          HI! I AM LAM NGUYEN
        </Heading>
        <Heading
          as={motion.h2}
          initial={{}}
          animate={secondSubHeadingControl}
          textShadow="-1px 1px 2px #000,
				  1px 1px 2px #fff,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;"
          color="white"
        >
          HI! I AM LAM NGUYEN
        </Heading>
        <Text
          as={motion.p}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 100,
            transition: {
              duration: 3,
              delay: 2.5,
            },
          }}
        >
          A fullstack Node.js developer
        </Text>
        <Flex
          direction="row"
          gap={5}
          as={motion.div}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
            transition: {
              duration: 2,
              delay: 2.5,
            },
          }}
        >
          <Image src={GithubLogo} alt="Github Link" />
          <Image src={LinkedInLogo} alt="LinkedIn Link" />
        </Flex>
      </Flex>
    </AnimatedPage>
  );
};

export default Home;
