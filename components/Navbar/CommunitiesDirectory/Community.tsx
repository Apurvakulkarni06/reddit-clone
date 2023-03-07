import { Flex, Icon,  MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import CreateCommunityModal from '../../Modal/CreateCommunityModal/CreateCommunityModal';

type CommunityProps = {
    
};

const Community:React.FC<CommunityProps> = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <CreateCommunityModal open={open} handleClose ={ ()=> setOpen(false)}  />
        <MenuItem fontSize="10pt">
          <Flex align="center" width="100%" _hover={{ bg:"gray.200"}} onClick={()=>{ setOpen(true)}}>
            <Icon as={GrAdd} fontSize={20} mr={2} />
            Create Community
          </Flex>
        </MenuItem>
      </>
    );
}
export default Community;