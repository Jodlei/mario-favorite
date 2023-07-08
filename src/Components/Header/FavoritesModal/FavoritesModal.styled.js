import styled, { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% {
   opacity: 0;
  }
  100% {
     opacity: 1;
  }
`;

export const Wrap = styled.div`
  background-color: rgba(16, 16, 16, 0.75);
  position: absolute;
  top: 72px;
  right: 60px;
  width: 331px;
  height: 292px;
  padding: 18px;
  animation-name: ${slideDown};
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
  color: white;
`;

export const Text = styled.p``;

export const TextPrice = styled.p`
  color: #2243ff;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Image = styled.img`
  margin-right: 5px;
`;
