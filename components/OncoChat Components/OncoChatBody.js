import React, { useEffect, useRef } from "react";
import DisableZoom from "../DisableZoom/DisableZoom";

function OncoChatBody({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredMessages = messages.filter(
    (message, index) =>
      !(message.inputMessage === "..." && messages[index + 1]?.isUser)
  );

  return (
    <>
      <DisableZoom />
      <div className="OncoChatBody-main-container">
        {filteredMessages.map((message, index) => (
          <div
            key={index}
            className={`OncoChatBody-${
              message.isUser ? "user-chat" : "inner-container"
            }`}
            style={
              index === filteredMessages.length - 1
                ? { paddingBottom: "120px"}
                : {}
            }
          >
            {!message.isUser && (
              <div>
                <div className="OncoChatBody-inner-colored-avatar">
                  <i className="fa-solid fa-robot"></i>
                </div>
              </div>
            )}
            {message.isUser && <span>{message.inputMessage}</span>}
            {message.message && <span>{message.message}</span>}
            {message.isUser && (
              <div>
                <div className="OncoChatBody-inner-colored-avatar-image-container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="User Avatar"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
}

export default OncoChatBody;
