import React from "react";
import "./App.css";
import ChatBody from "./components/chatBody/ChatBody";



function App() {
  return (
    <div className="__main">
    <div className="container">
  <div className="h1-and-nav">
    <h1>Messenger</h1>
    <div className="nav">
      {/* Navigation content goes here */}
      <img src="logo.png" alt="Logo" className="logo" />

    </div>
  </div>
</div>
      <ChatBody />
    </div>
  );
}

export default App;
