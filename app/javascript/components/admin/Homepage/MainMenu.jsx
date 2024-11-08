import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const BaseContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
`;

const BaseCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

const BaseCard = styled.div`
  border-radius: 5px;
  height: 180px;
  width: 300px;
  border-color: #9c9c9c;
  background-color: #f5f5f7;
  transition: transform 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    border-radius: 12px;
    transform: scale(1.08);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerOne = styled(BaseContainer)`
  width: 964px;
`;

const TopCardContainer = styled(BaseCardContainer)`
  margin-top: 10%;
`;

const TopCard = styled(BaseCard)``;

const MidCardContainer = styled(BaseCardContainer)`
  flex-direction: column;
  width: 930px;
`;

const MidCard = styled(BaseCard)`
  display: block;
  width: 100%;
`;

const BottomCardContainer = styled(BaseCardContainer)``;

const BottomCard = styled(BaseCard)``;

const ContainerTwo = styled(BaseContainer)`
  width: 290px;
`;

const RightCard = styled(BaseCard)`
  margin-top: 34%;
  height: 764px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MainMenu = () => {

  return(
    <>
    <MainContainer>
      <ContainerOne>
        <TopCardContainer>
          <TopCard> Admin Settings </TopCard>
          <StyledLink to="/koda-board/admin/clients">
            <TopCard>
            Client Settings
            </TopCard>
          </StyledLink>
          <TopCard> Courses </TopCard>
        </TopCardContainer>
        <MidCardContainer>
          <MidCard> Batch Settings </MidCard>
          <MidCard> Calendar </MidCard>
        </MidCardContainer>
        <BottomCardContainer>
          <BottomCard> Analytics </BottomCard>
          <BottomCard> Github </BottomCard>
          <BottomCard> Accounts </BottomCard>
        </BottomCardContainer>
      </ContainerOne>
      <ContainerTwo>
        <RightCard> Leaderboards </RightCard>
      </ContainerTwo>
    </MainContainer>
    </>

  );
};

export default MainMenu;