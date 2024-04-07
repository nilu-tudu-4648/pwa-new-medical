import React from "react";
import MedicationTopBar from "../../../components/Medication Components/MedicationTopBar";
import MedicationBody from "../../../components/Medication Components/MedicationBody";

function MedicationScreen() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 main-12">
            <div className="news_main_container">
              <MedicationTopBar />
              <MedicationBody />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicationScreen;
