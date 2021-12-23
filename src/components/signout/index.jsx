import React from "react";
import { auth } from "../../firebase/firebase";
import { LogoutButton } from "./styles";

const Signout = () => {
  const loggout = () => {
    auth.signOut();
  };

  return (
    <div>
      <LogoutButton onClick={loggout}> sair </LogoutButton>
    </div>
  );
};

export default Signout;
