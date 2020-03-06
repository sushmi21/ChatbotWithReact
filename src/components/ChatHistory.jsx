import React from "react";
import Message from "./Message";

// Component to display the conversations between the user and the bot
const ChatHistory = React.memo(({ messages }) => {
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
