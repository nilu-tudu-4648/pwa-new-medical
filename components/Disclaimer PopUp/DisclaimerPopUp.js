import React, { useState, useEffect } from "react";

function DisclaimerPopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const disclaimerSeen = localStorage.getItem("disclaimerSeen");

      if (!token && !disclaimerSeen) {
        setShowPopup(true);
      }
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("disclaimerSeen", "true");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div
          className="modal fade show disclaimer-popup"
          style={{ display: "block" }}
          id="disclaimerModal"
          tabIndex="-1"
          aria-labelledby="disclaimerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Welcome to CarePilot</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  CarePilot is designed to help you track your symptoms, find
                  relevant medication suggestions, and stay informed about your
                  health. With intuitive features and a user-friendly interface,
                  managing your well-being has never been easier.
                </p>
                <p>
                  <strong>Disclaimer:</strong> carePilot is intended for
                  informational purposes only and should not be considered a
                  substitute for professional medical advice, diagnosis, or
                  treatment. Always seek the advice of your physician or other
                  qualified health provider with any questions you may have
                  regarding a medical condition. Never disregard professional
                  medical advice or delay in seeking it because of something you
                  have read on carePilot.
                </p>
                <p>
                  Remember, while carePilot can provide valuable insights, it is
                  essential to consult with a healthcare professional before
                  making any medical decisions or changes to your treatment
                  plan. Your doctor's guidance and expertise are crucial for
                  ensuring your health and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DisclaimerPopUp;
