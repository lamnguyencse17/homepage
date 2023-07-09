import { Flex, IconButton, Stack, Text, Box } from "@chakra-ui/react";
import { AnimatePresence, m } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { wrap } from "popmotion";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import ImageModal from "./imageModal";

type CarouselProps = {
  images: { src: StaticImageData; title: string }[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [page, setPage] = useState(0);
  const [image, setImage] = useState<StaticImageData | null>(null);
  const handleCloseModal = () => {
    setImage(null);
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
  };

  return (
    <Stack align="center" height="fit-content">
      <Flex
        height="400px"
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          aria-label="Previous image"
          icon={<ArrowBackIcon />}
          onClick={() => paginate(-1)}
          variant="outline"
        />
        <AnimatePresence initial={false}>
          <Box
            border="1px"
            borderColor="gray.200"
            boxShadow={"2xl"}
            cursor="pointer"
            marginX="2rem"
          >
            <m.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, display: "none" }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
              }}
              style={{ width: "500px", height: "100%" }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                layout="responsive"
                src={images[imageIndex].src}
                onClick={() => {
                  setImage(images[imageIndex].src);
                }}
                alt={images[imageIndex].title}
              />
            </m.div>
          </Box>
        </AnimatePresence>
        <IconButton
          aria-label="Next image"
          icon={<ArrowForwardIcon />}
          onClick={() => paginate(1)}
          variant="outline"
        />
        <ImageModal image={image} onClose={handleCloseModal} isOpen={!!image} />
      </Flex>
      {images[imageIndex].title && (
        <Text textAlign="center" noOfLines={1}>
          {images[imageIndex].title}
        </Text>
      )}
    </Stack>
  );
};

export default Carousel;
