import React, { useState } from "react";
import { Container, Input, SendButton, Form } from "./styles";
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
      timestamp: serverTimestamp()
    });

    setText("");
  };
  
 
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input value={text} onChange={setValueMsg}></Input>
        <SendButton>Enviar</SendButton>
      </Form>
    </Container>
  );
};

export default Send;
