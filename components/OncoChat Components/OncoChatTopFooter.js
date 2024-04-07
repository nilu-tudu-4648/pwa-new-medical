import React, { useState, useEffect, useRef } from "react";
import autosize from "autosize";

function OncoChatTopFooter({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
    const handleTouchStart = () => {
      document.body.style.zoom = "100%";
    };
    window.addEventListener("touchstart", handleTouchStart);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setError("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      setError("Please enter text to send a message.");
    } else {
      onSendMessage(message);
      setMessage("");
      setError("");
    }
    textareaRef.current.style.height = "50px";
    textareaRef.current.style.paddingTop = "12px";
  };

  return (
    <div className="OncoChatTopFooter-main-container">
      <form onSubmit={handleSend}>
        <div style={{ display: "flex" }}>
          <div
            className="OncoChatTopFooter-input-container"
            style={{ width: "100%" }}
          >
            <textarea
              placeholder="Type your message"
              className="OncoChatTopFooter-input"
              value={message}
              onChange={handleChange}
              ref={textareaRef}
              style={{
                maxHeight: "200px",
                minHeight: "0px",
                height: "50px",
                width: "100%",
                boxSizing: "border-box",
                fontSize: "15px",
                resize: "vertical",
                overflowY: "auto",
                borderRadius: "40px",
                border: "1px solid #c9c9c9",
                background: "#fff",
                paddingLeft: "20px",
                paddingBottom: "0px",
                paddingTop: "20px",
                outline: "none",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
                WebkitBorderRadius: "40px",
                MozBorderRadius: "40px",
                MsBorderRadius: "40px",
                OBorderRadius: "40px",
              }}
            />
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {error && <div style={{ color: "lightgray" }}>{error}</div>}
            </div>
          </div>
          <div className="onCoChat-footer-button-container">
            <button type="submit" className="OncoChatTopFooter-image-container">
              <img
                src="/oncoChat-send.svg"
                alt="oncoChat-send"
                className="OncoChatTopFooter-send-image"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OncoChatTopFooter;
