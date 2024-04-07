import React from "react";
import Link from "next/link";
import DisableZoom from "../DisableZoom/DisableZoom";

function OncoChatTopBar() {
  return (
    <>
      <DisableZoom />
      <div className="treatment-main-container">
        <div>
          <Link href="/">
            <img
              src="/back-arrow.svg"
              alt="back-arrow"
              width={20}
              height={20}
              className="treatment-topBar-back-button"
            />
          </Link>
        </div>
        <div className="treatment_display_text_container">
          <h1>Onco Chat</h1>
        </div>
        <div className="oncoChat_display_image_container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="back-arrow"
          />
        </div>
      </div>
    </>
  );
}

export default OncoChatTopBar;
