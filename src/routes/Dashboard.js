import React from 'react';
import styled from 'styled-components';
// Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

const ContainerStyled = styled(Container)`
  padding: 30px 15px;
`;

const RowStyled = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  justify-content: space-between;
`;

const cards = [
  {
    title: "63",
    subtitle: "active referrals"
  },
  {
    title: "$2,455",
    subtitle: "estimated next payment"
  },
  {
    title: "$14,570",
    subtitle: "total payment to date"
  },
  {
    title: "5,130",
    subtitle: "referred page views"
  }
];

const Dashboard = () => {
  return (
    <ContainerStyled>
      <RowStyled>
        {
          cards.map((card, i) => (
            <Card 
              key={i}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))
        }
      </RowStyled>
    </ContainerStyled>
  )
};

export default Dashboard;
