import React from 'react';
import styled from 'styled-components';
// Components
import Container from 'react-bootstrap/Container';

const ContainerStyled = styled(Container)`
  width: 100%;
  margin: 15px;
  padding: 15px;
`;

const Dashboard = () => {
  return (
    <ContainerStyled> 
      Dashboard
    </ContainerStyled>
  )
};

export default Dashboard;
