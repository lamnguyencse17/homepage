import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedPage from "../components/root/animatedPage";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import GithubLogo from "../public/github.svg";
import LinkedInLogo from "../public/linkedin.svg";
import IndexPreview from "../public/indexPreview.jpg";
import Image from "next/image";
import Head from "next/head";

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

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Home</title>
        <meta property="og:image" content={IndexPreview.src} />
        <meta name="description" content="Nguyen Quang Lam - Home Page" />
      </Head>
      <AnimatedPage>
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={2}
          alignItems="center"
        >
          <Heading
            as={motion.h2}
            marginTop="15rem"
            animate={mainHeadingControl}
          >
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
                delay: 3.5,
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
              opacity: "100%",
              transition: {
                duration: 2,
                delay: 2.5,
              },
            }}
          >
            <ChakraLink
              href="https://github.com/lamnguyencse17"
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              target="_blank"
            >
              <Image src={GithubLogo} alt="Github Link" />
            </ChakraLink>
            <ChakraLink
              href="https://www.linkedin.com/in/lamnguyencse17"
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              target="_blank"
            >
              <Image src={LinkedInLogo} alt="LinkedIn Link" />
            </ChakraLink>
          </Flex>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default Home;
