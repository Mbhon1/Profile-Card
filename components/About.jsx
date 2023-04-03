import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { josefin } from "../pages";

const About = ({ desc }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="linkedin"
        size="md"
        variant="outline"
      >
        {"About"}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent className={`${josefin.className}`}>
          <ModalHeader fontWeight="extrabold">{"About Me"}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{desc}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default About;
