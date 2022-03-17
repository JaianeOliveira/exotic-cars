import { width } from "@mui/system";
import styled, { keyframes } from "styled-components";

export const Card = styled.div<{ image: string; isFocused: boolean }>`
  display: flex;
  background: linear-gradient(
    90deg,
    ${(props) =>
        props.isFocused ? " rgba(197, 194, 241, 1)" : "rgba(213, 213, 213, 1)"}
      84%
  );

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: ${(props) => (props.isFocused ? "223px" : "180px")};
  flex: 1;
  min-width: ${(props) => (props.isFocused ? "287px" : "200px")};
  @media (min-width: 1527px) {
    max-width: 287px;
  }
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: 0.4s all;

  :focus {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-height: 25vh;

  justify-content: space-between;
  background-color: transparent;
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background: transparent;

  justify-content: space-between;
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;

  width: 30px;
  cursor: pointer;
`;
