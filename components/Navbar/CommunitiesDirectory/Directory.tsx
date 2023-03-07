import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Flex, Icon, Text, MenuList } from '@chakra-ui/react';
import React from 'react';
import { TiHome } from 'react-icons/ti';
import Community from './Community';

type DirectoryProps = {
    
};

const Directory:React.FC<DirectoryProps> = () => {
    
    return (
        <Menu>
          <MenuButton
            cursor="pointer"
            padding="0px 6px"
            borderRadius={4}
            _hover={{ outline: "1px solid", borderColor: "gray.200" }}
            mr={2}
            ml={{base: 0, md: 2}}
          >
            <Flex align="center" justify="space-between" width={{ base:"auto", lg:"200px"}}>
              <Flex align="center">
                <Icon as={TiHome} fontSize={24} mr={{ base:1, md:2}} ml={{ base:0, md:2}} />
                <Flex fontWeight={600} fontSize="10pt" display={{ base:"none", lg:"flex"}}>
                    <Text>Home</Text>
                </Flex>
              </Flex>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList>
            <Community />
          </MenuList>
        </Menu>
      );
}
export default Directory;