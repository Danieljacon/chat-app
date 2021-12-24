import React, { useEffect, useState } from "react";
import { Input } from "./styles";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

const Send = () => {
  const [text, setText] = useState("");
  const { uid, photoURL, displayName } = auth.currentUser;

  const setValueMsg = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "mensagens"), {
      text: text,
      photoURL,
      uid,
      displayName,
      timestamp: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={setValueMsg}></Input>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Send;
