import React, { useState, useEffect, useRef } from "react";
import Signout from "../signout";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  limit,
  query,
  orderBy,
} from "firebase/firestore";
import Send from "../send";
import { Box, MessageBox, UserInfos, Imagem, Text, Title } from "./styles.js";
import BarTop from "../bartop";

const Chat = () => {
  const [msgs, setMsgs] = useState([]);

  const q = query(
    collection(db, "mensagens"),
    orderBy("timestamp", "asc"),
    limit(50)
  );

  useEffect(() => {
    let unmounted = false;
    onSnapshot(q, (snapshot) => {
      setMsgs(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unmounted = true;
    };
  }, []);

  const scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [msgs]);

  const { displayName } = auth.currentUser;

  return (
    <>
      <BarTop>
        <Signout />
        <Title>{displayName}</Title>
      </BarTop>

      <Box>
        {msgs.map(({ text, photoURL, uid, displayName }, index) => (
          <MessageBox key={index + 1} uid={uid === auth.currentUser.uid}>
            <UserInfos>
              <Imagem src={photoURL} alt="" />
              <h1>{displayName}</h1>
            </UserInfos>
            <Text>{text}</Text>
          </MessageBox>
        ))}
        <Send />
      </Box>
      <div ref={scroll}></div>
    </>
  );
};

export default Chat;
