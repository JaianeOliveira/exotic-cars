import styled from "styled-components";

export const Card = styled.div<{ isFocused: boolean }>`
  display: flex;

  /* background: linear-gradient(
    90deg,
    ${(props) =>
    props.isFocused
      ? "rgba(197,194,241,1) 0%, rgba(197,194,241,0.3592787456779587) 100%"
      : "rgba(213,213,213,1) 0%, rgba(213,213,213,0.2976540958180147) 100%"}
  ); */

  height: 180px;

  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: 0.4s all;

  transform: scale(${(props) => (props.isFocused ? 1.5 : 1)});
  img {
    width: auto;
    height: auto;
  }

  @media (max-width: 426px) {
    transform: scale(1);
  }
`;
export const Container = styled.div`
  position: fixed;
  bottom: 2vh;
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

  margin-right: 20px;

  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;
