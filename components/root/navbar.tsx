import { Box, Divider, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { subNavData } from "../../libs/navData";

const isNotIndexPage = (path: string, pathname: string) =>
  path === "/" && path !== pathname;
const isPageMatch = (path: string, pathname: string) => pathname.includes(path);
const isPageExactMatch = (path: string, pathname: string) =>
  isPageMatch(path, pathname) && path.length == pathname.length;

const shouldExpand = (path: string, pathname: string) =>
  !isNotIndexPage(path, pathname) && isPageMatch(path, pathname);

const generateColor = (path: string, pathname: string) => {
  if (isNotIndexPage(path, pathname)) {
    return "var(--chakra-colors-pink-black)";
  }
  if (isPageExactMatch(path, pathname)) {
    return "var(--chakra-colors-pink-400)";
  }
  return "var(--chakra-colors-black)";
};

const handleExpand = (path: string, pathname: string) => {
  if (isNotIndexPage(path, pathname)) {
    return [];
  }
  if (isPageMatch(path, pathname)) {
    return (
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          transitionDuration: "1s",
          opacity: 1,
        }}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        {subNavData[path as keyof typeof subNavData].map((data) => (
          <Box
            as={motion.div}
            animate={{
              color: generateColor(data.path, pathname),
              transitionDuration: "0.5s",
            }}
            key={data.name}
          >
            <Text fontSize="md" fontStyle="italic">
              <Link href={data.path} passHref>
                <ChakraLink
                  as="span"
                  aria-label={`Link to my ${data.name} page`}
                >
                  {data.name}
                </ChakraLink>
              </Link>
            </Text>
          </Box>
        ))}
      </Flex>
    );
  }
  return [];
};

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="10rem"
      px="3"
    >
      <Box
        as={motion.div}
        animate={{
          color: generateColor("/", pathname),
          transitionDuration: "0.5s",
        }}
      >
        <Text fontSize="lg">
          <Link href="/" passHref>
            <ChakraLink as="span">HOME</ChakraLink>
          </Link>
        </Text>
      </Box>
      <Box height="50px">
        <Divider
          orientation="vertical"
          borderWidth="1.5px"
          borderColor="grey.500"
        />
      </Box>
      <Box
        as={motion.div}
        animate={{
          color: generateColor("/about", pathname),
        }}
      >
        <Text fontSize="lg">
          <Link href="/about" passHref>
            <ChakraLink as="span">ABOUT</ChakraLink>
          </Link>
        </Text>
      </Box>
      {shouldExpand("/about", pathname) && handleExpand("/about", pathname)}
      <Box height="50px">
        <Divider
          orientation="vertical"
          borderWidth="1.5px"
          borderColor="grey.500"
        />
      </Box>
      <Box
        as={motion.div}
        animate={{
          color: generateColor("/works", pathname),
        }}
      >
        <Text fontSize="lg">
          <Link href="/works" passHref>
            <ChakraLink as="span">WORKS</ChakraLink>
          </Link>
        </Text>
      </Box>
      {shouldExpand("/works", pathname) && handleExpand("/works", pathname)}
      <Box height="50px">
        <Divider
          orientation="vertical"
          borderWidth="1.5px"
          borderColor="grey.500"
        />
      </Box>
      <Box
        as={motion.div}
        animate={{
          color: generateColor("/works", pathname),
        }}
      >
        <Text fontSize="lg">
          <Link href="/contact" passHref>
            <ChakraLink as="span">CONTACT</ChakraLink>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
