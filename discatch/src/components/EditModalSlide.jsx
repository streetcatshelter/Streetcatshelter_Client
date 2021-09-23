// LIBRARY
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import { useDispatch } from "react-redux";

// ICON
import { MoreHorizontal } from "react-feather";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditDeleteModal = (props) => {
  const { FirstBtn, SecondBtn, FirstClick, SecondClick } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ color: "rgb(249, 200, 82)" }} onClick={handleClickOpen}>
        <MoreHorizontal />
      </Button>
      <Dialog
        style={{
          maxWidth: "420px",
          width: "100vw",
          height: "33%",
          margin: "67vh auto 0 auto",
        }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ListItem
          button
          style={{
            height: "11vh",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#FBD986",
          }}
          onClick={FirstClick}
        >
          {FirstBtn}
        </ListItem>

        <Divider style={{ height: "3px", backgroundColor: "white" }} />

        <ListItem
          button
          onClick={SecondClick}
          style={{
            height: "11vh",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#FBD986",
          }}
        >
          {SecondBtn}
        </ListItem>

        <Divider style={{ height: "3px", backgroundColor: "white" }} />
        <ListItem
          onClick={handleClose}
          button
          style={{
            height: "12vh",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#FBD986",
            position: "relative",
          }}
        >
          취소
        </ListItem>
      </Dialog>
    </div>
  );
};

export default EditDeleteModal;
