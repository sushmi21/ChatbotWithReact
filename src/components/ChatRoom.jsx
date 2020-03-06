import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MessageInput from "./MessageInput";
import "../assets/css/chatRoom.css";
import ChatHistory from "./ChatHistory";
import ScrollToBottom from "react-scroll-to-bottom";
import { addMessage } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const { SocketClient } = require("@cognigy/socket-client");
const socketUrl = "https://endpoint-demo.cognigy.ai";

const client = new SocketClient(
  socketUrl,
  process.env.REACT_APP_COGNIGY_TOKEN,
  {
    forceWebsockets: true
  }
);

// Chat wrapper component
const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector(state => state);
  const dispatch = useDispatch();

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

  // On send button click
  const handleSendMessage = async e => {
    e.preventDefault();
    if (message !== "") {
      await client.sendMessage(message);
      dispatch(addMessage([{ text: message, source: "test" }])); // dispatch action to add message sent by the user
      client.on("output", output => {
        dispatch(addMessage([{ text: output.text, source: output.source }])); // dispatch action to add message received from bot
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
            <ChatHistory />
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
