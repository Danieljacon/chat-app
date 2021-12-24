import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container, LoginButton } from "./styles";

const Login = () => {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  return (
    <>
      <Container>
        <LoginButton onClick={signInWithGoogle}>
          Faça login com o Google
        </LoginButton>
      </Container>
    </>
  );
};

export default Login;
