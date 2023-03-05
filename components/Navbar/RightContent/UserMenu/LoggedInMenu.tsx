import { MenuList, MenuItem, Flex, Icon } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { auth } from "../../../../firebase/appInitialize";

const LoggedInMenu: React.FC = () => {
  return (
    <MenuList>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: "blue.500", color: "white" }}
      >
        <Flex align="center">
          <Icon as={CgProfile} fontSize={20} mr={2} />
        </Flex>
        Profile
      </MenuItem>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        onClick={() => signOut(auth)}
        _hover={{ bg: "blue.500", color: "white" }}
      >
        <Flex align="center">
          <Icon as={MdOutlineLogout} fontSize={20} mr={2} />
        </Flex>
        Logout
      </MenuItem>
    </MenuList>
  );
};

export default LoggedInMenu;
