import React from 'react';
import styled from 'styled-components'

const ProgressBars = () => {

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px 0px 14px 0px;
  `

  return (
    <MainContainer>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-success" style={{ width: '25%' }}>
          25%
        </div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-info text-dark" style={{ width: '50%' }}>
          50%
        </div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-warning text-dark" style={{ width: '75%' }}>
          75%
        </div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-danger" style={{ width: '100%' }}>
          100%
        </div>
      </div>
    </MainContainer>
  );
};

export default ProgressBars;
