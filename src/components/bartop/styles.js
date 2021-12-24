import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
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
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
