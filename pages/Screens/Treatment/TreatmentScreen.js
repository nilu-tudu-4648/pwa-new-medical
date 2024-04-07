import React from "react";
import TreatmentTopBar from "../../../components/Treatment Components/TreatmentTopBar";
import TreatmentBody from "../../../components/Treatment Components/TreatmentBody";

function TreatmentScreen() {
  return (
    <>
      <div className="treatment_main_container">
        <TreatmentTopBar />
        <TreatmentBody/>
      </div>
    </>
  );
}

export default TreatmentScreen;
