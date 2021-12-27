import React from "react";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container, LoginButton, Imagem } from "./styles";
import googleIcon from "../../assets/icons/google.png";

const Login = () => {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  return (

      <Container>
        <LoginButton onClick={signInWithGoogle}>
          Faça login com o Google
          <Imagem src={googleIcon} alt="Google" />
        </LoginButton>
      </Container>

  );
};

export default Login;
