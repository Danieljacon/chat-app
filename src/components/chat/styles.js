import styled from "styled-components";

export const Box = styled.div`
  padding: 70px 0;
`;

export const MessageBox = styled.div`
  max-width: 1200px;
  padding: 10px;
  word-wrap: break-word;
  margin: 0 auto;
  ${(props) =>
    props.uid
      ? "background: linear-gradient(180deg, rgba(209, 209, 209, 0.5) 1.78%, rgba(209, 209, 209, 0) 101.78%); box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); border-radius: 15px;"
      : ""}

  h1 {
    font-size: 1.5rem;

    font-weight: 700;
    color: white;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Imagem = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 1.2rem;

  font-weight: 400;
  color: white;
  margin: 0;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  padding: 0 10px;
`;
