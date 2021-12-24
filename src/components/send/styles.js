import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  background: linear-gradient(
    87deg,
    rgba(10, 0, 255, 1) 0%,
    rgba(0, 251, 255, 0.5091616169790203) 100%
  );
  /* border-bottom: white 1px solid; */
  box-shadow: 0px -4px 0px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
    font-size: 1.2rem;
    border: none;
    border-radius: 15px;
    padding: 5px 10px;
    width: 60%;
`

export const SendButton = styled.button`
  padding: 5px 20px;
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

export const Form = styled.form`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

