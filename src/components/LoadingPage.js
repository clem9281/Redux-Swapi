import React from "react";

const LoadingPage = () => {
  return (
    <div className="fetch-container">
      <div className="lds-css ng-scope">
        <div className="lds-wedges">
          <div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
