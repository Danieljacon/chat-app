import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LoginButton = styled.button`
  padding: 10px;
  border: white 2px solid;
  border-radius: 15px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    #0085ff 0.7%,
    rgba(0, 133, 255, 0.44) 99.99%,
    rgba(95, 95, 95, 0) 100%
  );
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background: linear-gradient(
        90deg,
        #0085ff 0.7%,
        rgba(0, 133, 255, 0.44) 99.99%,
        rgba(95, 95, 95, 0) 100%
      ),
      rgba(0, 0, 0, 0.25);
  }
`;

export const Imagem = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 10px;
`