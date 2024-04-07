import React from "react";

function MedicationBody() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div style={{ marginTop: "0px" }}>
            <div className="no-data-container">
              <div className="no-data-section-text-container">
                <h3>No Medication Suggestions Found</h3>
                <p>
                  We're sorry, but it seems we don't have any medication suggestions for you at the moment.
                </p>
                <p>
                  If you have specific health concerns or conditions, we recommend consulting with a healthcare professional for personalized advice.
                </p>
                <p>
                  In the meantime, feel free to explore other resources on our website for general health information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicationBody;
