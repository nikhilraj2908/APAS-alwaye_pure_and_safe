import React, { useState } from "react";
import "./WhatsAppChat.css";

interface WhatsAppChatProps {
  phoneNumber: string; // WhatsApp number with country code, e.g., +919876543210
  defaultMessage?: string;
}

export const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  phoneNumber,
  defaultMessage = "Hello! I need help 😊",
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const toggleChat = () => setOpen(!open);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="whatsapp-chat-container">
      {open && (
        <div className="whatsapp-chat-box">
          <div className="whatsapp-chat-header">
            WhatsApp Support
            <button onClick={toggleChat} className="btn btn-close btn-close-white"></button>
          </div>
          <div className="whatsapp-chat-body">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
          </div>
          <div className="whatsapp-chat-footer">
            <button onClick={openWhatsApp}>Send to WhatsApp</button>
          </div>
        </div>
      )}
      <button className="bi bi-whatsapp whatsapp-chat-toggle" onClick={toggleChat}>
        
      </button>
    </div>
  );
};
