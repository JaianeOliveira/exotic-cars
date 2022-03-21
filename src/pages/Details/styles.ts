import styled, { createGlobalStyle } from "styled-components";

import Colors from "@constants/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(216,215,215,1) 92%);

  }
`;

export const Screen = styled.div`
  flex: 1;
  padding-bottom: 5vh;
`;

export const CarDataContainer = styled.div<{ image: string }>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  /* padding: 20vh 10vw 5vh 10vw; */

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #313136;
  position: fixed;
  left: 5vw;

  top: 15vh;

  display: flex;
  flex-direction: row;

  div {
    margin-left: 2vw;
  }
  h1 {
    font-size: 4.8rem;
  }

  p {
    font-size: 4rem;
  }

  img {
    height: 15vh;
    align-self: center;
    justify-self: center;
  }

  @media (max-width: 1025px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 3rem;
    }
  }
  @media (max-width: 860px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2.5rem;
    }

    img {
      height: 10vh;
      align-self: center;
      justify-self: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-self: center;
    width: 90%;
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 2rem;
    }

    div {
      margin-left: 0;
    }
  }
`;

export const BackgroundImage = styled.img`
  width: 90%;

  @media (max-width: 1025px) {
    width: 85%;
  }
`;

export const ColorDetail = styled.div`
  color: #313136;
  position: relative;
  left: 40vw;
  top: 30vh;
  font-size: 2.5rem;
  max-width: 40px;
  word-wrap: break-word;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 4rem;
  }

  @media (max-width: 1025px) {
    h3 {
      font-size: 3.5rem;
    }
    font-size: 2rem;
  }

  @media (max-width: 860px) {
    h3 {
      font-size: 3.2rem;
    }
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    top: 36vh;
    h3 {
      font-size: 2.8rem;
    }
    font-size: 1.7rem;
  }

  @media (max-width: 619px) {
    top: 64vh;
    left: 0;
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 2.6rem;
    }
    font-size: 1.4rem;
  }
`;

export const BackToCatalogButton = styled.button`
  position: fixed;
  left: 5vw;
  bottom: 43vh;

  display: flex;
  align-items: center;

  background: none;
  border-radius: 50px;
  padding: 10px 20px;

  color: ${Colors.textSecondary};

  font-size: 25px;

  cursor: pointer;

  border: 2px solid ${Colors.textSecondary};
  p {
    margin-left: 5px;
    font-size: 1.4rem;
  }

  @media (max-width: 1025px) {
    font-size: 20px;

    p {
      margin-left: 5px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 860px) {
    font-size: 18px;
    padding: 10px;
    p {
      margin-left: 5px;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    bottom: 26vh;
    left: 35vw;
  }

  @media (max-width: 619px) {
    left: 10vw;
  }

  @media (max-width: 376px) {
    font-size: 20px;
    padding: 6px;
    width: 85px;
    height: 40px;
    p {
      margin-left: 3px;
      font-size: 1rem;
    }
  }
`;

export const BookNowButton = styled.button`
  position: fixed;
  bottom: 26vh;
  left: 45vw;

  background: #313136;
  border-radius: 50px;
  padding: 10px 20px;

  color: #fff;

  font-size: 22px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;

  p {
    margin-right: 8px;
    font-size: 1.4rem;
  }

  @media (max-width: 860px) {
    font-size: 20px;
    padding: 10px;
    p {
      margin-left: 5px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    left: 55vw;
  }
  @media (max-width: 619px) {
    left: 65vw;
  }

  @media (max-width: 376px) {
    font-size: 20px;
    padding: 6px;
    height: 40px;
    width: 85px;
    p {
      margin-left: 3px;
      font-size: 1rem;
    }
  }
`;
