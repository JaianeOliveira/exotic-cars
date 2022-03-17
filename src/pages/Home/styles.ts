import styled from "styled-components";

import Colors from "@constants/colors";

export const CenteredDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20vh 10vw 3vh 10vw;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
  height: 100%;
`;

export const TryAgainButton = styled.button`
  background-color: ${Colors.authButtonBlue};
  border: none;
  outline: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
