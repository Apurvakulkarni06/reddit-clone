import { PhoneIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Checkbox,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {AiFillEye} from "react-icons/ai";
import { BsPersonFill} from "react-icons/bs";
import {HiLockClosed} from "react-icons/hi";
import React, { useState } from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    if (enteredValue.length > 21) return;

    setCommunityName(enteredValue);
    setCharsRemaining(21 - enteredValue.length);
  };
  const onChangeCommunityType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event?.target.name);
  };
  return (
    <Modal isOpen={open} onClose={handleClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          flexDirection="column"
          fontSize={15}
          padding={3}
        >
          Create a community
        </ModalHeader>
        <Box pl={3} pr={2} >
          <Divider />
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" padding="10px 0px">
            <Text fontWeight={700} fontSize={15}>
              Name
            </Text>
            <Text fontSize={11} color="gray.400">
              Community names including capatialization can not be changed
            </Text>
            <InputGroup mt={5}>
              <InputLeftElement
                pointerEvents="none"
                children={<Text color="gray.300">r/</Text>}
              />
              <Input
                _focus={{ border: "none" }}
                type="text"
                placeholder=""
                onChange={onChangeHandler}
              />
            </InputGroup>
            <Text
              color={charsRemaining === 0 ? "red" : "gray.400"}
              fontSize="9pt"
            >
              {charsRemaining} Characters remaining
            </Text>
            <Box>
              <Text fontWeight={600} fontSize={15}>
                Community Type
              </Text>
              <Stack spacing={2}>
                <Checkbox
                  name="public"
                  isChecked={communityType === "public"}
                  onChange={onChangeCommunityType}
                >
                    <Flex align="center">
                    <Icon as={BsPersonFill}  mr={2}  />
                    <Text fontSize="10pt" mr={1}>Public</Text>
                    <Text fontSize="8pt" pt={1} color="gray.400">Anyone can view, post  and comment on the community.</Text>
                    </Flex>
                </Checkbox>
                <Checkbox
                  name="retricted"
                  isChecked={communityType === "retricted"}
                  onChange={onChangeCommunityType}
                >
                    <Flex align="center">
                    <Icon as={AiFillEye}  mr={2}  />
                  <Text mr={1}  fontSize="10pt">Retricted</Text>
                  <Text fontSize="8pt" pt={1} color="gray.400">Anyone can view this community, but only approved user can post.</Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="private"
                  isChecked={communityType === "private"}
                  onChange={onChangeCommunityType}
                >
                    <Flex align="center">
                    <Icon as={HiLockClosed}  mr={2} />
                  <Text  fontSize="10pt" mr={1}>Private</Text>
                  <Text fontSize="8pt" pt={1} color="gray.400">Only approved user can view and submit to this community.</Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </Box>
          </ModalBody>
        </Box>
        <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
          <Button variant="outline"height="30px" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button height="30px">Create Community</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunityModal;
