import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalStateAtoms";
import { Button } from "@chakra-ui/react";
const AuthButtons: React.FC = () => {

  const setAuthModalState = useSetRecoilState(authModalState);
  const handleSetView = (isLogin = true) => {
    const data = { open: true, view: isLogin ? 'login' : 'signup' }
    setAuthModalState(data);
  };
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => handleSetView()}
      >
        Log in
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => handleSetView(false)}
      >
        Sign up
      </Button>
    </>
  );
};

export default AuthButtons;
