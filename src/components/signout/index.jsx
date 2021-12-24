import React from "react";
import { auth } from "../../firebase/firebase";
import { Container, LogoutButton } from "./styles.js";

const Signout = () => {
  const loggout = () => {
    auth.signOut();
  };

  return <LogoutButton onClick={loggout}> sair </LogoutButton>;
};

export default Signout;
