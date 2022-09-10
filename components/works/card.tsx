import {
  Box,
  Heading,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type WorkCardProps = {
  url: string;
  image: StaticImageData;
  title: string;
  description: string;
};

const WorkCard = ({ url, image, title, description }: WorkCardProps) => {
  return (
    <LinkBox
      as={motion.div}
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={10}
      border="1px"
      borderColor="gray.200"
      whileHover={{ scale: 1.1 }}
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        height={"230px"}
        border="1px"
        borderColor="gray.200"
        overflow="hidden"
      >
        <Image src={image} alt={`${title} image`} />
      </Box>
      <Stack pt={5} align={"center"}>
        <Link href={url} passHref>
          <LinkOverlay>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>
          </LinkOverlay>
        </Link>

        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {description}
        </Text>
      </Stack>
    </LinkBox>
  );
};

export default WorkCard;
