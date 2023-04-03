import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { josefin } from "../pages";

const Interests = ({ desc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="linkedin"
        size="md"
        variant="outline"
      >
        {"Interests"}
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent className={`${josefin.className}`}>
          <ModalHeader fontWeight="extrabold">{"My Interests"}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{desc}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Interests;
