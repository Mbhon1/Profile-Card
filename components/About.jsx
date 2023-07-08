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
import { BodyAnimation } from "./Interests";

const About = ({ desc }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const aboutDetails = {
    desc: "I am a web developer with a background in networking. I have always been interested in technology and have a strong foundation in computer systems. Recently, I have been focusing on learning web development and have been enjoying the challenge of building dynamic and interactive websites. I am constantly striving to improve my skills and stay up-to-date with the latest technologies in the field.",
    title: {
      abt: "About",
      modHeader: "Get To Know Mbhoni",
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
        {aboutDetails.title.abt}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className={`${josefin.className}`}>
          <ModalHeader fontWeight="extrabold">
            {aboutDetails.title.modHeader}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={"xl"}>
            <BodyAnimation>{aboutDetails.desc}</BodyAnimation>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default About;
