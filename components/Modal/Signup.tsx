import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";

const Signup: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form>
      <Input
        name="email"
        type="email"
        placeholder="Enter email"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
            outline:"none",
            bg:"white",
            border:"1px solid blue.500"
        }}
        _hover={{
            bg:"white",
            border:"1px solid blue.500"
        }}
        onChange={changeHandler}
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter Password"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
            outline:"none",
            bg:"white",
            border:"1px solid blue.500"
        }}
        _hover={{
            bg:"white",
            border:"1px solid blue.500"
        }}
        onChange={changeHandler}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
            outline:"none",
            bg:"white",
            border:"1px solid blue.500"
        }}
        _hover={{
            bg:"white",
            border:"1px solid blue.500"
        }}
        onChange={changeHandler}
      />
      <Button type="submit" mb={2} width="100%" height="36px">Sign Up</Button>
      <Flex  fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already have an account?</Text>
        <Text
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};

export default Signup;
