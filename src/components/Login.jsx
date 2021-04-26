import React from "react";
import Modal from "@material-ui/core/Modal";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <AccountBoxIcon fontSize="large" /> <p>Sign In</p>
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <LoginForm />
        </div>
      </Modal>
    </div>
  );
}
