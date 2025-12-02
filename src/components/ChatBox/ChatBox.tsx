import React, { useState } from "react";
import "./ChatBox.css";

export const ChatBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setOpen(!open);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chat-container">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            Support
            <button onClick={toggleOpen} className="btn btn-close"></button>
          </div>
          <div className="chat-body">
            {messages.length === 0 ? (
              <p className="bot-message">How can I help you? 🙂</p>
            ) : (
              messages.map((msg, i) => (
                <p className="user-message" key={i}>{msg}</p>
              ))
            )}
          </div>
          <div className="chat-footer">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={toggleOpen}>
        💬
      </button>
    </div>
  );
};
