import React from "react";
import styled, { keyframes } from 'styled-components';
import BatchesTableDashboard from "./BatchesTableDashboard";
import ClientsTableDashboard from "./ClientsTableDashboard";
import ProgressBars from "./ProgressBars";
import Cards from "./Cards"

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimationWrapper = styled.div`
  animation: ${zoomIn} 1.5s ease-in-out;
`;

const CardContainer = styled.div`
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

const TopContainer = styled.div`
  width: 49.4%;
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

const Home = () => {
  return(
    <AnimationWrapper>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="row d-flex justify-content-between mx-auto mb-4">
          <TopContainer className="col-md-5">
            <ProgressBars />
          </TopContainer>
          <TopContainer className="col-md-5">
            <div className="mb-3">
              <i className="fas fa-calendar"></i>
               Calendar
            </div>
          </TopContainer>
        </div>
        <Cards/>
        <div className="row">
          <div className="col-lg-6">
            <CardContainer>
              <ClientsTableDashboard/>
            </CardContainer>
          </div>
          <div className="col-lg-6">
            <CardContainer>
              <BatchesTableDashboard/>
            </CardContainer>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Home;