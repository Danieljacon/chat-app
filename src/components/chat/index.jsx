import React, { useState, useEffect } from "react";
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

const Chat = () => {
  const [msgs, setMsgs] = useState([]);

  const q = query(
    collection(db, "mensagens"),
    orderBy("timestamp", "asc"),
    limit(50)
  );

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMsgs(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      You are logged in!
      <Signout />
      {msgs.map(({ text, photoURL, uid, displayName }, index) => (
        <div key={index + 1}>
          <h1>{displayName}</h1>
          <img src={photoURL} alt="" />
          <p>{text}</p>
        </div>
      ))}
      <Send />
    </div>
  );
};

export default Chat;
