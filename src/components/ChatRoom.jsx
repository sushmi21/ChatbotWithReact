import React from "react";
import Container from "@material-ui/core/Container";
import MessageInput from "./MessageInput";
import "../assets/css/chatRoom.css";
import ChatHistory from "./ChatHistory";

const ChatRoom = () => {
  return (
    <Container maxWidth="sm">
      <div className="chat-wrapper">
        <div className="chat-title">Chat</div>
        <ChatHistory />
        <div className="mt-3 chat-input">
          <MessageInput />
        </div>
      </div>
    </Container>
  );
};

export default ChatRoom;
