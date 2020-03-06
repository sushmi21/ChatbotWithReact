import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "../assets/css/messageInput.css";

// Form to type and send a message
const MessageInput = ({ message, handleMessageType, handleSendMessage }) => {
  return (
    <Paper component="form" className="msg-input-wrapper">
      <InputBase
        value={message}
        onChange={handleMessageType}
        className="msg-input"
        placeholder="Type your message..."
        inputProps={{ "aria-label": "type your message" }}
      />
      <IconButton
        type="submit"
        color="primary"
        className="p-2"
        aria-label="directions"
        onClick={handleSendMessage}
      >
        <i className="fas fa-paper-plane" aria-hidden="true" />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
