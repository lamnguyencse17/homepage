import {
  Box,
  Divider,
  Flex,
  Heading,
  Link as ChakraLink,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AnimatedPage from "../../components/root/animatedPage";

const Experience: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Experience</title>
      </Head>
      <AnimatedPage>
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={5}
          alignItems="center"
          padding="5"
          paddingTop="10rem"
        >
          <Box>
            <Heading textAlign="center">Experience</Heading>
            <Text textAlign="justify">
              Work experience is one important aspect that measures the
              expertise of a person.
              <br />
              Only time can tell.
            </Text>
          </Box>
          <Flex
            direction="row"
            gap={5}
            justifyContent="center"
            alignItems="center"
          >
            <Link href="#cybozu" passHref>
              <ChakraLink>
                <Text>Cybozu Vietnam</Text>
              </ChakraLink>
            </Link>

            <Box width="50px">
              <Divider borderWidth="1px" borderColor="grey.500" />
            </Box>

            <Link href="#kobiton" passHref>
              <ChakraLink>
                <Text>Kobiton - KMS Technology</Text>
              </ChakraLink>
            </Link>

            <Box width="50px">
              <Divider borderWidth="1px" borderColor="grey.500" />
            </Box>

            <Link href="#eh" passHref>
              <ChakraLink>
                <Text>Employment Hero</Text>
              </ChakraLink>
            </Link>
          </Flex>
          <Box
            flex={1}
            width="100%"
            marginTop="10"
            maxHeight="60%"
            overflowY="auto"
          >
            <Flex
              direction="row"
              width="100%"
              as={motion.div}
              whileInView={{ opacity: 1, x: 0, transitionDuration: "1s" }}
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              id="cybozu"
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  July 2020
                </Text>
                <Box flex={1}>
                  <Divider
                    orientation="vertical"
                    borderWidth="1.5px"
                    borderColor="grey.500"
                  />
                </Box>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  September 2020
                </Text>
              </Flex>
              <Box flex={1} padding="10">
                <ChakraLink href="https://www.cybozu.vn/">
                  <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    Cybozu Vietnam
                  </Text>
                </ChakraLink>

                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  textAlign="center"
                  textColor="gray.600"
                  fontStyle="italic"
                >
                  Web Developer Intern
                </Text>
                <Text fontSize="md" textAlign="justify" marginTop="5">
                  Technologies: PHP • JavaScript
                </Text>
                <UnorderedList marginTop="5">
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Learning about software development cycle, automated
                      testing and continuous integration
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Developing a website allowing everyone to create a food
                      store and order food
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Flex
              direction="row"
              width="100%"
              marginTop="10rem"
              as={motion.div}
              whileInView={{ opacity: 1, transitionDuration: "1s", x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              id="kobiton"
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  September 2021
                </Text>
                <Box flex={1}>
                  <Divider
                    orientation="vertical"
                    borderWidth="1.5px"
                    borderColor="grey.500"
                  />
                </Box>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  August 2022
                </Text>
              </Flex>
              <Box flex={1} padding="10">
                <ChakraLink href="https://kobiton.com/">
                  <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    Kobiton - KMS Technology
                  </Text>
                </ChakraLink>

                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  textAlign="center"
                  textColor="gray.600"
                  fontStyle="italic"
                >
                  Fullstack developer
                </Text>
                <Text fontSize="md" textAlign="justify" marginTop="5">
                  Technologies: Node.js • React • Rust • Kafka
                </Text>
                <UnorderedList marginTop="5">
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Implementing requested features using current stack:
                      Node.js, React, Rust, Kafka
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Improving system performance and security issues reported
                      and found
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Providing code reviews to colleagues pull request
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Providing documentations to multiple aspects of work:
                      setting up environments, coding conventions, system
                      structure
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Flex
              direction="row"
              width="100%"
              marginTop="10rem"
              as={motion.div}
              whileInView={{ opacity: 1, transitionDuration: "1s", x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              id="eh"
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  September 2022
                </Text>
                <Box flex={1}>
                  <Divider
                    orientation="vertical"
                    borderWidth="1.5px"
                    borderColor="grey.500"
                  />
                </Box>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  fontStyle="italic"
                  textAlign="center"
                  textColor="gray.500"
                >
                  Present
                </Text>
              </Flex>
              <Box flex={1} padding="10">
                <ChakraLink href="https://employmenthero.com/">
                  <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    Employment Hero
                  </Text>
                </ChakraLink>

                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  textAlign="center"
                  textColor="gray.600"
                  fontStyle="italic"
                >
                  Frontend Software Development Engineer 1
                </Text>
                <Text fontSize="md" textAlign="justify" marginTop="5">
                  Technologies: React • React Native • TypeScript • Ruby
                </Text>
                <UnorderedList marginTop="5">
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Migrating features from Workzone app to Employment
                      Hero&apos;s Swag app
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Maintaining current Swag app payroll features including:
                      Expense, Timesheet, Leave,...
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="md" textAlign="justify">
                      Developing and migrating means for users with mixed
                      payroll system to be able to use in Employment Hero&apos;s
                      Swag app
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default Experience;
