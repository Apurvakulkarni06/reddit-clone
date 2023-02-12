import { Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup: React.FC = () =>{
    const [username, setUsername] = useState("");
    return (
        <Flex direction="column" align="center" justify="center" width="100%">
            <Input value={username} onChange={(e)=> setUsername(e.target.value)} placeholder=" Enter username"  />
        </Flex>
    )
}

export default Signup;