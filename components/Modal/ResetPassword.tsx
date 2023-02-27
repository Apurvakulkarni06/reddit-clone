import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalStateAtoms";
import { auth } from "../../firebase/appInitialize";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [sucess, setSuccess] = useState(false);
  const [sendPasswordResetEmail, loading, error] =
    useSendPasswordResetEmail(auth);
  const submitPasswordHandler = async(event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  const changeAuthState = (authStateName: any) => {
    setAuthModalState((prev) => ({ ...prev, view: authStateName }));
  };

  return (
    <Flex align="center" justify="center" margin={3} width="100%">
      <form onSubmit={(event) => submitPasswordHandler(event)}>
        <Image
          src="/images/redditFace.svg"
          alt="redit logo"
          height="36px"
          width="100%"
          mb={2}
        />
        <Text fontWeight={700} fontSize="12pt" mb={2} align="center">
          Reset your Password here
        </Text>
        <Text textAlign="center" fontSize="sm" mb={2}>
          Enter the email associated with your account and we'll send you a
          reset link
        </Text>
        {sucess ? (
          <Text mb={2} textAlign="center">
            Check your email
          </Text>
        ) : (
          <>
            <Input
              required
              type="email"
              placeholder="Enter email here"
              mb={2}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              width="100%"
              height="36px"
              mt={3}
              mb={2}
              isLoading={loading}
            >
              Reset Password
            </Button>
            <Flex fontSize="9pt" justifyContent="center" padding={2}>
              <Text
                color="blue.500"
                fontWeight={700}
                cursor="pointer"
                onClick={() => changeAuthState("login")}
              >
                Login
              </Text>
              <Text> . </Text>
              <Text
                color="blue.500"
                fontWeight={700}
                cursor="pointer"
                onClick={() => changeAuthState("signup")}
              >
                Sign Up
              </Text>
            </Flex>
          </>
        )}
      </form>
    </Flex>
  );
};

export default ResetPassword;
