import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import {authModalState} from "../../atoms/authModalStateAtoms";
import Login from './Login';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
const AuthInputs: React.FC = () =>{
    const modalState = useRecoilValue(authModalState)
    return (
    <Flex direction="column" align="center" justify="center" >
       { modalState.view === "login" && <Login />}
        {modalState.view === "signup" && <Signup />}
    </Flex>
    )
}

export default AuthInputs;