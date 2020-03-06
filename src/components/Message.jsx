import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../assets/css/message.css";

const Message = ({ message }) => {
  return message.source === "bot" ? (
    <div className="py-2">
      <div className="incoming-msg-img">
        <Avatar alt="Bot" src="https://picsum.photos/200/300" />
      </div>
      <div className="incoming-msg">
        <div className="incoming-msg-inner">
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="outgoing-msg">
      <div className="outgoing-msg-inner">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
