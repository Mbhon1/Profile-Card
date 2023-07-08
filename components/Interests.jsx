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
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section>
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
          <ModalBody fontSize={"xl"}>
            <BodyAnimation>{interestsDetails.desc}</BodyAnimation>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Interests;

export const BodyAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};
