import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MessageInput from "./MessageInput";
import "../assets/css/chatRoom.css";
import ChatHistory from "./ChatHistory";

const { SocketClient } = require("@cognigy/socket-client");
const socketUrl = "https://endpoint-demo.cognigy.ai";

const client = new SocketClient(
  socketUrl,
  process.env.REACT_APP_COGNIGY_TOKEN,
  {
    forceWebsockets: true
  }
);

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Establish connection on mount
  useEffect(() => {
    const establishConnection = async () => {
      // establish a socket connection (returns a promise)
      await client.connect();
    };
    establishConnection();
    return () => {
      client.disconnect();
    };
  }, []);

  const handleSendMessage = e => {
    e.preventDefault();
    if (message !== "") {
      client.sendMessage(message);
      setMessages(messages.concat([{ text: message, source: "test" }]));
      client.on("output", output => {
        setMessages(messages =>
          messages.concat([{ text: output.text, source: output.source }])
        );
      });
      setMessage("");
    }
  };

  return (
    <Container maxWidth="sm">
      <div className="chat-box-wrapper">
        <div className="chat-title">Chat</div>
        <div className="chat-history">
          <ChatHistory messages={messages} />
        </div>
        <div className="mt-3 chat-input">
          <MessageInput
            message={message}
            handleMessageType={e => setMessage(e.target.value)}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </Container>
  );
};

export default ChatRoom;
