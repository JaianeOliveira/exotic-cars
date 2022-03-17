import styled from "styled-components";

import Colors from "@constants/colors";

export const Screen = styled.div`
  flex: 1;
  height: 100vh;
  background: linear-gradient(125deg, #ffffff, #d8d7d7);
`;

export const CarDataContainer = styled.div<{ image: string }>`
  display: flex;
  flex: 1;
  min-height: 80%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;

  :first-child {
  }
`;
