import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "../assets/css/messageInput.css";

const MessageInput = () => {
  return (
    <Paper component="form" className="msg-input-wrapper">
      <InputBase
        className="msg-input"
        placeholder="Type your message..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton color="primary" className="p-2" aria-label="directions">
        <i className="fas fa-paper-plane" aria-hidden="true" />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
