import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import * as React from "react";

import useModal from "../../hooks/useModal";

export default function Modal() {
  const { showModal } = useModal();

  const handleClickAlertModal = () => {
    showModal({
      modalType: "AlertModal",
      modalProps: {
        message: "Alert Message!",
      },
    });
  };

  const handleClickConfirmModal = () => {
    showModal({
      modalType: "ConfirmModal",
      modalProps: {
        message: "Confirm Modal!",
        confirmText: "Yes",
        cancelText: "No",
        handleConfirm: () => {
          console.log("Yes!");
        },
        handleClose: () => {
          console.log("No!");
        },
      },
    });
  };

  return (
    <Container>
      <Typography variant="h4">Global Modal</Typography>

      <Divider sx={{ m: 2 }} />

      <Box>
        <Button
          variant="contained"
          onClick={handleClickAlertModal}
          sx={{ mx: 2 }}
        >
          Alert Modal
        </Button>
        <Button
          variant="contained"
          onClick={handleClickConfirmModal}
          sx={{ mx: 2 }}
        >
          Confirm Modal
        </Button>
      </Box>
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
