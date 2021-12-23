import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container, LoginButton } from "./styles";

const Login = () => {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
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
