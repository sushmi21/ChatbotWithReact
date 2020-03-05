import React from "react";
import ChatRoom from "./components/ChatRoom";
import "./assets/css/app.css";

const App = () => {
  return (
    <>
      <h1 className="title">Cognigy Chatbot Assignment</h1>
      <ChatRoom />
      {/* <div className="chat-button">
        <Fab color="primary" aria-label="add">
          <i className="fas fa-comment-alt fa-2x"></i>
        </Fab>
      </div> */}
    </>
  );
};

export default App;
