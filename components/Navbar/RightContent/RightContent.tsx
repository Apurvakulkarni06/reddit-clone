import React from "react";
import { Flex, Button} from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/AuthModal";
import { signOut, User } from "firebase/auth";
import { auth } from "../../../firebase/appInitialize";
import Icons from "./Icons";
import MoreOptionsMenu from "./UserMenu/MoreOptionsMenu";
type RightContentProps ={
    user?: User | null ;
} 

const RightContent: React.FC<RightContentProps> = ({ user}) =>{
    return (
        <>
        <AuthModal />
        <Flex justify="center" align="center">
           {user ? 
           <>
            <Icons />
           </>
           :
            <AuthButtons />
        }
         <MoreOptionsMenu user={user}/>
        </Flex>
        </>
    )
}

export default RightContent;