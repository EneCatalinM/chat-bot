import React, { useState } from "react";

import "./ChatPopup.css";
import { ChatProvider } from "../../context/ChatContext";
import { ChatInterface } from "../ChatInterface";

const ChatPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-popup-container">
      <button className="chat-icon" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h2>LSEG Chatbot</h2>
            <button className="close-button" onClick={toggleChat}>
              ✖
            </button>
          </div>
          <ChatProvider>
            <ChatInterface />
          </ChatProvider>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
