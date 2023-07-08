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
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 23px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  cursor: pointer;
  &:hover {
  }
  transition: color 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Text = styled.p`
  font-weight: bolder;
  color: white;
`;
