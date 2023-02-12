import {  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";
import AuthButtons from "../Navbar/RightContent/AuthButtons";
import AuthInputs from "./AuthInputs";
const AuthModal:React.FC = () =>{
   const [ modalState, setModalState] = useRecoilState(authModalState);
   console.log("modalState:",modalState)
  const handleClose = () =>{
    setModalState(prev=>({
        ...prev,
        open:false
    }))
  }
  const title =  modalState.view === "login" ?' Log In ': 'Sign Up' 
   return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{ title }</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb={6}>

           <Flex direction="column" align="center" justify={"center"} width="70%" >
            <AuthButtons />
            <AuthInputs />
           </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal;