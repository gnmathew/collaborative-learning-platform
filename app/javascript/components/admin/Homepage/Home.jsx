import React from "react";
import styled, { keyframes } from 'styled-components';
import MainMenu from "./MainMenu";

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

const Home = () => {
  return(
    <div>
      <div>
        <AnimationWrapper>
          <MainMenu />
        </AnimationWrapper>
      </div>
    </div>
  )
}

export default Home;