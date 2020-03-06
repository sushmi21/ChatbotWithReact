import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

// Component to display the conversations between the user and the bot
const ChatHistory = React.memo(() => {
  const messages = useSelector(state => state);

  return (
    <div className="px-2">
      {/* Loop through the messages array to display a message */}
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
});

export default ChatHistory;
