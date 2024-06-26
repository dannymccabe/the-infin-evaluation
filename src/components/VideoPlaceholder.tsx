import React from 'react';

const VideoPlaceholder = () => {
  return (
    <div className="video-placeholder-wrapper">
      <div className="video-placeholder">
        <div className="play-container">
          <p>play</p>
          <div className="play-button">
            <div className="circle">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.67424 6.15634L1.53688 0.978012C0.87115 0.554368 0 1.03258 0 1.82167V12.1783C0 12.9674 0.871153 13.4456 1.53688 13.022L9.67425 7.84366C10.2917 7.45071 10.2917 6.54929 9.67424 6.15634Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
