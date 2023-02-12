import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";

type LoginProps = {};
const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Input
        name="email"
        placeholder="Enter email"
        type="email"
        mb={2}
        value={loginForm.email}
        onChange={changeHandler}
        fontSize="10pt"
        bg="gray.50"
        _placeholder ={{ color: "gray.500"}}
        _focus={{
            outline:"none",
            bg:"white",
            border:"1px solid blue.500"
        }}
        _hover = {{
            bg:"white",
            border:"1px solid blue.500"
        }}
      />
      <Input
        name="password"
        placeholder="Enter Password"
        type="password"
        value={loginForm.password}
        onChange={changeHandler}
        fontSize="10pt"
        bg="gray.50"
        _placeholder ={{ color: "gray.500   "}}
        _focus={{
            outline:"none",
            bg:"white",
            border:"1px solid blue.500"
        }}
        _hover = {{
            bg:"white",
            border:"1px solid blue.500"
        }}
      />
      <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
        Login In
      </Button>
      <Flex fontSize="9pt" align="center" justify="center">
        <Text mr={1}>New here ?</Text>
        <Text color="blue.500" cursor="pointer" onClick={()=> setAuthModalState((prev)=> ({...prev, view:"signup"}))}>Sign Up</Text>
      </Flex>
    </form>
  );
};

export default Login;
