import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 24%;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    border-radius: 12px;
    transform: scale(1.02);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const Cards = () => {

  return(
    <div className="row d-flex justify-content-between mx-auto">
      <CardContainer className="col-xl-3 col-md-6">
        <div className="mb-5">
          <i className="fas fa-bell"></i>
           Notifications
        </div>
      </CardContainer>
      <CardContainer className="col-xl-3 col-md-6">
        <div className="mb-5">
          <i className="fas fa-envelope"></i>
           Messages
        </div>
      </CardContainer>
      <CardContainer className="col-xl-3 col-md-6">
        <div className="mb-5">
          <i className="fab fa-github"></i>
           Github
        </div>
      </CardContainer>
      <CardContainer className="col-xl-3 col-md-6">
        <div className="mb-5">
          <i className="fas fa-gear"></i>
           Settings
        </div>
      </CardContainer>
    </div>
  );
};

export default Cards;