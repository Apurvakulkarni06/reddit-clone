import { MenuList, MenuItem, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../../atoms/authModalStateAtoms";

const LoggedOutMenu:React.FC = () =>{
    const setAuthModalState = useSetRecoilState(authModalState)
    return (
        <MenuList>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        onClick={() => setAuthModalState({open:true, view:"login"})}
        _hover={{ bg: "blue.500", color: "white" }}
      >
        <Flex align="center">
          <Icon as={MdOutlineLogout} fontSize={20} mr={2} />
        </Flex>
        Login/SignUp
      </MenuItem>
    </MenuList>
    )
}

export default LoggedOutMenu;