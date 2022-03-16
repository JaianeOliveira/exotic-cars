import styled from "styled-components";

import Colors from "@constants/colors";

export const CardContainer = styled.div`
  display: flex;
  background: ${Colors.carItemBackground};
  height: 223px;
  flex: 1;
  min-width: 287px;
  @media (min-width: 1527px) {
    max-width: 287px;
  }
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  transition: 0.4s all;

  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Background = styled.div<{ image: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BrandAndModel = styled.div`
  color: ${Colors.textPrimary};
  font-size: 1.35rem;

  p {
    text-transform: uppercase;
  }
`;

export const Price = styled.div`
  color: ${Colors.textPrimary};
  font-size: 1.35rem;

  span {
    font-weight: normal;
  }
`;

export const MoreOptionsButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
