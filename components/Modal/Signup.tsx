import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";
import { auth } from "../../firebase/appInitialize";
import { FIREBASE_ERRORS } from "../../firebase/errors";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, userData, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError("");
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Password do not match!");
      return;
    }
    // if password matches
    createUserWithEmailAndPassword(signupForm.email, signupForm.password);
  };

  return (
    <form onSubmit={(event) => onSubmitHandler(event)}>
      <Input
        required
        name="email"
        type="email"
        placeholder="Enter email"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        onChange={changeHandler}
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="Enter Password"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        onChange={changeHandler}
      />
      <Input
        required
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        onChange={changeHandler}
      />

      <Text align="center" color="red" fontSize="9pt">
        {error ||
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button
        type="submit"
        mt={2}
        mb={2}
        width="100%"
        height="36px"
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
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
