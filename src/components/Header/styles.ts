import styled from "styled-components";

import Colors from "@constants/colors";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  box-shadow: 0px 10px 30px #0000001a;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Segoe UI", "Open Sans";
  text-transform: uppercase;

  p {
    font-weight: 500;
    font-size: 2rem;
  }

  span {
    font-size: 1.1rem;
    margin-left: 5px;
  }
`;

export const DateAndLocaleSelectorContainer = styled.div`
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.dateAndLocaleContainerBackground};
  padding: 0 5px 0 30px;
  border-radius: 40px;
  height: 50%;
  width: 40%;

  @media (max-width: 1025px) {
    display: none;
  }
`;

export const DateSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  margin-left: 10px;
`;

export const DateSelector = styled.input`
  color: ${Colors.textPrimary};
  background: none;

  ::placeholder {
    color: gray;
  }
  border: none;

  display: flex;

  flex-direction: row-reverse;
  font-size: 1.2rem;
  outline: none;
  font-weight: 500;

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 0.28;
    display: block;
    font-size: 1.7rem;
    border-width: thin;
    margin-left: 0;
  }
`;

export const LocaleSelector = styled.button`
  background: none;
  font-size: 1.2rem;
  outline: none;
  font-weight: 500;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex: 2;
  overflow: hidden;

  p {
    margin-left: 5px;
    color: ${Colors.textPrimary};
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const SearchButton = styled.button`
  border-radius: 100%;
  padding: 5px;
  display: flex;
  max-width: 30px;
  align-items: center;
  justify-content: center;
  border: none;
  background: #fff;
  box-shadow: 0px 3px 15px #00000014;
  cursor: pointer;
  display: flex;
  flex: 1;
`;

export const AuthButtons = styled.div`
  display: flex;

  @media (max-width: 426px) {
    display: none;
  }
`;

export const SignUpButton = styled.button`
  background: none;
  color: ${Colors.authButtonBlue};
  font-weight: 500;
  font-size: 1.6rem;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 3px 8px;
  margin-right: 10px;
  cursor: pointer;
`;

export const SignInButton = styled.button`
  background: none;
  color: ${Colors.authButtonBlue};
  font-weight: 500;
  font-size: 1.6rem;
  border: 3px solid ${Colors.authButtonBlue};
  outline: none;
  border-radius: 10px;
  padding: 3px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButtonOpen = styled(SearchButton)`
  display: none;
  @media (max-width: 1025px) {
    display: flex;
  }
  @media (max-width: 481px) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const AuthIcon = styled(SignInButton)`
  display: none;

  padding: 5px;
  align-items: center;
  justify-content: center;

  @media (max-width: 426px) {
    display: flex;
  }
`;

export const ModalLocaleSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.dateAndLocaleContainerBackground};
  padding: 0 5px 0 25px;
  border-radius: 40px;
  height: 35px;
  width: 100%;

  @media (max-width: 769px) {
    padding: 0 5px 0 15px;
  }
`;

export const ModalLocaleSelectorData = styled.div`
  background: none;
  font-size: 1.2rem;
  outline: none;
  font-weight: 500;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  overflow: hidden;

  p {
    margin-left: 5px;
    color: ${Colors.textPrimary};
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ModalDateSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;

  margin: 20px 0;

  @media (max-width: 543px) {
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-bottom: 15px;
    }
  }
`;

export const ModalActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ModalCancelButton = styled(SignUpButton)`
  color: red;
`;
