import React from "react";
import { Flex, Button} from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/appInitialize";
type RightContentProps ={
    user: any
} 

const RightContent: React.FC<RightContentProps> = ({ user}) =>{
    return (
        <>
        <AuthModal />
        <Flex justify="center" align="center">
           {user ? 
            <Button onClick={()=> signOut(auth)}> LogedIn User</Button> : 
            <AuthButtons />
        }
        </Flex>
        </>
    )
}

export default RightContent;