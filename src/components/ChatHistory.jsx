import React from "react";
import Message from "./Message";

const ChatHistory = React.memo(({ messages }) => {
  return (
    <div className="px-2">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
});

export default ChatHistory;
