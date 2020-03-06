import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MessageInput from "./MessageInput";
import "../assets/css/chatRoom.css";
import ChatHistory from "./ChatHistory";
import ScrollToBottom from "react-scroll-to-bottom";

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

  useEffect(() => {
    const establishConnection = async () => {
      // Establish socket connection on mount
      await client.connect();
    };
    establishConnection();
    return () => {
      // remove connection on unmount
      client.disconnect();
    };
  }, []);

  const handleSendMessage = e => {
    e.preventDefault();
    if (message !== "") {
      client.sendMessage(message);
      setMessages(messages.concat([{ text: message, source: "test" }])); // message sent by the user
      client.on("output", output => {
        setMessages(
          messages =>
            messages.concat([{ text: output.text, source: output.source }]) // message received from bot
        );
      });
      setMessage(""); //reset the input field
    }
  };

  return (
    <Container maxWidth="sm">
      <div className="chat-box-wrapper">
        <div className="chat-title">Chat</div>

        {/* Wrapper component to automatically scroll to botton when new messages are sent or recieved */}
        <ScrollToBottom className="chat-history">
          {messages.length !== 0 ? (
            <ChatHistory messages={messages} />
          ) : (
            // Display initial text if no messages to display
            <div className="text-muted m-5 text-center">
              Start a conversation with our bot
            </div>
          )}
        </ScrollToBottom>

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
