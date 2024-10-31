import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 60px;
    flex-direction: column;
    justify-content: center;
  }
`

const Card = styled.div`
  display: inline-block;
  height: 700px;
  width: 300px;
  margin: 50px 10px 70px 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #e6e6e6;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0px;
    height: 200px;
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 70px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`
const CardImage = styled.div`
  padding: 100px;

  @media (max-width: 768px) {
    padding: 5px 0px;
  }
`
const CardBody = styled.div`
  margin-top: 100px;
  padding: 160px 0px;

  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 5px 0px;
  }
`

const MainMenu = () => {
  const role = localStorage.getItem('role')

  return (
    <>
      <CardContainer>
        <Card>
          <CardImage>
            Card Image
          </CardImage>
          <CardBody>
            My Profile
          </CardBody>
        </Card>
        { role == 'student' &&
          <>
            <Card>
              <CardImage>
                Card Image
              </CardImage>
              <CardBody>
                Subjects
              </CardBody>
            </Card>
            <Card>
              <CardImage>
                Card Image
              </CardImage>
              <CardBody>
                Teachers
              </CardBody>
            </Card>
          </>
        }
        { role == 'teacher' &&
          <>
            <Card>
              <CardImage>
                Card Image
              </CardImage>
              <CardBody>
                Courses
              </CardBody>
            </Card>
            <Card>
              <CardImage>
                Card Image
              </CardImage>
              <CardBody>
                Students
              </CardBody>
            </Card>
          </>
        }
        <Card>
          <CardImage>
            Card Image
          </CardImage>
          <CardBody>
            Settings
          </CardBody>
        </Card>
      </CardContainer>
    </>
  );
};

export default MainMenu;