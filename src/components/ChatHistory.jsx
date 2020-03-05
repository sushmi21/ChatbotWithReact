import React from "react";
import Avatar from "@material-ui/core/Avatar";

const ChatHistory = () => {
  return (
    <div className="px-2">
      <div className="py-2">
        <div className="incoming-msg-img">
          <Avatar alt="Bot" src="https://picsum.photos/200/300" />
        </div>
        <div className="incoming-msg">
          <div className="incoming-msg-inner">
            <p>
              This is just a sample chat message. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="outgoing-msg">
        <div className="outgoing-msg-inner">
          <p>Sample reply from the user.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
