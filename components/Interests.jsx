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
import { josefin } from "../pages";

const Interests = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const interestsDetails = {
    desc: "In my free time, I enjoy exploring new technologies and staying up-to-date with the latest developments in web development. I also enjoy participating in online coding challenges and working on personal projects to expand my skillset. In addition to my interest in technology, I enjoy video gaming and experiencing different cultures, as well as spending time with my family and friends.",
    title: {
      modHeader: "Mbhoni's Interests",
      int: "Interests",
    },
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="linkedin"
        size="md"
        variant="outline"
      >
        {interestsDetails.title.int}
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className={`${josefin.className}`}>
          <ModalHeader fontWeight="extrabold">
            {interestsDetails.title.modHeader}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={"xl"}>{interestsDetails.desc}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Interests;
