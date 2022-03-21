import React from "react";

import {
  HeaderContainer,
  TitleContainer,
  DateSelector,
  AuthButtons,
  DateAndLocaleSelectorContainer,
  LocaleSelector,
  SearchButton,
  SignInButton,
  SignUpButton,
  DateSelectorContainer,
  SearchButtonOpen,
  AuthIcon,
  ModalLocaleSelectorContainer,
  ModalLocaleSelectorData,
  ModalDateSelectorContainer,
  ModalCancelButton,
  ModalActionButtons,
} from "./styles";

import { BsGeoAltFill, BsSearch, BsPersonFill } from "react-icons/bs";
import Colors from "@constants/colors";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    p: 4,
  };
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <TitleContainer onClick={() => navigate("/home")}>
        <p>Exotic</p>
        <span>cars</span>
      </TitleContainer>
      <DateAndLocaleSelectorContainer>
        <LocaleSelector>
          <BsGeoAltFill color="#c4c4c4" size={17} />
          <p>North Carolina, NC 90025</p>
        </LocaleSelector>
        <DateSelectorContainer>
          <DateSelector type="date" />
          <DateSelector type="date" />
        </DateSelectorContainer>
        <SearchButton>
          <BsSearch color={Colors.authButtonBlue} size={17} />
        </SearchButton>
      </DateAndLocaleSelectorContainer>

      <SearchButtonOpen onClick={handleOpen}>
        <BsSearch color={Colors.authButtonBlue} size={17} />
      </SearchButtonOpen>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalLocaleSelectorContainer>
            <ModalLocaleSelectorData>
              <BsGeoAltFill color="#c4c4c4" size={17} />
              <p>North Carolina, NC 90025</p>
            </ModalLocaleSelectorData>
            <SearchButton>
              <BsSearch color={Colors.authButtonBlue} size={17} />
            </SearchButton>
          </ModalLocaleSelectorContainer>
          <ModalDateSelectorContainer>
            <DateSelector type="date" />
            <DateSelector type="date" />
          </ModalDateSelectorContainer>
          <ModalActionButtons>
            <ModalCancelButton onClick={handleClose}>Cancel</ModalCancelButton>
            <SignUpButton>Save</SignUpButton>
          </ModalActionButtons>
        </Box>
      </Modal>

      <AuthButtons>
        <SignUpButton>Sign Up</SignUpButton>
        <SignInButton>Sign In</SignInButton>
      </AuthButtons>

      <AuthIcon>
        <BsPersonFill color={Colors.authButtonBlue} size={20} />
      </AuthIcon>
    </HeaderContainer>
  );
};

export default Header;
