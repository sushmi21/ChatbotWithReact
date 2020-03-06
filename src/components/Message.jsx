import React from "react";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import "../assets/css/message.css";

// Comonent to display the a message
const Message = React.memo(({ message }) => {
  // check the message source to visually differentiate the message sent by the bot and the user
  return message.source === "bot" ? (
    <div className="py-2">
      <div className="incoming-msg-img">
        <Badge
          color="secondary"
          overlap="circle"
          badgeContent=" "
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
        >
          <Avatar alt="Bot" src="https://picsum.photos/id/1015/200/300" />
        </Badge>
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
});

Message.propTypes = {
  message: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Message;
