import React from "react";
import { Flex, Image} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/appInitialize";
import Directory from "./CommunitiesDirectory/Directory";

const Navbar: React.FC = () => {
    const [user, loading, error]= useAuthState(auth)
    return (<>
        <Flex bg="white" height="44px" padding="6px 12px" justify="space-between">
            <Flex align="center" width={{ base:"40px", md:"auto"}} mr={{base:0, md:2}}>
                <Image src="/images/redditFace.svg" alt="Reddit logo" height="30px"/>
                <Image src="/images/redditText.svg" alt="Reddit Brand Name" height="46px" display={{base:"none", md:"unset"}}/>
            </Flex>
            { user && <Directory/>}
             {/* SearchBar */}
             <SearchInput user={user}/>
             <RightContent user={user}/>
            
        </Flex>
    </>)
}

export default Navbar;