import React, { useState, useEffect } from "react";
import axios from "axios";
import OncoChatTopBar from "../../../components/OncoChat Components/OncoChatTopBar";
import OncoChatTopFooter from "../../../components/OncoChat Components/OncoChatTopFooter";
import OncoChatBody from "../../../components/OncoChat Components/OncoChatBody";

function OncoChatScreen() {
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [messages, setMessages] = useState([]);
  const [showingLoading, setShowingLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (storedToken) {
      const fetchData = async () => {
        try {
          const userDataResponse = await axios.get(
            `${process.env.MERCURIAL_BACKEND_API}/user`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );
          setUserId(userDataResponse.data._id);

          const chatHistory = JSON.parse(
            localStorage.getItem(`chatHistory_${userDataResponse.data._id}`)
          );
          if (chatHistory) {
            setMessages(chatHistory);
          } else {
            setMessages([
              {
                id: 1,
                message:
                  "Hi! I’m OncoChat! Here to assist you with any questions or concerns you may have about your treatment.",
                isUser: false,
              },
            ]);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    } else {
      console.error("User not authenticated");
    }
  }, []);

  const handleSendMessage = async (inputMessage) => {
    if (
      inputMessage.toLowerCase() === "hi" ||
      inputMessage.toLowerCase() === "hello"
    ) {
      setMessages([
        ...messages,
        { id: messages.length + 1, inputMessage, isUser: true },
        {
          id: messages.length + 2,
          message: "Hey, I'm great, what about you? How can I assist you?",
          isUser: false,
        },
      ]);

      return;
    }
    if (inputMessage.toLowerCase() === "how are you") {
      setMessages([
        ...messages,
        { id: messages.length + 1, inputMessage, isUser: true },
        {
          id: messages.length + 2,
          message: "Thanks for asking, I'm doing great! How about you?",
          isUser: false,
        },
      ]);
      return;
    }

    setMessages([
      ...messages,
      { id: messages.length + 1, inputMessage, isUser: true },
      {
        id: messages.length + 2,
        message: (
          <div className="typing">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        ),
        isUser: false,
      },
    ]);
    setShowingLoading(true);

    try {
      const response = await axios.post(
        `${process.env.MERCURIAL_BACKEND_API}/api_completion`,
        {
          apiKey: "e66013d0-eb55-4446-8901-c7c0d6ef5ede",
          sessionID: "655bea633bf754986662040f",
          history: [
            {
              role: "user",
              content: inputMessage,
            },
          ],
          powerful: false,
          google: true,
        }
      );

      if (response.status === 200 && response.data.success) {
        const botResponse = cleanUpResponse(response.data.output.completion);
        setMessages((prevMessages) => [
          ...prevMessages.filter((msg) => typeof msg.message !== "object"),
          { id: prevMessages.length + 1, message: botResponse, isUser: false },
        ]);
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
    } finally {
      setShowingLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`chatHistory_${userId}`, JSON.stringify(messages));
      const expirationTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
      const timeoutId = setTimeout(() => {
        localStorage.removeItem(`chatHistory_${userId}`);
        console.log("Session data removed after 2 days.");
      }, expirationTime);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, userId]);

  function cleanUpResponse(response) {
    const cleanedResponse = response.replace(/(\d+†source|】|【)/g, "");
    return cleanedResponse;
  }

  return (
    <div className="OncoChatScreen_main_container">
      <OncoChatTopBar />
      <OncoChatBody messages={messages} />
      <OncoChatTopFooter onSendMessage={handleSendMessage} />
    </div>
  );
}

export default OncoChatScreen;
