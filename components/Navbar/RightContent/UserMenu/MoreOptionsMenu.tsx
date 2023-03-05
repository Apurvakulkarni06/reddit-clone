import { Menu, MenuButton, Icon, Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { FaRedditSquare } from "react-icons/fa";
import { User } from "firebase/auth";
import React from "react";
import LoggedInMenu from "./loggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { IoSparkles } from "react-icons/io5";

type MenuProps = {
  user?: User | null;
};
const MoreOptionsMenu: React.FC<MenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", borderColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
              <Icon as={FaRedditSquare} fontSize={24} mr={1} color="gray.300" />
              <Flex direction="column" align="flex-start" fontSize="8pt" mr={2} display={{ base:"none", lg:"flex"}}>
                <Text fontWeight={700}>{user.displayName|| user.email?.split("@")[0]}</Text>
                <Flex>
                <Icon as={IoSparkles} color="brand.100" mr={1} />
                <Text color="gray.400">1 karma</Text>
                </Flex>
                </Flex>
                </>
            ) : (
              <Icon as={VscAccount} fontSize={24} mr={1} color="gray.300" />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      {user ? <LoggedInMenu /> : <LoggedOutMenu />}
    </Menu>
  );
};

export default MoreOptionsMenu;
