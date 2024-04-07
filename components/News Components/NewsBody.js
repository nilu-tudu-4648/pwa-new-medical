import React from "react";

function NewsBody() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div style={{ marginTop: "0px" }}>
            <div className="no-data-container">
              <div className="no-data-section-text-container">
                <h3>No News Published Yet</h3>
                <p>
                  We are constantly working to bring you the latest updates.
                  Please check back later for news and updates from us.
                </p>
                <p>
                  In the meantime, feel free to explore other sections of our
                  website for valuable information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBody;
