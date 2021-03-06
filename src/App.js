import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="m-3 text-center" style={{ fontSize: "1.5rem" }}>
        Sample Chatbot
      </h1>
      <Switch>
        <Route exact path="/" component={ChatRoom} />
        <Route Route path="*" exact>
          <div>Page Not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
