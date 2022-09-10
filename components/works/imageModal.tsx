import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData | null;
};

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody paddingTop="5">
          {image && <Image src={image} layout="responsive" alt="" />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
