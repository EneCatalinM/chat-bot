import React from "react";

import "./ChatInterface.css";
import { useChat } from "../../context/ChatContext";

const ChatInterface: React.FC = () => {
  const { messages, handleAction, loading, error } = useChat();
  
  if (loading) {
    return (
      <div className="chat-interface chat-loading">
        <div className="spinner"></div>
        <p>Loading stock data...</p>
      </div>
    );
  }
  

  if (error) {
    return <div className="chat-interface">{error}</div>;
  }

  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.type === "user" ? "user-message" : "bot-message"
            }`}
          >
            <p>{message.content}</p>
            {message.actions && (
              <div className="chat-actions">
                {message.actions.map((action, i) => (
                  <button key={i} onClick={() => handleAction(action)}>
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;
