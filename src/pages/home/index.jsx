import React from "react";
import Chat from "../../components/chat";
import Login from "../../components/login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
    {
      user ? <Chat /> : <Login />
    }
    </>
  );
}

export default Home;
