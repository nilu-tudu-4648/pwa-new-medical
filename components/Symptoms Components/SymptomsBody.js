import React from "react";

function SymptomsBody() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div style={{ marginTop: "0px" }}>
            <div className="no-data-container">
              <div className="no-data-section-text-container">
                <h3>No Symptoms Reported</h3>
                <p>
                  Currently, there are no symptoms reported. However, it's
                  essential to stay vigilant about your health and seek medical
                  attention if you experience any unusual symptoms.
                </p>
                <p>
                  Remember to monitor your health regularly and consult with a
                  healthcare professional for any concerns or questions you may
                  have.
                </p>
                <p>
                  In the meantime, you can explore other sections of our website
                  for valuable health information and tips on maintaining
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SymptomsBody;
