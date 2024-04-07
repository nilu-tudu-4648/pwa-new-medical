import React from "react";
import Link from "next/link";
import SymptomsTopBar from "../../../components/Symptoms Components/SymptomsTopBar";
import SymptomsBody from "../../../components/Symptoms Components/SymptomsBody";

function SymptomsScreen() {
  return (
    <>
      <SymptomsTopBar/>
      <SymptomsBody/>
    </>
  );
}

export default SymptomsScreen;
