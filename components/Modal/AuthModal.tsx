import {  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";

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
          <ModalHeader>{ title }</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hello this is modal body.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal;